/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import { z as zod } from "zod";

/**
 * Create a task run concurrency limit.

For more information, see https://docs.prefect.io/v3/develop/task-run-limits.
 * @summary Create Concurrency Limit
 */
export const createConcurrencyLimitConcurrencyLimitsPostHeader = zod.object({
	"x-prefect-api-version": zod.string().optional(),
});

export const createConcurrencyLimitConcurrencyLimitsPostBody = zod.object({
	tag: zod.string(),
	concurrency_limit: zod.number(),
});

export const createConcurrencyLimitConcurrencyLimitsPostResponse = zod.object({
	id: zod.string().uuid(),
	created: zod.string().datetime().or(zod.null()),
	updated: zod.string().datetime().or(zod.null()),
	tag: zod.string(),
	concurrency_limit: zod.number(),
	active_slots: zod.array(zod.string().uuid()).optional(),
});

/**
 * Get a concurrency limit by id.

The `active slots` field contains a list of TaskRun IDs currently using a
concurrency slot for the specified tag.
 * @summary Read Concurrency Limit
 */
export const readConcurrencyLimitConcurrencyLimitsIdGetParams = zod.object({
	id: zod.string().uuid(),
});

export const readConcurrencyLimitConcurrencyLimitsIdGetHeader = zod.object({
	"x-prefect-api-version": zod.string().optional(),
});

export const readConcurrencyLimitConcurrencyLimitsIdGetResponse = zod.object({
	id: zod.string().uuid(),
	created: zod.string().datetime().or(zod.null()),
	updated: zod.string().datetime().or(zod.null()),
	tag: zod.string(),
	concurrency_limit: zod.number(),
	active_slots: zod.array(zod.string().uuid()).optional(),
});

/**
 * @summary Delete Concurrency Limit
 */
export const deleteConcurrencyLimitConcurrencyLimitsIdDeleteParams = zod.object(
	{
		id: zod.string().uuid(),
	},
);

export const deleteConcurrencyLimitConcurrencyLimitsIdDeleteHeader = zod.object(
	{
		"x-prefect-api-version": zod.string().optional(),
	},
);

export const deleteConcurrencyLimitConcurrencyLimitsIdDeleteResponse =
	zod.any();

/**
 * Get a concurrency limit by tag.

The `active slots` field contains a list of TaskRun IDs currently using a
concurrency slot for the specified tag.
 * @summary Read Concurrency Limit By Tag
 */
export const readConcurrencyLimitByTagConcurrencyLimitsTagTagGetParams =
	zod.object({
		tag: zod.string(),
	});

export const readConcurrencyLimitByTagConcurrencyLimitsTagTagGetHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const readConcurrencyLimitByTagConcurrencyLimitsTagTagGetResponse =
	zod.object({
		id: zod.string().uuid(),
		created: zod.string().datetime().or(zod.null()),
		updated: zod.string().datetime().or(zod.null()),
		tag: zod.string(),
		concurrency_limit: zod.number(),
		active_slots: zod.array(zod.string().uuid()).optional(),
	});

/**
 * @summary Delete Concurrency Limit By Tag
 */
export const deleteConcurrencyLimitByTagConcurrencyLimitsTagTagDeleteParams =
	zod.object({
		tag: zod.string(),
	});

export const deleteConcurrencyLimitByTagConcurrencyLimitsTagTagDeleteHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const deleteConcurrencyLimitByTagConcurrencyLimitsTagTagDeleteResponse =
	zod.any();

/**
 * Query for concurrency limits.

For each concurrency limit the `active slots` field contains a list of TaskRun IDs
currently using a concurrency slot for the specified tag.
 * @summary Read Concurrency Limits
 */
export const readConcurrencyLimitsConcurrencyLimitsFilterPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const readConcurrencyLimitsConcurrencyLimitsFilterPostBodyOffsetDefault = 0;
export const readConcurrencyLimitsConcurrencyLimitsFilterPostBodyOffsetMin = 0;

export const readConcurrencyLimitsConcurrencyLimitsFilterPostBody = zod.object({
	offset: zod
		.number()
		.min(readConcurrencyLimitsConcurrencyLimitsFilterPostBodyOffsetMin)
		.optional(),
	limit: zod.number().optional(),
});

export const readConcurrencyLimitsConcurrencyLimitsFilterPostResponseItem =
	zod.object({
		id: zod.string().uuid(),
		created: zod.string().datetime().or(zod.null()),
		updated: zod.string().datetime().or(zod.null()),
		tag: zod.string(),
		concurrency_limit: zod.number(),
		active_slots: zod.array(zod.string().uuid()).optional(),
	});
export const readConcurrencyLimitsConcurrencyLimitsFilterPostResponse =
	zod.array(readConcurrencyLimitsConcurrencyLimitsFilterPostResponseItem);

/**
 * @summary Reset Concurrency Limit By Tag
 */
export const resetConcurrencyLimitByTagConcurrencyLimitsTagTagResetPostParams =
	zod.object({
		tag: zod.string(),
	});

export const resetConcurrencyLimitByTagConcurrencyLimitsTagTagResetPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const resetConcurrencyLimitByTagConcurrencyLimitsTagTagResetPostBody =
	zod.object({
		slot_override: zod.array(zod.string().uuid()).or(zod.null()).optional(),
	});

export const resetConcurrencyLimitByTagConcurrencyLimitsTagTagResetPostResponse =
	zod.any();

/**
 * @summary Increment Concurrency Limits V1
 */
export const incrementConcurrencyLimitsV1ConcurrencyLimitsIncrementPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const incrementConcurrencyLimitsV1ConcurrencyLimitsIncrementPostBody =
	zod.object({
		names: zod.array(zod.string()),
		task_run_id: zod.string().uuid(),
	});

export const incrementConcurrencyLimitsV1ConcurrencyLimitsIncrementPostResponseItem =
	zod.object({
		id: zod.string().uuid(),
		name: zod.string(),
		limit: zod.number(),
	});
export const incrementConcurrencyLimitsV1ConcurrencyLimitsIncrementPostResponse =
	zod.array(
		incrementConcurrencyLimitsV1ConcurrencyLimitsIncrementPostResponseItem,
	);

/**
 * @summary Decrement Concurrency Limits V1
 */
export const decrementConcurrencyLimitsV1ConcurrencyLimitsDecrementPostHeader =
	zod.object({
		"x-prefect-api-version": zod.string().optional(),
	});

export const decrementConcurrencyLimitsV1ConcurrencyLimitsDecrementPostBody =
	zod.object({
		names: zod.array(zod.string()),
		task_run_id: zod.string().uuid(),
	});

export const decrementConcurrencyLimitsV1ConcurrencyLimitsDecrementPostResponse =
	zod.any();
