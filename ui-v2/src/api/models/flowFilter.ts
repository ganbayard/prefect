import type { FlowFilterDeploymentProperty } from "./flowFilterDeploymentProperty";
import type { FlowFilterIdProperty } from "./flowFilterIdProperty";
import type { FlowFilterNameProperty } from "./flowFilterNameProperty";
import type { FlowFilterTagsProperty } from "./flowFilterTagsProperty";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { Operator } from "./operator";

/**
 * Filter for flows. Only flows matching all criteria will be returned.
 */
export interface FlowFilter {
	/** Operator for combining filter criteria. Defaults to 'and_'. */
	operator?: Operator;
	/** Filter criteria for `Flow.id` */
	id?: FlowFilterIdProperty;
	/** Filter criteria for Flow deployments */
	deployment?: FlowFilterDeploymentProperty;
	/** Filter criteria for `Flow.name` */
	name?: FlowFilterNameProperty;
	/** Filter criteria for `Flow.tags` */
	tags?: FlowFilterTagsProperty;
}
