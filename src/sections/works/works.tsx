import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";
import { Button } from "@/components/ui/button";

export default function Works() {
  return (
    /* biome-ignore lint/correctness/useUniqueElementIds: anchor target appears once */
    <Section
      id="works"
      title="Preview a few highlight projects"
      description="Swap in real case studies that show your range — from product builds to creative experiments."
      className="grid grid-cols-1 gap-4"
      badgeText="Featured projects"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard
          key={item.title}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
      <div className="flex w-full justify-end">
        <a
          href="https://github.com/Hamed-Ajaj?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/50 transition-colors text-white"
        >
          View all projects
        </a>
      </div>
    </Section>
  );
}
