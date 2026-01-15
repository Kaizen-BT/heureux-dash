import {
  PageActions,
  PageGrid,
  PageHeader,
  PageTitle,
} from "@/components/page-grid";

// Cards
import { ProgressionCard } from "@/components/cards/progress-card";
import { TimelineCard } from "@/components/cards/timeline-card";
import { ReminderCard } from "@/components/cards/reminder-card";
import { UpcomingCard } from "./upcoming-card";
import { Button } from "@/components/ui/button";
import { IconCirclePlus } from "@tabler/icons-react";

export function DashboardPage() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Dashboard" />
        <PageActions>
          <Button className="rounded-full">
            <IconCirclePlus />
          </Button>
        </PageActions>
      </PageHeader>

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
