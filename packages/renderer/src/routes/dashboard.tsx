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
import { UpcomingCard } from "@/components/cards/upcoming-card";
import { IconCirclePlus } from "@tabler/icons-react";
import { ButtonRounded } from "@/components/buttons/button-rounded";

export function DashboardPage() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Dashboard" />
        <PageActions>
          <ButtonRounded>
            <IconCirclePlus />
          </ButtonRounded>
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
