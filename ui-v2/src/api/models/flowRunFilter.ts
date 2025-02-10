import type { FlowRunFilterDeploymentIdProperty } from "./flowRunFilterDeploymentIdProperty";
import type { FlowRunFilterEndTimeProperty } from "./flowRunFilterEndTimeProperty";
import type { FlowRunFilterExpectedStartTimeProperty } from "./flowRunFilterExpectedStartTimeProperty";
import type { FlowRunFilterFlowVersionProperty } from "./flowRunFilterFlowVersionProperty";
import type { FlowRunFilterIdProperty } from "./flowRunFilterIdProperty";
import type { FlowRunFilterIdempotencyKeyProperty } from "./flowRunFilterIdempotencyKeyProperty";
import type { FlowRunFilterNameProperty } from "./flowRunFilterNameProperty";
import type { FlowRunFilterNextScheduledStartTimeProperty } from "./flowRunFilterNextScheduledStartTimeProperty";
import type { FlowRunFilterParentFlowRunIdProperty } from "./flowRunFilterParentFlowRunIdProperty";
import type { FlowRunFilterParentTaskRunIdProperty } from "./flowRunFilterParentTaskRunIdProperty";
import type { FlowRunFilterStartTimeProperty } from "./flowRunFilterStartTimeProperty";
import type { FlowRunFilterStateProperty } from "./flowRunFilterStateProperty";
import type { FlowRunFilterTagsProperty } from "./flowRunFilterTagsProperty";
import type { FlowRunFilterWorkQueueNameProperty } from "./flowRunFilterWorkQueueNameProperty";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { Operator } from "./operator";

/**
 * Filter flow runs. Only flow runs matching all criteria will be returned
 */
export interface FlowRunFilter {
	/** Operator for combining filter criteria. Defaults to 'and_'. */
	operator?: Operator;
	/** Filter criteria for `FlowRun.id` */
	id?: FlowRunFilterIdProperty;
	/** Filter criteria for `FlowRun.name` */
	name?: FlowRunFilterNameProperty;
	/** Filter criteria for `FlowRun.tags` */
	tags?: FlowRunFilterTagsProperty;
	/** Filter criteria for `FlowRun.deployment_id` */
	deployment_id?: FlowRunFilterDeploymentIdProperty;
	/** Filter criteria for `FlowRun.work_queue_name */
	work_queue_name?: FlowRunFilterWorkQueueNameProperty;
	/** Filter criteria for `FlowRun.state` */
	state?: FlowRunFilterStateProperty;
	/** Filter criteria for `FlowRun.flow_version` */
	flow_version?: FlowRunFilterFlowVersionProperty;
	/** Filter criteria for `FlowRun.start_time` */
	start_time?: FlowRunFilterStartTimeProperty;
	/** Filter criteria for `FlowRun.end_time` */
	end_time?: FlowRunFilterEndTimeProperty;
	/** Filter criteria for `FlowRun.expected_start_time` */
	expected_start_time?: FlowRunFilterExpectedStartTimeProperty;
	/** Filter criteria for `FlowRun.next_scheduled_start_time` */
	next_scheduled_start_time?: FlowRunFilterNextScheduledStartTimeProperty;
	/** Filter criteria for subflows of the given flow runs */
	parent_flow_run_id?: FlowRunFilterParentFlowRunIdProperty;
	/** Filter criteria for `FlowRun.parent_task_run_id` */
	parent_task_run_id?: FlowRunFilterParentTaskRunIdProperty;
	/** Filter criteria for `FlowRun.idempotency_key` */
	idempotency_key?: FlowRunFilterIdempotencyKeyProperty;
}
