/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { EventFilter } from "./eventFilter";
import type { TimeUnit } from "./timeUnit";

export interface BodyCountAccountEventsEventsCountByCountablePost {
	filter: EventFilter;
	time_unit?: TimeUnit;
	/** @minimum 0.01 */
	time_interval?: number;
}
