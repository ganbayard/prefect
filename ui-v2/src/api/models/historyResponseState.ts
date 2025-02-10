/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { StateType } from "./stateType";

/**
 * Represents a single state's history over an interval.
 */
export interface HistoryResponseState {
	/** The state type. */
	state_type: StateType;
	/** The state name. */
	state_name: string;
	/** The number of runs in the specified state during the interval. */
	count_runs: number;
	/** The total estimated run time of all runs during the interval. */
	sum_estimated_run_time: number;
	/** The sum of differences between actual and expected start time during the interval. */
	sum_estimated_lateness: number;
}
