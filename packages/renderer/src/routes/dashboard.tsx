import { PageGrid } from "@/components/page-grid";
import { TypographyH1 } from "@/components/typography";
import { Card } from "@/components/ui/card";

export function DashboardPage() {
  return (
    <>
      <TypographyH1>Dashboard</TypographyH1>
      <PageGrid>
        {/* Project Progression Card */}
        <Card className="col-span-4" />

        {/* Reminder Card */}
        <Card className="col-span-4" />

        {/* Upcoming Tasks Card */}
        <Card className="row-span-2 col-span-4" />

        {/* Timeline Card */}
        <Card className="col-span-8" />
      </PageGrid>
    </>
  );
}
