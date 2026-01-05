import { Calendar } from "@/components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export function SidebarCalendar() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          mode="single"
          selected={new Date()}
          className="pointer-events-none w-full"
          captionLayout="dropdown"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
