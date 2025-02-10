/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { WorkQueueFilterNameAny } from "./workQueueFilterNameAny";
import type { WorkQueueFilterNameStartswith } from "./workQueueFilterNameStartswith";

/**
 * Filter by `WorkQueue.name`.
 */
export interface WorkQueueFilterName {
	/** A list of work queue names to include */
	any_?: WorkQueueFilterNameAny;
	/** A list of case-insensitive starts-with matches. For example,  passing 'marvin' will match 'marvin', and 'Marvin-robot', but not 'sad-marvin'. */
	startswith_?: WorkQueueFilterNameStartswith;
}
