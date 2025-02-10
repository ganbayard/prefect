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
	BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost,
	FlowRunNotificationPolicy,
	FlowRunNotificationPolicyCreate,
	FlowRunNotificationPolicyUpdate,
	HTTPValidationError,
} from "../../models";

/**
 * Creates a new flow run notification policy.
 * @summary Create Flow Run Notification Policy
 */
export type createFlowRunNotificationPolicyFlowRunNotificationPoliciesPostResponse =
	{
		data: FlowRunNotificationPolicy | HTTPValidationError;
		status: number;
		headers: Headers;
	};

export const getCreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostUrl =
	() => {
		return `http://prefect.grose.click/api/flow_run_notification_policies/`;
	};

export const createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost =
	async (
		flowRunNotificationPolicyCreate: FlowRunNotificationPolicyCreate,
		options?: RequestInit,
	): Promise<createFlowRunNotificationPolicyFlowRunNotificationPoliciesPostResponse> => {
		const res = await fetch(
			getCreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostUrl(),
			{
				...options,
				method: "POST",
				headers: { "Content-Type": "application/json", ...options?.headers },
				body: JSON.stringify(flowRunNotificationPolicyCreate),
			},
		);

		const body = [204, 205, 304].includes(res.status) ? null : await res.text();
		const data: createFlowRunNotificationPolicyFlowRunNotificationPoliciesPostResponse["data"] =
			body ? JSON.parse(body) : {};

		return {
			data,
			status: res.status,
			headers: res.headers,
		} as createFlowRunNotificationPolicyFlowRunNotificationPoliciesPostResponse;
	};

export const getCreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostMutationOptions =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
				>
			>,
			TError,
			{ data: FlowRunNotificationPolicyCreate },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationOptions<
		Awaited<
			ReturnType<
				typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
			>
		>,
		TError,
		{ data: FlowRunNotificationPolicyCreate },
		TContext
	> => {
		const mutationKey = [
			"createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost",
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
					typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
				>
			>,
			{ data: FlowRunNotificationPolicyCreate }
		> = (props) => {
			const { data } = props ?? {};

			return createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost(
				data,
				fetchOptions,
			);
		};

		return { mutationFn, ...mutationOptions };
	};

export type CreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostMutationResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
			>
		>
	>;
export type CreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostMutationBody =
	FlowRunNotificationPolicyCreate;
export type CreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostMutationError =
	HTTPValidationError;

/**
 * @summary Create Flow Run Notification Policy
 */
export const useCreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPost =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
				>
			>,
			TError,
			{ data: FlowRunNotificationPolicyCreate },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationResult<
		Awaited<
			ReturnType<
				typeof createFlowRunNotificationPolicyFlowRunNotificationPoliciesPost
			>
		>,
		TError,
		{ data: FlowRunNotificationPolicyCreate },
		TContext
	> => {
		const mutationOptions =
			getCreateFlowRunNotificationPolicyFlowRunNotificationPoliciesPostMutationOptions(
				options,
			);

		return useMutation(mutationOptions);
	};
/**
 * Updates an existing flow run notification policy.
 * @summary Update Flow Run Notification Policy
 */
export type updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchResponse =
	{
		data: void | HTTPValidationError;
		status: number;
		headers: Headers;
	};

export const getUpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchUrl =
	(id: string) => {
		return `http://prefect.grose.click/api/flow_run_notification_policies/${id}`;
	};

export const updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch =
	async (
		id: string,
		flowRunNotificationPolicyUpdate: FlowRunNotificationPolicyUpdate,
		options?: RequestInit,
	): Promise<updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchResponse> => {
		const res = await fetch(
			getUpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchUrl(
				id,
			),
			{
				...options,
				method: "PATCH",
				headers: { "Content-Type": "application/json", ...options?.headers },
				body: JSON.stringify(flowRunNotificationPolicyUpdate),
			},
		);

		const body = [204, 205, 304].includes(res.status) ? null : await res.text();
		const data: updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchResponse["data"] =
			body ? JSON.parse(body) : {};

		return {
			data,
			status: res.status,
			headers: res.headers,
		} as updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchResponse;
	};

export const getUpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchMutationOptions =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
				>
			>,
			TError,
			{ id: string; data: FlowRunNotificationPolicyUpdate },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationOptions<
		Awaited<
			ReturnType<
				typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
			>
		>,
		TError,
		{ id: string; data: FlowRunNotificationPolicyUpdate },
		TContext
	> => {
		const mutationKey = [
			"updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch",
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
					typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
				>
			>,
			{ id: string; data: FlowRunNotificationPolicyUpdate }
		> = (props) => {
			const { id, data } = props ?? {};

			return updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch(
				id,
				data,
				fetchOptions,
			);
		};

		return { mutationFn, ...mutationOptions };
	};

export type UpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchMutationResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
			>
		>
	>;
export type UpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchMutationBody =
	FlowRunNotificationPolicyUpdate;
export type UpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchMutationError =
	HTTPValidationError;

/**
 * @summary Update Flow Run Notification Policy
 */
export const useUpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
				>
			>,
			TError,
			{ id: string; data: FlowRunNotificationPolicyUpdate },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationResult<
		Awaited<
			ReturnType<
				typeof updateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatch
			>
		>,
		TError,
		{ id: string; data: FlowRunNotificationPolicyUpdate },
		TContext
	> => {
		const mutationOptions =
			getUpdateFlowRunNotificationPolicyFlowRunNotificationPoliciesIdPatchMutationOptions(
				options,
			);

		return useMutation(mutationOptions);
	};
/**
 * Get a flow run notification policy by id.
 * @summary Read Flow Run Notification Policy
 */
export type readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetResponse =
	{
		data: FlowRunNotificationPolicy | HTTPValidationError;
		status: number;
		headers: Headers;
	};

export const getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetUrl =
	(id: string) => {
		return `http://prefect.grose.click/api/flow_run_notification_policies/${id}`;
	};

export const readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet =
	async (
		id: string,
		options?: RequestInit,
	): Promise<readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetResponse> => {
		const res = await fetch(
			getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetUrl(id),
			{
				...options,
				method: "GET",
			},
		);

		const body = [204, 205, 304].includes(res.status) ? null : await res.text();
		const data: readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetResponse["data"] =
			body ? JSON.parse(body) : {};

		return {
			data,
			status: res.status,
			headers: res.headers,
		} as readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetResponse;
	};

export const getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryKey =
	(id: string) => {
		return [
			`http://prefect.grose.click/api/flow_run_notification_policies/${id}`,
		] as const;
	};

export const getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryOptions =
	<
		TData = Awaited<
			ReturnType<
				typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
			>
		>,
		TError = HTTPValidationError,
	>(
		id: string,
		options?: {
			query?: Partial<
				UseQueryOptions<
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>,
					TError,
					TData
				>
			>;
			fetch?: RequestInit;
		},
	) => {
		const { query: queryOptions, fetch: fetchOptions } = options ?? {};

		const queryKey =
			queryOptions?.queryKey ??
			getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryKey(
				id,
			);

		const queryFn: QueryFunction<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
				>
			>
		> = ({ signal }) =>
			readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet(id, {
				signal,
				...fetchOptions,
			});

		return {
			queryKey,
			queryFn,
			enabled: !!id,
			...queryOptions,
		} as UseQueryOptions<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
				>
			>,
			TError,
			TData
		> & { queryKey: DataTag<QueryKey, TData, TError> };
	};

export type ReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
			>
		>
	>;
export type ReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryError =
	HTTPValidationError;

export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options: {
		query: Partial<
			UseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		> &
			Pick<
				DefinedInitialDataOptions<
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>,
					TError,
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>
				>,
				"initialData"
			>;
		fetch?: RequestInit;
	},
): DefinedUseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		> &
			Pick<
				UndefinedInitialDataOptions<
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>,
					TError,
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>
				>,
				"initialData"
			>;
		fetch?: RequestInit;
	},
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
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
 * @summary Read Flow Run Notification Policy
 */

