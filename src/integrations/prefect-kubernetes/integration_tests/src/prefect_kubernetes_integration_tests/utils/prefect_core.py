from __future__ import annotations

import subprocess
import time
from typing import Any
from uuid import UUID

from rich.console import Console

from prefect import flow, get_client
from prefect.client.schemas.objects import FlowRun
from prefect.events.schemas.events import Event
from prefect.states import StateType

console = Console()


async def create_flow_run(
    source: str,
    entrypoint: str,
    name: str,
    work_pool_name: str,
    job_variables: dict[str, Any] | None = None,
    parameters: dict[str, Any] | None = None,
) -> FlowRun:
    """Create a flow run from a remote source."""
    remote_flow = await flow.from_source(source=source, entrypoint=entrypoint)
    deployment_id = await remote_flow.deploy(
        name=name,
        work_pool_name=work_pool_name,
        job_variables=job_variables,
    )

    async with get_client() as client:
        return await client.create_flow_run_from_deployment(
            deployment_id, parameters=parameters
        )


def start_worker(work_pool_name: str, run_once: bool = True) -> int:
    """Start a Prefect worker for the given work pool."""
    args = ["prefect", "worker", "start", "--pool", work_pool_name]
    if run_once:
        args.append("--run-once")

    return subprocess.check_call(args)


def get_flow_run_state(flow_run_id: UUID) -> tuple[StateType | None, str | None]:
    """Get the current state of a flow run."""
    with get_client(sync_client=True) as client:
        flow_run = client.read_flow_run(flow_run_id)
        if not flow_run.state:
            return None, "No state found"
        return flow_run.state.type, flow_run.state.message


def wait_for_flow_run_state(
    flow_run_id: UUID, target_state: StateType, timeout: int = 10
) -> None:
    """Wait for a flow run to reach a specific state."""
    start_time = time.time()
    while True:
        state, _message = get_flow_run_state(flow_run_id)
        if state == target_state:
            return
        time.sleep(1)
        if time.time() - start_time > timeout:
            raise TimeoutError(
                f"Flow run {flow_run_id} did not reach state {target_state!r} within {timeout} seconds. Final state: {state!r}"
            )


async def read_pod_events_for_flow_run(flow_run_id: UUID) -> list[Event]:
    """Read events for a flow run."""
    async with get_client() as client:
        response = await client.request(
            "POST",
            "/events/filter",
            json={
                "filter": {
                    "event": {"prefix": ["prefect.kubernetes.pod"]},
                    "related": {
                        "id": [f"prefect.flow-run.{flow_run_id}"],
                    },
                },
            },
        )
        return [Event.model_validate(event) for event in response.json()["events"]]
