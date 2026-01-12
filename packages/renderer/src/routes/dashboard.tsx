import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import { Bell, ListTodo, Route } from "lucide-react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";
import { DashboardCard } from "@/components/cards/dashboard-card";
import { ProgressionCard } from "@/components/cards/progress-card";

const timelineItems = [
  {
    id: "project-kickoff",
    dateTime: "2025-01-15",
    date: "January 15, 2025",
    title: "Project Kickoff",
    description: "Initial meeting to define scope.",
  },
  {
    id: "design-phase",
    dateTime: "2025-02-01",
    date: "February 1, 2025",
    title: "Design Phase",
    description: "Created wireframes and mockups.",
  },
  {
    id: "development",
    dateTime: "2025-03-01",
    date: "March 1, 2025",
    title: "Development",
    description: "Building core features.",
  },
];

export function TimelineDemo() {
  return (
    <Timeline activeIndex={1} orientation="horizontal">
      {timelineItems.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineDot />
          <TimelineConnector />
          <TimelineContent>
            <TimelineHeader>
              <TimelineTime dateTime={item.dateTime}>{item.date}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

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
        <DashboardCard
          colVariant={"large"}
          Icon={Route}
          description="Watch out for upcoming deadlines"
          title="Timeline"
          centerContent
        >
          <TimelineDemo />
        </DashboardCard>
      </PageGrid>
    </>
  );
}
