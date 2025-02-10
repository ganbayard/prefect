/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { LogCreated } from "./logCreated";
import type { LogFlowRunId } from "./logFlowRunId";
import type { LogTaskRunId } from "./logTaskRunId";
import type { LogUpdated } from "./logUpdated";

/**
 * An ORM representation of log data.
 */
export interface Log {
	id: string;
	created: LogCreated;
	updated: LogUpdated;
	/** The logger name. */
	name: string;
	/** The log level. */
	level: number;
	/** The log message. */
	message: string;
	/** The log timestamp. */
	timestamp: string;
	/** The flow run ID associated with the log. */
	flow_run_id?: LogFlowRunId;
	/** The task run ID associated with the log. */
	task_run_id?: LogTaskRunId;
}
