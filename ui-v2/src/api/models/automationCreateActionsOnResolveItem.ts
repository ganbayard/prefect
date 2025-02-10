import type { CallWebhook } from "./callWebhook";
import type { CancelFlowRun } from "./cancelFlowRun";
import type { ChangeFlowRunState } from "./changeFlowRunState";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import type { DoNothing } from "./doNothing";
import type { PauseAutomation } from "./pauseAutomation";
import type { PauseDeployment } from "./pauseDeployment";
import type { PauseWorkPool } from "./pauseWorkPool";
import type { PauseWorkQueue } from "./pauseWorkQueue";
import type { ResumeAutomation } from "./resumeAutomation";
import type { ResumeDeployment } from "./resumeDeployment";
import type { ResumeFlowRun } from "./resumeFlowRun";
import type { ResumeWorkPool } from "./resumeWorkPool";
import type { ResumeWorkQueue } from "./resumeWorkQueue";
import type { RunDeployment } from "./runDeployment";
import type { SendNotification } from "./sendNotification";
import type { SuspendFlowRun } from "./suspendFlowRun";

export type AutomationCreateActionsOnResolveItem =
	| DoNothing
	| RunDeployment
	| PauseDeployment
	| ResumeDeployment
	| CancelFlowRun
	| ChangeFlowRunState
	| PauseWorkQueue
	| ResumeWorkQueue
	| SendNotification
	| CallWebhook
	| PauseAutomation
	| ResumeAutomation
	| SuspendFlowRun
	| ResumeFlowRun
	| PauseWorkPool
	| ResumeWorkPool;
