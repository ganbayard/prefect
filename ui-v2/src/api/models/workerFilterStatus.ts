/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { WorkerFilterStatusAny } from "./workerFilterStatusAny";
import type { WorkerFilterStatusNotAny } from "./workerFilterStatusNotAny";

/**
 * Filter by `Worker.status`.
 */
export interface WorkerFilterStatus {
	/** A list of worker statuses to include */
	any_?: WorkerFilterStatusAny;
	/** A list of worker statuses to exclude */
	not_any_?: WorkerFilterStatusNotAny;
}
