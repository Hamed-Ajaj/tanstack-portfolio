import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
  return (
    /* biome-ignore lint/correctness/useUniqueElementIds: anchor target appears once */
    <Section
      id="works"
      title="Featured Case Studies"
      description="Explore a selection of real-world software projects built to solve operational challenges and support business growth."
      className="grid grid-cols-1 gap-8 md:gap-4"
      badgeText="Featured projects"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard key={item.title} {...item} />
      ))}
      {/* <div className="flex w-full justify-end"> */}
      {/*   <a */}
      {/*     href="https://github.com/Hamed-Ajaj?tab=repositories" */}
      {/*     target="_blank" */}
      {/*     rel="noopener noreferrer" */}
      {/*     className="border border-border text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/50 transition-colors text-white" */}
      {/*   > */}
      {/*     View all projects */}
      {/*   </a> */}
      {/* </div> */}
    </Section>
  );
}
