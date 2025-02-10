import type { CompoundTriggerOutputRequire } from "./compoundTriggerOutputRequire";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { CompoundTriggerOutputTriggersItem } from "./compoundTriggerOutputTriggersItem";
import type { CompoundTriggerOutputWithin } from "./compoundTriggerOutputWithin";

/**
 * A composite trigger that requires some number of triggers to have
fired within the given time period
 */
export interface CompoundTriggerOutput {
	type?: "compound";
	/** The unique ID of this trigger */
	id?: string;
	triggers: CompoundTriggerOutputTriggersItem[];
	within: CompoundTriggerOutputWithin;
	require: CompoundTriggerOutputRequire;
}
