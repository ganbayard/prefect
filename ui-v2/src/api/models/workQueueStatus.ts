/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */

/**
 * Enumeration of work queue statuses.
 */
export type WorkQueueStatus =
	(typeof WorkQueueStatus)[keyof typeof WorkQueueStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WorkQueueStatus = {
	READY: "READY",
	NOT_READY: "NOT_READY",
	PAUSED: "PAUSED",
} as const;
