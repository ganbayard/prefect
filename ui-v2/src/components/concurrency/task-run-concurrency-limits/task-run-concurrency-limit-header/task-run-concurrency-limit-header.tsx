import { TaskRunConcurrencyLimitsActionsMenu } from "@/components/concurrency/task-run-concurrency-limits/task-run-concurrency-limits-actions-menu";
import type { TaskRunConcurrencyLimit } from "@/hooks/task-run-concurrency-limits";

import { NavHeader } from "./nav-header";

type TaskRunConcurrencyLimitHeaderProps = {
	data: TaskRunConcurrencyLimit;
	onDelete: () => void;
	onReset: () => void;
};

export const TaskRunConcurrencyLimitHeader = ({
	data,
	onDelete,
	onReset,
}: TaskRunConcurrencyLimitHeaderProps) => {
	return (
		<div className="flex items-center justify-between">
			<NavHeader tag={data.tag} />
			<TaskRunConcurrencyLimitsActionsMenu
				id={data.id}
				onDelete={onDelete}
				onReset={onReset}
			/>
		</div>
	);
};