export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions =
		getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryOptions(
			id,
			options,
		);

	const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
		queryKey: DataTag<QueryKey, TData, TError>;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
}

export const getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspenseQueryOptions =
	<
		TData = Awaited<
			ReturnType<
				typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
			>
		>,
		TError = HTTPValidationError,
	>(
		id: string,
		options?: {
			query?: Partial<
				UseSuspenseQueryOptions<
					Awaited<
						ReturnType<
							typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
						>
					>,
					TError,
					TData
				>
			>;
			fetch?: RequestInit;
		},
	) => {
		const { query: queryOptions, fetch: fetchOptions } = options ?? {};

		const queryKey =
			queryOptions?.queryKey ??
			getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetQueryKey(
				id,
			);

		const queryFn: QueryFunction<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
				>
			>
		> = ({ signal }) =>
			readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet(id, {
				signal,
				...fetchOptions,
			});

		return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
				>
			>,
			TError,
			TData
		> & { queryKey: DataTag<QueryKey, TData, TError> };
	};

export type ReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspenseQueryResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
			>
		>
	>;
export type ReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspenseQueryError =
	HTTPValidationError;

export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspense<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options: {
		query: Partial<
			UseSuspenseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspense<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
};
export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspense<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
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
 * @summary Read Flow Run Notification Policy
 */

export function useReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspense<
	TData = Awaited<
		ReturnType<
			typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
		>
	>,
	TError = HTTPValidationError,
