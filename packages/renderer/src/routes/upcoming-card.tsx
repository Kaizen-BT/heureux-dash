import { DashboardCard } from "@/components/cards/dashboard-card";
import { Bell } from "lucide-react";

export function UpcomingCard() {
  return (
    <DashboardCard
      rowVariant={"large"}
      title="Upcoming Tasks"
      description="The following tasks are due soon"
      Icon={Bell}
    />
  );
}
