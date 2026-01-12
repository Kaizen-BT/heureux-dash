import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import {
  Card,
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
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <PanelsLeftBottom className="w-4 h-4 self-center" />
              Project Progression
            </CardTitle>
            <CardDescription>Overall Overview</CardDescription>
          </CardHeader>
        </Card>

        {/* Reminder Card */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <Bell className="w-4 h-4 self-center" />
              Reminders
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Upcoming Tasks Card */}
        <Card className="col-span-4 row-span-2">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <ListTodo className="w-4 h-4 self-center" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>The following tasks are due soon</CardDescription>
          </CardHeader>
        </Card>

        {/* Timeline Card */}
        <Card className="col-span-8">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <Route className="w-4 h-4 self-center" />
              Timeline
            </CardTitle>
            <CardDescription>Watch out for upcoming deadlines</CardDescription>
          </CardHeader>
          <CardContent className="m-auto">
            <TimelineDemo />
          </CardContent>
        </Card>
      </PageGrid>
    </>
  );
}
