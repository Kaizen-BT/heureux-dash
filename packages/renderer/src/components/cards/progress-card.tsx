import { PanelsLeftBottom } from "lucide-react";
import {
  DashboardCard,
  DashboardCardContent,
} from "@/components/cards/dashboard-card";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressTrack,
  CircularProgressRange,
  CircularProgressValueText,
} from "@/components/ui/circular-progress";

interface ProgressionCardProps {
  progress: number;
}

export function ProgressionCard({ progress: value }: ProgressionCardProps) {
  return (
    <DashboardCard
      title="Project Progression"
      description="Overall Overview"
      Icon={PanelsLeftBottom}
    >
      <DashboardCardContent className="m-auto">
        <CircularProgress value={value} size={128} thickness={16}>
          <CircularProgressIndicator>
            <CircularProgressTrack />
            <CircularProgressRange />
          </CircularProgressIndicator>
          <CircularProgressValueText />
        </CircularProgress>
      </DashboardCardContent>
    </DashboardCard>
  );
}
