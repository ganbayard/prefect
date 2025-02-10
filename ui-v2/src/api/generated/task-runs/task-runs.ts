/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type {
	DataTag,
	DefinedInitialDataOptions,
	DefinedUseQueryResult,
	MutationFunction,
	QueryFunction,
	QueryKey,
	UndefinedInitialDataOptions,
	UseMutationOptions,
	UseMutationResult,
	UseQueryOptions,
	UseQueryResult,
	UseSuspenseQueryOptions,
	UseSuspenseQueryResult,
} from "@tanstack/react-query";
import type {
	BodyCountTaskRunsTaskRunsCountPost,
	BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost,
	BodyReadTaskRunCountsByStateUiTaskRunsCountPost,
	BodyReadTaskRunsTaskRunsFilterPost,
	BodySetTaskRunStateTaskRunsIdSetStatePost,
	BodyTaskRunHistoryTaskRunsHistoryPost,
	CountByState,
	HTTPValidationError,
	HistoryResponse,
	OrchestrationResult,
	TaskRun,
	TaskRunCount,
	TaskRunCreate,
	TaskRunUpdate,
} from "../../models";

/**
 * Create a task run. If a task run with the same flow_run_id,
task_key, and dynamic_key already exists, the existing task
run will be returned.

If no state is provided, the task run will be created in a PENDING state.
 * @summary Create Task Run
 */
