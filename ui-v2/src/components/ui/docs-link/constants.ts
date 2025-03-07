export const DOCS_LINKS = {
	"artifacts-guide": "https://docs.prefect.io/v3/develop/artifacts",
	"automations-guide":
		"https://docs.prefect.io/v3/automate/events/automations-triggers",
	"global-concurrency-guide":
		"https://docs.prefect.io/v3/develop/global-concurrency-limits",
	"task-concurrency-guide":
		"https://docs.prefect.io/v3/develop/task-run-limits",
	"variables-guide": "https://docs.prefect.io/latest/guides/variables/",
	"deployments-guide": "https://docs.prefect.io/v3/deploy/index",
	"work-pools-guide":
		"https://docs.prefect.io/latest/deploy/infrastructure-concepts/work-pools",
} as const;

export type DocsID = keyof typeof DOCS_LINKS;
