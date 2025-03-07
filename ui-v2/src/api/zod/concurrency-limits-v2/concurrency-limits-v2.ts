/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import { z as zod } from "zod";

/**
 * Create a task run concurrency limit.

For more information, see https://docs.prefect.io/v3/develop/global-concurrency-limits.
 * @summary Create Concurrency Limit V2
 */
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostHeader = zod.object(
	{
		"x-prefect-api-version": zod.string().optional(),
	},
);

export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyActiveDefault = true;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyNameRegExp =
	new RegExp("^[^/%&><]+$");
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyLimitMin = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyActiveSlotsDefault = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyActiveSlotsMin = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyDeniedSlotsDefault = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyDeniedSlotsMin = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodySlotDecayPerSecondDefault = 0;
export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBodySlotDecayPerSecondMin = 0;

export const createConcurrencyLimitV2V2ConcurrencyLimitsPostBody = zod.object({
	active: zod
		.boolean()
		.default(createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyActiveDefault),
	name: zod
		.string()
		.regex(createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyNameRegExp),
	limit: zod
		.number()
		.min(createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyLimitMin),
	active_slots: zod
		.number()
		.min(createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyActiveSlotsMin)
		.optional(),
	denied_slots: zod
		.number()
		.min(createConcurrencyLimitV2V2ConcurrencyLimitsPostBodyDeniedSlotsMin)
		.optional(),
	slot_decay_per_second: zod
		.number()
		.min(
			createConcurrencyLimitV2V2ConcurrencyLimitsPostBodySlotDecayPerSecondMin,
		)
		.optional(),
});

/**
 * @summary Read Concurrency Limit V2
 */
export const readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetParams =
	zod.object({
		id_or_name: zod.string().uuid().or(zod.string()),
	});

export const readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetResponseActiveDefault = true;
export const readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetResponseSlotDecayPerSecondDefault = 2;

export const readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetResponse =
	zod.object({
		id: zod.string().uuid(),
		created: zod.string().datetime().or(zod.null()),
		updated: zod.string().datetime().or(zod.null()),
		active: zod
			.boolean()
			.default(
				readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetResponseActiveDefault,
			),
		name: zod.string(),
		limit: zod.number(),
		active_slots: zod.number(),
		slot_decay_per_second: zod
			.number()
			.default(
				readConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameGetResponseSlotDecayPerSecondDefault,
			),
	});

/**
 * @summary Update Concurrency Limit V2
 */
export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchParams =
	zod.object({
		id_or_name: zod.string().uuid().or(zod.string()),
	});

export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyNameRegExpOne =
	new RegExp("^[^/%&><]+$");
export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyLimitMinOne = 0;
export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyActiveSlotsMinOne = 0;
export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyDeniedSlotsMinOne = 0;
export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodySlotDecayPerSecondMinOne = 0;

export const updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBody =
	zod.object({
		active: zod.boolean().or(zod.null()).optional(),
		name: zod
			.string()
			.regex(
				updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyNameRegExpOne,
			)
			.or(zod.null())
			.optional(),
		limit: zod
			.number()
			.min(
				updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyLimitMinOne,
			)
			.or(zod.null())
			.optional(),
		active_slots: zod
			.number()
			.min(
				updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyActiveSlotsMinOne,
			)
			.or(zod.null())
			.optional(),
		denied_slots: zod
			.number()
			.min(
				updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodyDeniedSlotsMinOne,
			)
			.or(zod.null())
			.optional(),
		slot_decay_per_second: zod
			.number()
			.min(
				updateConcurrencyLimitV2V2ConcurrencyLimitsIdOrNamePatchBodySlotDecayPerSecondMinOne,
			)
			.or(zod.null())
			.optional(),
	});

/**
 * @summary Delete Concurrency Limit V2
 */
export const deleteConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameDeleteParams =
	zod.object({
		id_or_name: zod.string().uuid().or(zod.string()),
	});

export const deleteConcurrencyLimitV2V2ConcurrencyLimitsIdOrNameDeleteHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

/**
 * @summary Read All Concurrency Limits V2
 */
export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostBodyOffsetDefault = 0;
export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostBodyOffsetMin = 0;

export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostBody =
	zod.object({
		offset: zod
			.number()
			.min(readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostBodyOffsetMin)
			.optional(),
		limit: zod.number().optional(),
	});

export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseActiveDefault = true;
export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseSlotDecayPerSecondDefault = 2;

export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseItem =
	zod.object({
		id: zod.string().uuid(),
		created: zod.string().datetime().or(zod.null()),
		updated: zod.string().datetime().or(zod.null()),
		active: zod
			.boolean()
			.default(
				readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseActiveDefault,
			),
		name: zod.string(),
		limit: zod.number(),
		active_slots: zod.number(),
		slot_decay_per_second: zod
			.number()
			.default(
				readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseSlotDecayPerSecondDefault,
			),
	});
export const readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponse =
	zod.array(
		readAllConcurrencyLimitsV2V2ConcurrencyLimitsFilterPostResponseItem,
	);

/**
 * @summary Bulk Increment Active Slots
 */
export const bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostBodyModeDefault =
	"concurrency";

export const bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostBody =
	zod.object({
		slots: zod.number(),
		names: zod.array(zod.string()),
		mode: zod
			.enum(["concurrency", "rate_limit"])
			.default(
				bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostBodyModeDefault,
			),
		create_if_missing: zod.boolean().or(zod.null()).optional(),
	});

export const bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostResponseItem =
	zod.object({
		id: zod.string().uuid(),
		name: zod.string(),
		limit: zod.number(),
	});
export const bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostResponse =
	zod.array(
		bulkIncrementActiveSlotsV2ConcurrencyLimitsIncrementPostResponseItem,
	);

/**
 * @summary Bulk Decrement Active Slots
 */
export const bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostBodyCreateIfMissingDefault = true;

export const bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostBody =
	zod.object({
		slots: zod.number(),
		names: zod.array(zod.string()),
		occupancy_seconds: zod.number().or(zod.null()).optional(),
		create_if_missing: zod
			.boolean()
			.default(
				bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostBodyCreateIfMissingDefault,
			),
	});

export const bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostResponseItem =
	zod.object({
		id: zod.string().uuid(),
		name: zod.string(),
		limit: zod.number(),
	});
export const bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostResponse =
	zod.array(
		bulkDecrementActiveSlotsV2ConcurrencyLimitsDecrementPostResponseItem,
	);
