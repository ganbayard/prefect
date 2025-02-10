/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { VariableUpdateName } from "./variableUpdateName";
import type { VariableUpdateTags } from "./variableUpdateTags";
import type { VariableUpdateValue } from "./variableUpdateValue";

/**
 * Data used by the Prefect REST API to update a Variable.
 */
export interface VariableUpdate {
	/** The name of the variable */
	name?: VariableUpdateName;
	/** The value of the variable */
	value?: VariableUpdateValue;
	/** A list of variable tags */
	tags?: VariableUpdateTags;
}