export type createTaskRunTaskRunsPostResponse = {
	data: TaskRun | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getCreateTaskRunTaskRunsPostUrl = () => {
	return `http://prefect.grose.click/api/task_runs/`;
};

export const createTaskRunTaskRunsPost = async (
	taskRunCreate: TaskRunCreate,
	options?: RequestInit,
): Promise<createTaskRunTaskRunsPostResponse> => {
	const res = await fetch(getCreateTaskRunTaskRunsPostUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(taskRunCreate),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: createTaskRunTaskRunsPostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as createTaskRunTaskRunsPostResponse;
};

export const getCreateTaskRunTaskRunsPostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>,
		TError,
		{ data: TaskRunCreate },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>,
	TError,
	{ data: TaskRunCreate },
	TContext
> => {
	const mutationKey = ["createTaskRunTaskRunsPost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>,
		{ data: TaskRunCreate }
	> = (props) => {
		const { data } = props ?? {};

		return createTaskRunTaskRunsPost(data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type CreateTaskRunTaskRunsPostMutationResult = NonNullable<
	Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>
>;
export type CreateTaskRunTaskRunsPostMutationBody = TaskRunCreate;
export type CreateTaskRunTaskRunsPostMutationError = HTTPValidationError;

/**
 * @summary Create Task Run
 */
export const useCreateTaskRunTaskRunsPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>,
		TError,
		{ data: TaskRunCreate },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof createTaskRunTaskRunsPost>>,
	TError,
	{ data: TaskRunCreate },
	TContext
> => {
	const mutationOptions = getCreateTaskRunTaskRunsPostMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Updates a task run.
 * @summary Update Task Run
 */
export type updateTaskRunTaskRunsIdPatchResponse = {
	data: void | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getUpdateTaskRunTaskRunsIdPatchUrl = (id: string) => {
	return `http://prefect.grose.click/api/task_runs/${id}`;
};

export const updateTaskRunTaskRunsIdPatch = async (
	id: string,
	taskRunUpdate: TaskRunUpdate,
	options?: RequestInit,
): Promise<updateTaskRunTaskRunsIdPatchResponse> => {
	const res = await fetch(getUpdateTaskRunTaskRunsIdPatchUrl(id), {
		...options,
		method: "PATCH",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(taskRunUpdate),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: updateTaskRunTaskRunsIdPatchResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as updateTaskRunTaskRunsIdPatchResponse;
};

export const getUpdateTaskRunTaskRunsIdPatchMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>,
		TError,
		{ id: string; data: TaskRunUpdate },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>,
	TError,
	{ id: string; data: TaskRunUpdate },
	TContext
> => {
	const mutationKey = ["updateTaskRunTaskRunsIdPatch"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>,
		{ id: string; data: TaskRunUpdate }
	> = (props) => {
		const { id, data } = props ?? {};

		return updateTaskRunTaskRunsIdPatch(id, data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type UpdateTaskRunTaskRunsIdPatchMutationResult = NonNullable<
	Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>
>;
export type UpdateTaskRunTaskRunsIdPatchMutationBody = TaskRunUpdate;
export type UpdateTaskRunTaskRunsIdPatchMutationError = HTTPValidationError;

/**
 * @summary Update Task Run
 */
export const useUpdateTaskRunTaskRunsIdPatch = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>,
		TError,
		{ id: string; data: TaskRunUpdate },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof updateTaskRunTaskRunsIdPatch>>,
	TError,
	{ id: string; data: TaskRunUpdate },
	TContext
> => {
	const mutationOptions =
		getUpdateTaskRunTaskRunsIdPatchMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Get a task run by id.
 * @summary Read Task Run
 */
export type readTaskRunTaskRunsIdGetResponse = {
	data: TaskRun | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getReadTaskRunTaskRunsIdGetUrl = (id: string) => {
	return `http://prefect.grose.click/api/task_runs/${id}`;
};

export const readTaskRunTaskRunsIdGet = async (
	id: string,
	options?: RequestInit,
): Promise<readTaskRunTaskRunsIdGetResponse> => {
	const res = await fetch(getReadTaskRunTaskRunsIdGetUrl(id), {
		...options,
		method: "GET",
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: readTaskRunTaskRunsIdGetResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as readTaskRunTaskRunsIdGetResponse;
};

export const getReadTaskRunTaskRunsIdGetQueryKey = (id: string) => {
	return [`http://prefect.grose.click/api/task_runs/${id}`] as const;
};

export const getReadTaskRunTaskRunsIdGetQueryOptions = <
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
) => {
	const { query: queryOptions, fetch: fetchOptions } = options ?? {};

	const queryKey =
		queryOptions?.queryKey ?? getReadTaskRunTaskRunsIdGetQueryKey(id);

	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
	> = ({ signal }) => readTaskRunTaskRunsIdGet(id, { signal, ...fetchOptions });

	return {
		queryKey,
		queryFn,
		enabled: !!id,
		...queryOptions,
	} as UseQueryOptions<
		Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type ReadTaskRunTaskRunsIdGetQueryResult = NonNullable<
	Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
>;
export type ReadTaskRunTaskRunsIdGetQueryError = HTTPValidationError;

export function useReadTaskRunTaskRunsIdGet<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options: {
		query: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
					TError,
					Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
				>,
				"initialData"
			>;
		fetch?: RequestInit;
	},
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadTaskRunTaskRunsIdGet<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
					TError,
					Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
				>,
				"initialData"
			>;
		fetch?: RequestInit;
	},
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadTaskRunTaskRunsIdGet<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Read Task Run
 */

export function useReadTaskRunTaskRunsIdGet<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getReadTaskRunTaskRunsIdGetQueryOptions(id, options);

	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
}

export const getReadTaskRunTaskRunsIdGetSuspenseQueryOptions = <
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
) => {
	const { query: queryOptions, fetch: fetchOptions } = options ?? {};

	const queryKey =
		queryOptions?.queryKey ?? getReadTaskRunTaskRunsIdGetQueryKey(id);

	const queryFn: QueryFunction<
		Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
	> = ({ signal }) => readTaskRunTaskRunsIdGet(id, { signal, ...fetchOptions });

	return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
		Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
		TError,
		TData
	> & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type ReadTaskRunTaskRunsIdGetSuspenseQueryResult = NonNullable<
	Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>
>;
export type ReadTaskRunTaskRunsIdGetSuspenseQueryError = HTTPValidationError;

export function useReadTaskRunTaskRunsIdGetSuspense<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options: {
		query: Partial<
			UseSuspenseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadTaskRunTaskRunsIdGetSuspense<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadTaskRunTaskRunsIdGetSuspense<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Read Task Run
 */

export function useReadTaskRunTaskRunsIdGetSuspense<
	TData = Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<ReturnType<typeof readTaskRunTaskRunsIdGet>>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions = getReadTaskRunTaskRunsIdGetSuspenseQueryOptions(
		id,
		options,
	);

	const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
		TData,
		TError
	> & { queryKey: DataTag<QueryKey, TData, TError> };

	query.queryKey = queryOptions.queryKey;

	return query;
}

/**
 * Delete a task run by id.
 * @summary Delete Task Run
 */
export type deleteTaskRunTaskRunsIdDeleteResponse = {
	data: void | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getDeleteTaskRunTaskRunsIdDeleteUrl = (id: string) => {
	return `http://prefect.grose.click/api/task_runs/${id}`;
};

export const deleteTaskRunTaskRunsIdDelete = async (
	id: string,
	options?: RequestInit,
): Promise<deleteTaskRunTaskRunsIdDeleteResponse> => {
	const res = await fetch(getDeleteTaskRunTaskRunsIdDeleteUrl(id), {
		...options,
		method: "DELETE",
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: deleteTaskRunTaskRunsIdDeleteResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as deleteTaskRunTaskRunsIdDeleteResponse;
};

export const getDeleteTaskRunTaskRunsIdDeleteMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>,
		TError,
		{ id: string },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>,
	TError,
	{ id: string },
	TContext
> => {
	const mutationKey = ["deleteTaskRunTaskRunsIdDelete"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>,
		{ id: string }
	> = (props) => {
		const { id } = props ?? {};

		return deleteTaskRunTaskRunsIdDelete(id, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type DeleteTaskRunTaskRunsIdDeleteMutationResult = NonNullable<
	Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>
>;

export type DeleteTaskRunTaskRunsIdDeleteMutationError = HTTPValidationError;

/**
 * @summary Delete Task Run
 */
export const useDeleteTaskRunTaskRunsIdDelete = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>,
		TError,
		{ id: string },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof deleteTaskRunTaskRunsIdDelete>>,
	TError,
	{ id: string },
	TContext
> => {
	const mutationOptions =
		getDeleteTaskRunTaskRunsIdDeleteMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Count task runs.
 * @summary Count Task Runs
 */
export type countTaskRunsTaskRunsCountPostResponse = {
	data: number | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getCountTaskRunsTaskRunsCountPostUrl = () => {
	return `http://prefect.grose.click/api/task_runs/count`;
};

export const countTaskRunsTaskRunsCountPost = async (
	bodyCountTaskRunsTaskRunsCountPost: BodyCountTaskRunsTaskRunsCountPost,
	options?: RequestInit,
): Promise<countTaskRunsTaskRunsCountPostResponse> => {
	const res = await fetch(getCountTaskRunsTaskRunsCountPostUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(bodyCountTaskRunsTaskRunsCountPost),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: countTaskRunsTaskRunsCountPostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as countTaskRunsTaskRunsCountPostResponse;
};

export const getCountTaskRunsTaskRunsCountPostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>,
		TError,
		{ data: BodyCountTaskRunsTaskRunsCountPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>,
	TError,
	{ data: BodyCountTaskRunsTaskRunsCountPost },
	TContext
> => {
	const mutationKey = ["countTaskRunsTaskRunsCountPost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>,
		{ data: BodyCountTaskRunsTaskRunsCountPost }
	> = (props) => {
		const { data } = props ?? {};

		return countTaskRunsTaskRunsCountPost(data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type CountTaskRunsTaskRunsCountPostMutationResult = NonNullable<
	Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>
>;
export type CountTaskRunsTaskRunsCountPostMutationBody =
	BodyCountTaskRunsTaskRunsCountPost;
export type CountTaskRunsTaskRunsCountPostMutationError = HTTPValidationError;

/**
 * @summary Count Task Runs
 */
export const useCountTaskRunsTaskRunsCountPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>,
		TError,
		{ data: BodyCountTaskRunsTaskRunsCountPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof countTaskRunsTaskRunsCountPost>>,
	TError,
	{ data: BodyCountTaskRunsTaskRunsCountPost },
	TContext
> => {
	const mutationOptions =
		getCountTaskRunsTaskRunsCountPostMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Query for task run history data across a given range and interval.
 * @summary Task Run History
 */
export type taskRunHistoryTaskRunsHistoryPostResponse = {
	data: HistoryResponse[] | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getTaskRunHistoryTaskRunsHistoryPostUrl = () => {
	return `http://prefect.grose.click/api/task_runs/history`;
};

export const taskRunHistoryTaskRunsHistoryPost = async (
	bodyTaskRunHistoryTaskRunsHistoryPost: BodyTaskRunHistoryTaskRunsHistoryPost,
	options?: RequestInit,
): Promise<taskRunHistoryTaskRunsHistoryPostResponse> => {
	const res = await fetch(getTaskRunHistoryTaskRunsHistoryPostUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(bodyTaskRunHistoryTaskRunsHistoryPost),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: taskRunHistoryTaskRunsHistoryPostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as taskRunHistoryTaskRunsHistoryPostResponse;
};

export const getTaskRunHistoryTaskRunsHistoryPostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>,
		TError,
		{ data: BodyTaskRunHistoryTaskRunsHistoryPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>,
	TError,
	{ data: BodyTaskRunHistoryTaskRunsHistoryPost },
	TContext
> => {
	const mutationKey = ["taskRunHistoryTaskRunsHistoryPost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>,
		{ data: BodyTaskRunHistoryTaskRunsHistoryPost }
	> = (props) => {
		const { data } = props ?? {};

		return taskRunHistoryTaskRunsHistoryPost(data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type TaskRunHistoryTaskRunsHistoryPostMutationResult = NonNullable<
	Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>
>;
export type TaskRunHistoryTaskRunsHistoryPostMutationBody =
	BodyTaskRunHistoryTaskRunsHistoryPost;
export type TaskRunHistoryTaskRunsHistoryPostMutationError =
	HTTPValidationError;

/**
 * @summary Task Run History
 */
export const useTaskRunHistoryTaskRunsHistoryPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>,
		TError,
		{ data: BodyTaskRunHistoryTaskRunsHistoryPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof taskRunHistoryTaskRunsHistoryPost>>,
	TError,
	{ data: BodyTaskRunHistoryTaskRunsHistoryPost },
	TContext
> => {
	const mutationOptions =
		getTaskRunHistoryTaskRunsHistoryPostMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Query for task runs.
 * @summary Read Task Runs
 */
export type readTaskRunsTaskRunsFilterPostResponse = {
	data: TaskRun[] | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getReadTaskRunsTaskRunsFilterPostUrl = () => {
	return `http://prefect.grose.click/api/task_runs/filter`;
};

export const readTaskRunsTaskRunsFilterPost = async (
	bodyReadTaskRunsTaskRunsFilterPost: BodyReadTaskRunsTaskRunsFilterPost,
	options?: RequestInit,
): Promise<readTaskRunsTaskRunsFilterPostResponse> => {
	const res = await fetch(getReadTaskRunsTaskRunsFilterPostUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(bodyReadTaskRunsTaskRunsFilterPost),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: readTaskRunsTaskRunsFilterPostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as readTaskRunsTaskRunsFilterPostResponse;
};

export const getReadTaskRunsTaskRunsFilterPostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>,
		TError,
		{ data: BodyReadTaskRunsTaskRunsFilterPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>,
	TError,
	{ data: BodyReadTaskRunsTaskRunsFilterPost },
	TContext
> => {
	const mutationKey = ["readTaskRunsTaskRunsFilterPost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>,
		{ data: BodyReadTaskRunsTaskRunsFilterPost }
	> = (props) => {
		const { data } = props ?? {};

		return readTaskRunsTaskRunsFilterPost(data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type ReadTaskRunsTaskRunsFilterPostMutationResult = NonNullable<
	Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>
>;
export type ReadTaskRunsTaskRunsFilterPostMutationBody =
	BodyReadTaskRunsTaskRunsFilterPost;
export type ReadTaskRunsTaskRunsFilterPostMutationError = HTTPValidationError;

/**
 * @summary Read Task Runs
 */
export const useReadTaskRunsTaskRunsFilterPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>,
		TError,
		{ data: BodyReadTaskRunsTaskRunsFilterPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof readTaskRunsTaskRunsFilterPost>>,
	TError,
	{ data: BodyReadTaskRunsTaskRunsFilterPost },
	TContext
> => {
	const mutationOptions =
		getReadTaskRunsTaskRunsFilterPostMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * Set a task run state, invoking any orchestration rules.
 * @summary Set Task Run State
 */
export type setTaskRunStateTaskRunsIdSetStatePostResponse = {
	data: OrchestrationResult | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getSetTaskRunStateTaskRunsIdSetStatePostUrl = (id: string) => {
	return `http://prefect.grose.click/api/task_runs/${id}/set_state`;
};

export const setTaskRunStateTaskRunsIdSetStatePost = async (
	id: string,
	bodySetTaskRunStateTaskRunsIdSetStatePost: BodySetTaskRunStateTaskRunsIdSetStatePost,
	options?: RequestInit,
): Promise<setTaskRunStateTaskRunsIdSetStatePostResponse> => {
	const res = await fetch(getSetTaskRunStateTaskRunsIdSetStatePostUrl(id), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(bodySetTaskRunStateTaskRunsIdSetStatePost),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: setTaskRunStateTaskRunsIdSetStatePostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as setTaskRunStateTaskRunsIdSetStatePostResponse;
};

export const getSetTaskRunStateTaskRunsIdSetStatePostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>,
		TError,
		{ id: string; data: BodySetTaskRunStateTaskRunsIdSetStatePost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>,
	TError,
	{ id: string; data: BodySetTaskRunStateTaskRunsIdSetStatePost },
	TContext
> => {
	const mutationKey = ["setTaskRunStateTaskRunsIdSetStatePost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>,
		{ id: string; data: BodySetTaskRunStateTaskRunsIdSetStatePost }
	> = (props) => {
		const { id, data } = props ?? {};

		return setTaskRunStateTaskRunsIdSetStatePost(id, data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type SetTaskRunStateTaskRunsIdSetStatePostMutationResult = NonNullable<
	Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>
>;
export type SetTaskRunStateTaskRunsIdSetStatePostMutationBody =
	BodySetTaskRunStateTaskRunsIdSetStatePost;
export type SetTaskRunStateTaskRunsIdSetStatePostMutationError =
	HTTPValidationError;

/**
 * @summary Set Task Run State
 */
export const useSetTaskRunStateTaskRunsIdSetStatePost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>,
		TError,
		{ id: string; data: BodySetTaskRunStateTaskRunsIdSetStatePost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof setTaskRunStateTaskRunsIdSetStatePost>>,
	TError,
	{ id: string; data: BodySetTaskRunStateTaskRunsIdSetStatePost },
	TContext
> => {
	const mutationOptions =
		getSetTaskRunStateTaskRunsIdSetStatePostMutationOptions(options);

	return useMutation(mutationOptions);
};
/**
 * @summary Read Dashboard Task Run Counts
 */
export type readDashboardTaskRunCountsUiTaskRunsDashboardCountsPostResponse = {
	data: TaskRunCount[] | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostUrl =
	() => {
		return `http://prefect.grose.click/api/ui/task_runs/dashboard/counts`;
	};

export const readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost = async (
	bodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost,
	options?: RequestInit,
): Promise<readDashboardTaskRunCountsUiTaskRunsDashboardCountsPostResponse> => {
	const res = await fetch(
		getReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostUrl(),
		{
			...options,
			method: "POST",
			headers: { "Content-Type": "application/json", ...options?.headers },
			body: JSON.stringify(
				bodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost,
			),
		},
	);

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: readDashboardTaskRunCountsUiTaskRunsDashboardCountsPostResponse["data"] =
		body ? JSON.parse(body) : {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as readDashboardTaskRunCountsUiTaskRunsDashboardCountsPostResponse;
};

export const getReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostMutationOptions =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost
				>
			>,
			TError,
			{ data: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationOptions<
		Awaited<
			ReturnType<typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost>
		>,
		TError,
		{ data: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost },
		TContext
	> => {
		const mutationKey = [
			"readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost",
		];
		const { mutation: mutationOptions, fetch: fetchOptions } = options
			? options.mutation &&
				"mutationKey" in options.mutation &&
				options.mutation.mutationKey
				? options
				: { ...options, mutation: { ...options.mutation, mutationKey } }
			: { mutation: { mutationKey }, fetch: undefined };

		const mutationFn: MutationFunction<
			Awaited<
				ReturnType<
					typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost
				>
			>,
			{ data: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost }
		> = (props) => {
			const { data } = props ?? {};

			return readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost(
				data,
				fetchOptions,
			);
		};

		return { mutationFn, ...mutationOptions };
	};

export type ReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostMutationResult =
	NonNullable<
		Awaited<
			ReturnType<typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost>
		>
	>;
export type ReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostMutationBody =
	BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost;
export type ReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostMutationError =
	HTTPValidationError;

/**
 * @summary Read Dashboard Task Run Counts
 */
export const useReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<
			ReturnType<typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost>
		>,
		TError,
		{ data: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<
		ReturnType<typeof readDashboardTaskRunCountsUiTaskRunsDashboardCountsPost>
	>,
	TError,
	{ data: BodyReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPost },
	TContext
> => {
	const mutationOptions =
		getReadDashboardTaskRunCountsUiTaskRunsDashboardCountsPostMutationOptions(
			options,
		);

	return useMutation(mutationOptions);
};
/**
 * @summary Read Task Run Counts By State
 */
export type readTaskRunCountsByStateUiTaskRunsCountPostResponse = {
	data: CountByState | HTTPValidationError;
	status: number;
	headers: Headers;
};

export const getReadTaskRunCountsByStateUiTaskRunsCountPostUrl = () => {
	return `http://prefect.grose.click/api/ui/task_runs/count`;
};

export const readTaskRunCountsByStateUiTaskRunsCountPost = async (
	bodyReadTaskRunCountsByStateUiTaskRunsCountPost: BodyReadTaskRunCountsByStateUiTaskRunsCountPost,
	options?: RequestInit,
): Promise<readTaskRunCountsByStateUiTaskRunsCountPostResponse> => {
	const res = await fetch(getReadTaskRunCountsByStateUiTaskRunsCountPostUrl(), {
		...options,
		method: "POST",
		headers: { "Content-Type": "application/json", ...options?.headers },
		body: JSON.stringify(bodyReadTaskRunCountsByStateUiTaskRunsCountPost),
	});

	const body = [204, 205, 304].includes(res.status) ? null : await res.text();
	const data: readTaskRunCountsByStateUiTaskRunsCountPostResponse["data"] = body
		? JSON.parse(body)
		: {};

	return {
		data,
		status: res.status,
		headers: res.headers,
	} as readTaskRunCountsByStateUiTaskRunsCountPostResponse;
};

export const getReadTaskRunCountsByStateUiTaskRunsCountPostMutationOptions = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>,
		TError,
		{ data: BodyReadTaskRunCountsByStateUiTaskRunsCountPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationOptions<
	Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>,
	TError,
	{ data: BodyReadTaskRunCountsByStateUiTaskRunsCountPost },
	TContext
> => {
	const mutationKey = ["readTaskRunCountsByStateUiTaskRunsCountPost"];
	const { mutation: mutationOptions, fetch: fetchOptions } = options
		? options.mutation &&
			"mutationKey" in options.mutation &&
			options.mutation.mutationKey
			? options
			: { ...options, mutation: { ...options.mutation, mutationKey } }
		: { mutation: { mutationKey }, fetch: undefined };

	const mutationFn: MutationFunction<
		Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>,
		{ data: BodyReadTaskRunCountsByStateUiTaskRunsCountPost }
	> = (props) => {
		const { data } = props ?? {};

		return readTaskRunCountsByStateUiTaskRunsCountPost(data, fetchOptions);
	};

	return { mutationFn, ...mutationOptions };
};

export type ReadTaskRunCountsByStateUiTaskRunsCountPostMutationResult =
	NonNullable<
		Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>
	>;
export type ReadTaskRunCountsByStateUiTaskRunsCountPostMutationBody =
	BodyReadTaskRunCountsByStateUiTaskRunsCountPost;
export type ReadTaskRunCountsByStateUiTaskRunsCountPostMutationError =
	HTTPValidationError;

/**
 * @summary Read Task Run Counts By State
 */
export const useReadTaskRunCountsByStateUiTaskRunsCountPost = <
	TError = HTTPValidationError,
	TContext = unknown,
>(options?: {
	mutation?: UseMutationOptions<
		Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>,
		TError,
		{ data: BodyReadTaskRunCountsByStateUiTaskRunsCountPost },
		TContext
	>;
	fetch?: RequestInit;
}): UseMutationResult<
	Awaited<ReturnType<typeof readTaskRunCountsByStateUiTaskRunsCountPost>>,
	TError,
	{ data: BodyReadTaskRunCountsByStateUiTaskRunsCountPost },
	TContext
> => {
	const mutationOptions =
		getReadTaskRunCountsByStateUiTaskRunsCountPostMutationOptions(options);

	return useMutation(mutationOptions);
};
