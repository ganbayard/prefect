/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */

export interface BodyDecrementConcurrencyLimitsV1ConcurrencyLimitsDecrementPost {
	/** The tags to release a slot for */
	names: string[];
	/** The ID of the task run releasing the slot */
	task_run_id: string;
}
