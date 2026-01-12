import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";

// Cards
import { ProgressionCard } from "@/components/cards/progress-card";
import { TimelineCard } from "@/components/cards/timeline-card";
import { ReminderCard } from "@/components/cards/reminder-card";
import { UpcomingCard } from "./upcoming-card";

export function DashboardPage() {
  return (
    <>
      <TypographyH1>Dashboard</TypographyH1>
      <PageGrid>
        {/* Project Progression Card */}
        <ProgressionCard progress={45} />

        {/* Reminder Card */}
        <ReminderCard />

        {/* Upcoming Tasks Card */}
        <UpcomingCard />

        {/* Timeline Card */}
        <TimelineCard />
      </PageGrid>
    </>
  );
}
