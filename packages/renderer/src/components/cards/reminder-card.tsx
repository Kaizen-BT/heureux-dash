import { Calendar1Icon, ListTodo } from "lucide-react";
import {
  DashboardCard,
  DashboardCardContent,
} from "@/components/cards/dashboard-card";
import { TypographyH1 } from "@/components/typography";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

/**
 * Temporary date picker component to reschedule due dates for
 * reminders
 *
 * @see {@link https://ui.shadcn.com/docs/components/date-picker#picker-with-input|Shadcn DatePicker Example}
 */
function DatePicker() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="date">Scheduled For:</Label>
      <div className="relative flex">
        <Input id="date" placeholder="June 01, 2025" className="pr-10" />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2 hover:text-primary"
            >
              <Calendar1Icon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar mode="single" captionLayout="dropdown" />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

/**
 * Component to render an upcoming reminder
 */
export function ReminderCard() {
  return (
    <DashboardCard title="Reminders" Icon={ListTodo}>
      <DashboardCardContent className="w-full h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <TypographyH1 className="w-1/2">Code Review</TypographyH1>
        </div>
        <DatePicker />
      </DashboardCardContent>
    </DashboardCard>
  );
}
