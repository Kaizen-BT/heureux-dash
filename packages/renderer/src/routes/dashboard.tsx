import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ListTodo, PanelsLeftBottom, Route } from "lucide-react";

export function DashboardPage() {
  return (
    <>
      <TypographyH1>Dashboard</TypographyH1>
      <PageGrid>
        {/* Project Progression Card */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <PanelsLeftBottom className="w-5 h-5 self-center" />
              <h2 className="text-xl">Project Progression</h2>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Reminder Card */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <Bell className="w-5 h-5 self-center" />
              <h2 className="text-xl">Reminders</h2>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Upcoming Tasks Card */}
        <Card className="col-span-4 row-span-2">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <ListTodo className="w-5 h-5 self-center" />
              <h2 className="text-xl">Upcoming Tasks</h2>
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Timeline Card */}
        <Card className="col-span-8">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2">
              <Route className="w-5 h-5 self-center" />
              <h2 className="text-xl">Timeline</h2>
            </CardTitle>
          </CardHeader>
        </Card>
      </PageGrid>
    </>
  );
}
