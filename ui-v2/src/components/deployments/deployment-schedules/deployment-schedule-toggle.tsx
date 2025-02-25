import { Deployment, useUpdateDeployment } from "@/api/deployments";
import { Switch } from "@/components/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

type DeploymentScheduleToggleProps = {
	deployment: Deployment;
};

export const DeploymentScheduleToggle = ({
	deployment,
}: DeploymentScheduleToggleProps) => {
	const { toast } = useToast();
	const { updateDeployment } = useUpdateDeployment();

	const handleChckedChange = (checked: boolean) => {
		updateDeployment(
			{ id: deployment.id, paused: !checked },
			{
				onSuccess: () => {
					toast({ title: `Deployment ${checked ? "active" : "paused"}` });
				},
				onError: (error) => {
					const message =
						error.message || "Unknown error while updating deployment";
					console.error(message);
				},
			},
		);
	};

	const isDeploymentDeprecated =
		deployment.entrypoint === "" || deployment.entrypoint === null;

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Switch
						aria-label="Pause or resume all schedules"
						disabled={isDeploymentDeprecated}
						onCheckedChange={handleChckedChange}
						checked={!deployment.paused}
					/>
				</TooltipTrigger>
				<TooltipContent>Pause or resume all schedules</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
