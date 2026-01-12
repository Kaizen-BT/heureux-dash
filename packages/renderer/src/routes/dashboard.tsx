import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import { Bell, ListTodo } from "lucide-react";

import { DashboardCard } from "@/components/cards/dashboard-card";
import { ProgressionCard } from "@/components/cards/progress-card";
import { TimelineCard } from "@/components/cards/timeline-card";

export function DashboardPage() {
  return (
    <>
      <TypographyH1>Dashboard</TypographyH1>
      <PageGrid>
        {/* Project Progression Card */}
        <ProgressionCard progress={45} />

        {/* Reminder Card */}
        <DashboardCard title="Reminders" Icon={ListTodo} />

        {/* Upcoming Tasks Card */}
        <DashboardCard
          rowVariant={"large"}
          title="Upcoming Tasks"
          description="The following tasks are due soon"
          Icon={Bell}
        />

        {/* Timeline Card */}
        <TimelineCard />
      </PageGrid>
    </>
  );
}
