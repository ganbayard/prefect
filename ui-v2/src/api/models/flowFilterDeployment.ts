import type { FlowFilterDeploymentIsNull } from "./flowFilterDeploymentIsNull";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { Operator } from "./operator";

/**
 * Filter by flows by deployment
 */
export interface FlowFilterDeployment {
	/** Operator for combining filter criteria. Defaults to 'and_'. */
	operator?: Operator;
	/** If true, only include flows without deployments */
	is_null_?: FlowFilterDeploymentIsNull;
}
