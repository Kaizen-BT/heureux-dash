import { ListTodo } from "lucide-react";
import {
  DashboardCard,
  DashboardCardContent,
} from "@/components/cards/dashboard-card";
import { TypographyH1 } from "../typography";

export function ReminderCard() {
  return (
    <DashboardCard title="Reminders" Icon={ListTodo}>
      <DashboardCardContent className="w-full h-full flex flex-col">
        <div className="my-auto">
          <TypographyH1 className="w-1/2">Code Review</TypographyH1>
        </div>
        <div>
          <p>Scheduled For:</p>
          {/* Datepicker goes here */}
        </div>
      </DashboardCardContent>
    </DashboardCard>
  );
}
