import type { BodyReadBlockTypesBlockTypesFilterPostBlockSchemas } from "./bodyReadBlockTypesBlockTypesFilterPostBlockSchemas";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { BodyReadBlockTypesBlockTypesFilterPostBlockTypes } from "./bodyReadBlockTypesBlockTypesFilterPostBlockTypes";

export interface BodyReadBlockTypesBlockTypesFilterPost {
	block_types?: BodyReadBlockTypesBlockTypesFilterPostBlockTypes;
	block_schemas?: BodyReadBlockTypesBlockTypesFilterPostBlockSchemas;
	/** @minimum 0 */
	offset?: number;
	/** Defaults to PREFECT_API_DEFAULT_LIMIT if not provided. */
	limit?: number;
}
