/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { AutomationFilterNameAny } from "./automationFilterNameAny";

/**
 * Filter by `Automation.created`.
 */
export interface AutomationFilterName {
	/** Only include automations with names that match any of these strings */
	any_?: AutomationFilterNameAny;
}
