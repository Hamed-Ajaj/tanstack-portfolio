import type { ComponentType, SVGProps } from "react";
import {
  BackpackIcon,
  CubeIcon,
  GlobeIcon,
  LapTimerIcon,
  ReaderIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";

type HighlightItem = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const trustTags = [
  "Healthcare",
  "ERP",
  "SaaS",
  "Internal Systems",
  "Utility Management",
];

const highlightItems: HighlightItem[] = [
  {
    title: "4+ Years Experience",
    description:
      "Building web applications, internal systems, SaaS products, and business platforms.",
    icon: LapTimerIcon,
  },
  {
    title: "CTO & Co-Founder",
    description:
      "Leading product and technical decisions for Maweed, a clinic management SaaS platform.",
    icon: RocketIcon,
  },
  {
    title: "Production Systems",
    description:
      "Built software used by real businesses in healthcare, ERP, and utility management.",
    icon: CubeIcon,
  },
  {
    title: "Multiple Industries",
    description:
      "Experience building solutions for clinics, organizations, and service providers.",
    icon: GlobeIcon,
  },
  {
    title: "Content Creator",
    description:
      "Sharing software engineering, systems design, and development insights with thousands of developers across social platforms.",
    icon: ReaderIcon,
  },
  {
    title: "Full Product Delivery",
    description:
      "From planning and architecture to deployment, maintenance, and ongoing improvements.",
    icon: BackpackIcon,
  },
];

export default function Highlights() {
  return (
    /* biome-ignore lint/correctness/useUniqueElementIds: anchor target appears once */
    <Section
      id="experience"
      title="Experience & Highlights"
      description="A quick overview of my experience, leadership roles, and the industries I've helped build software for."
      className="overflow-hidden bg-background"
      badgeText="At a glance"
      badgeIcon={<LapTimerIcon aria-hidden="true" className="size-3.5" />}
    >
      <div className="relative isolate z-10 bg-background">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#14b8a6]/12 blur-3xl md:h-56 md:w-56" />
        <div className="pointer-events-none absolute inset-x-10 top-10 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />

        <div className="relative flex flex-col gap-5 md:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {trustTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/80 bg-card/50 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-foreground/60 uppercase card-highlight"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlightItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/45 p-5 transition-transform duration-200 ease-out-quad hover:-translate-y-1"
                >
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/[0.04] via-transparent to-transparent opacity-80" />
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#14b8a6]/8 blur-2xl transition-opacity duration-200 group-hover:opacity-100 opacity-0" />

                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-card-elevated text-[#5eead4] shadow-sm card-highlight">
                        <Icon aria-hidden="true" className="size-5" />
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.16em] text-foreground/35 uppercase">
                        Trust
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="max-w-[18ch] text-lg font-medium leading-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
