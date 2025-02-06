import { ArtifactWithFlowRunAndTaskRun } from "@/api/artifacts";
import { Typography } from "@/components/ui/typography";
import { formatDateToTimeDescription } from "@/lib/utils";
import { ArtifactTimelineCard } from "./timelineCard";

export interface TimelineRowProps {
	artifact: ArtifactWithFlowRunAndTaskRun;
}

export const TimelineRow = ({ artifact }: TimelineRowProps) => {
	const [date, time] = formatDateToTimeDescription(
		artifact.created ?? "",
	).split(" at ");
	return (
		<div data-testid={`timeline-row-${artifact.id}`} className="flex">
			<div
				className="flex flex-col items-end justify-items-start pt-4"
				style={{ width: "128px" }}
			>
				<Typography variant="body">{time}</Typography>
				<Typography variant="bodySmall" className="text-muted-foreground">
					{date}
				</Typography>
			</div>
			<div className="w-10 flex flex-col">
				<div className="w-5 h-full border-r border-gray-200">
					{/* <div style={{ width: "15px", height: "15px", borderRadius: '50%', backgroundColor: 'gray', margin: '20px calc(50% + 2px)' }}> */}
					<div
						className="w-4 h-4 rounded-full bg-white my-5 mx-auto border-2"
						style={{ margin: "20px calc(50% + 2px)" }}
					></div>
				</div>
			</div>
			<div className="flex-grow mt-1">
				<ArtifactTimelineCard artifact={artifact} />
			</div>
		</div>
	);
};
