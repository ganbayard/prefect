/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */

/**
 * Whether this Action applies to a specific selected deployment (given by `deployment_id`), or to a deployment that is inferred from the triggering event.  If the source is 'inferred', the `deployment_id` may not be set.  If the source is 'selected', the `deployment_id` must be set.
 */
export type RunDeploymentSource =
	(typeof RunDeploymentSource)[keyof typeof RunDeploymentSource];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RunDeploymentSource = {
	selected: "selected",
	inferred: "inferred",
} as const;
