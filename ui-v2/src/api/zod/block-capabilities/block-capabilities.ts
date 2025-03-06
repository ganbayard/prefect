/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import { z as zod } from "zod";

/**
 * Get available block capabilities.

For more information, see https://docs.prefect.io/v3/develop/blocks.
 * @summary Read Available Block Capabilities
 */
export const readAvailableBlockCapabilitiesBlockCapabilitiesGetHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const readAvailableBlockCapabilitiesBlockCapabilitiesGetResponseItem =
	zod.string();
export const readAvailableBlockCapabilitiesBlockCapabilitiesGetResponse =
	zod.array(readAvailableBlockCapabilitiesBlockCapabilitiesGetResponseItem);
