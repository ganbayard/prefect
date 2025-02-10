/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { SequenceTriggerOutputTriggersItem } from "./sequenceTriggerOutputTriggersItem";
import type { SequenceTriggerOutputWithin } from "./sequenceTriggerOutputWithin";

/**
 * A composite trigger that requires some number of triggers to have fired
within the given time period in a specific order
 */
export interface SequenceTriggerOutput {
	type?: "sequence";
	/** The unique ID of this trigger */
	id?: string;
	triggers: SequenceTriggerOutputTriggersItem[];
	within: SequenceTriggerOutputWithin;
}
