/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { BodyBulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostOccupancySeconds } from "./bodyBulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostOccupancySeconds";

export interface BodyBulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPost {
	/** */
	slots: number;
	names: string[];
	occupancy_seconds?: BodyBulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostOccupancySeconds;
	create_if_missing?: boolean;
}
