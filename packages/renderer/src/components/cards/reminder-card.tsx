import { ListTodo } from "lucide-react";
import { DashboardCard } from "@/components/cards/dashboard-card";

export function ReminderCard() {
  return <DashboardCard title="Reminders" Icon={ListTodo} />;
}