>(
	id: string,
	options?: {
		query?: Partial<
			UseSuspenseQueryOptions<
				Awaited<
					ReturnType<
						typeof readFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGet
					>
				>,
				TError,
				TData
			>
		>;
		fetch?: RequestInit;
	},
): UseSuspenseQueryResult<TData, TError> & {
	queryKey: DataTag<QueryKey, TData, TError>;
} {
	const queryOptions =
		getReadFlowRunNotificationPolicyFlowRunNotificationPoliciesIdGetSuspenseQueryOptions(
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
 * Delete a flow run notification policy by id.
 * @summary Delete Flow Run Notification Policy
 */
export type deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteResponse =
	{
		data: void | HTTPValidationError;
		status: number;
		headers: Headers;
	};

export const getDeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteUrl =
	(id: string) => {
		return `http://prefect.grose.click/api/flow_run_notification_policies/${id}`;
	};

export const deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete =
	async (
		id: string,
		options?: RequestInit,
	): Promise<deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteResponse> => {
		const res = await fetch(
			getDeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteUrl(
				id,
			),
			{
				...options,
				method: "DELETE",
			},
		);

		const body = [204, 205, 304].includes(res.status) ? null : await res.text();
		const data: deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteResponse["data"] =
			body ? JSON.parse(body) : {};

		return {
			data,
			status: res.status,
			headers: res.headers,
		} as deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteResponse;
	};

export const getDeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteMutationOptions =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
				>
			>,
			TError,
			{ id: string },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationOptions<
		Awaited<
			ReturnType<
				typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
			>
		>,
		TError,
		{ id: string },
		TContext
	> => {
		const mutationKey = [
			"deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete",
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
					typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
				>
			>,
			{ id: string }
		> = (props) => {
			const { id } = props ?? {};

			return deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete(
				id,
				fetchOptions,
			);
		};

		return { mutationFn, ...mutationOptions };
	};

export type DeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteMutationResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
			>
		>
	>;

export type DeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteMutationError =
	HTTPValidationError;

/**
 * @summary Delete Flow Run Notification Policy
 */
export const useDeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
				>
			>,
			TError,
			{ id: string },
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationResult<
		Awaited<
			ReturnType<
				typeof deleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDelete
			>
		>,
		TError,
		{ id: string },
		TContext
	> => {
		const mutationOptions =
			getDeleteFlowRunNotificationPolicyFlowRunNotificationPoliciesIdDeleteMutationOptions(
				options,
			);

		return useMutation(mutationOptions);
	};
/**
 * Query for flow run notification policies.
 * @summary Read Flow Run Notification Policies
 */
export type readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostResponse =
	{
		data: FlowRunNotificationPolicy[] | HTTPValidationError;
		status: number;
		headers: Headers;
	};

export const getReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostUrl =
	() => {
		return `http://prefect.grose.click/api/flow_run_notification_policies/filter`;
	};

export const readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost =
	async (
		bodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost,
		options?: RequestInit,
	): Promise<readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostResponse> => {
		const res = await fetch(
			getReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostUrl(),
			{
				...options,
				method: "POST",
				headers: { "Content-Type": "application/json", ...options?.headers },
				body: JSON.stringify(
					bodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost,
				),
			},
		);

		const body = [204, 205, 304].includes(res.status) ? null : await res.text();
		const data: readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostResponse["data"] =
			body ? JSON.parse(body) : {};

		return {
			data,
			status: res.status,
			headers: res.headers,
		} as readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostResponse;
	};

export const getReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostMutationOptions =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
				>
			>,
			TError,
			{
				data: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
			},
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationOptions<
		Awaited<
			ReturnType<
				typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
			>
		>,
		TError,
		{
			data: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
		},
		TContext
	> => {
		const mutationKey = [
			"readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost",
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
					typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
				>
			>,
			{
				data: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
			}
		> = (props) => {
			const { data } = props ?? {};

			return readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost(
				data,
				fetchOptions,
			);
		};

		return { mutationFn, ...mutationOptions };
	};

export type ReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostMutationResult =
	NonNullable<
		Awaited<
			ReturnType<
				typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
			>
		>
	>;
export type ReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostMutationBody =
	BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
export type ReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostMutationError =
	HTTPValidationError;

/**
 * @summary Read Flow Run Notification Policies
 */
export const useReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost =
	<TError = HTTPValidationError, TContext = unknown>(options?: {
		mutation?: UseMutationOptions<
			Awaited<
				ReturnType<
					typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
				>
			>,
			TError,
			{
				data: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
			},
			TContext
		>;
		fetch?: RequestInit;
	}): UseMutationResult<
		Awaited<
			ReturnType<
				typeof readFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost
			>
		>,
		TError,
		{
			data: BodyReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPost;
		},
		TContext
	> => {
		const mutationOptions =
			getReadFlowRunNotificationPoliciesFlowRunNotificationPoliciesFilterPostMutationOptions(
				options,
			);

		return useMutation(mutationOptions);
	};
