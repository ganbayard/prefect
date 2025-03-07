import { buildGetWorkPoolQuery } from "@/api/work-pools/work-pools";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work-pools/work-pool/$workPoolName")({
	component: RouteComponent,
	loader: async ({ context, params }) => {
		const { workPoolName } = params;

		const workPool = await context.queryClient.ensureQueryData(
			buildGetWorkPoolQuery(workPoolName),
		);

		return { workPool };
	},
	wrapInSuspense: true,
});

function RouteComponent() {
	const { workPool } = Route.useLoaderData();

	return <div>Work pool: {workPool.name}</div>;
}
