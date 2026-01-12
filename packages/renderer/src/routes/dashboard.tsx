import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell, ListTodo, PanelsLeftBottom, Route } from "lucide-react";

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
import { DashboardIcon } from "@/components/icons/dashboard-icon";

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
        <DashboardCard>
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <DashboardIcon Icon={PanelsLeftBottom} />
              Project Progression
            </CardTitle>
            <CardDescription>Overall Overview</CardDescription>
          </CardHeader>
        </DashboardCard>

        {/* Reminder Card */}
        <DashboardCard>
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <DashboardIcon Icon={ListTodo} />
              Reminders
            </CardTitle>
          </CardHeader>
        </DashboardCard>

        {/* Upcoming Tasks Card */}
        <DashboardCard className="row-span-2">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <DashboardIcon Icon={Bell} />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>The following tasks are due soon</CardDescription>
          </CardHeader>
        </DashboardCard>

        {/* Timeline Card */}
        <DashboardCard variant={"large"}>
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <DashboardIcon Icon={Route} />
              Timeline
            </CardTitle>
            <CardDescription>Watch out for upcoming deadlines</CardDescription>
          </CardHeader>
          <CardContent className="m-auto">
            <TimelineDemo />
          </CardContent>
        </DashboardCard>
      </PageGrid>
    </>
  );
}
