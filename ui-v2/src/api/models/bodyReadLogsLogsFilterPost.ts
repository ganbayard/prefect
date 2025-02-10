/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { LogFilter } from "./logFilter";
import type { LogSort } from "./logSort";

export interface BodyReadLogsLogsFilterPost {
	/** @minimum 0 */
	offset?: number;
	logs?: LogFilter;
	sort?: LogSort;
	/** Defaults to PREFECT_API_DEFAULT_LIMIT if not provided. */
	limit?: number;
}
