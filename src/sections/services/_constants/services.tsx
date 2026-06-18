import {
  FigmaLogoIcon,
  FileIcon,
  FilePlusIcon,
  FileTextIcon,
  GitHubLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
  ConvertingCardContent,
  type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
  href: string;
  className: string;
  background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
  destination: {
    id: "client",
    Icon: PersonIcon,
  },
  hub: {
    id: "handoff",
    Icon: FigmaLogoIcon,
  },
  sources: [
    {
      id: "brief",
      Icon: FileTextIcon,
    },
    {
      id: "spec",
      Icon: FilePlusIcon,
    },
    {
      id: "assets",
      Icon: FileIcon,
    },
    {
      id: "repo",
      Icon: GitHubLogoIcon,
    },
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    name: "Full-Stack Web Development",
    description:
      "End-to-end development of dashboards, landing pages, ecommerce platforms, or custom web apps using React, Next.js, TanStack Start, Node, Hono, and Laravel. Includes clean architecture, API development, and scalable database design.",
  },
  {
    name: "SEO & Performance Optimization",
    description:
      "Improve search visibility, speed, and overall site health. Includes technical SEO, lighthouse improvements, structured metadata, and performance tuning for modern frameworks like Next.js.",
  },
  {
    name: "Deployment & DevOps Setup",
    description:
      "Secure and reliable deployment to VPS servers using Docker, reverse proxies, SSL, CI/CD, and performance optimizations. I set up production-ready environments tailored for small businesses and startups.",
  },
  {
    name: "Advisory Session",
    description:
      "Note how teams can book strategy calls, technical audits, or office hours when they need a quick unblock.",
  },
  {
    name: "Launch Support",
    description:
      "Explain the handoff, QA, and deployment support you bring during product launches or campaign pushes.",
  },
  {
    name: "Optimization Pass",
    description:
      "Reserve this line for performance, accessibility, or UX audits that keep shipped work feeling polished.",
  },
  {
    name: "Systems Audit",
    description:
      "Call out any platform review, stack migration, or modernization work that keeps teams prepared for scale.",
  },
];

export const bestPractices: ServiceItem[] = [
  {
    name: "Maintainable architecture",
    description:
      "Systems are structured so future features, fixes, and onboarding do not become expensive.",
  },
  {
    name: "Clear documentation",
    description:
      "Important flows and technical decisions are documented so teams are not dependent on one person.",
  },
  {
    name: "Stable delivery process",
    description:
      "Projects move through planning, implementation, QA, and deployment with fewer surprises.",
  },
  {
    name: "Long-term support readiness",
    description:
      "The final system is easier to maintain, improve, and hand over after launch.",
  },
];

export const serviceFeatures: ServiceFeature[] = [
  {
    name: "Services",
    description:
      "Creating fast, modern, and fully responsive web applications.",
    href: "#",
    className: "col-span-1",
    background: <ServicesCardContent items={serviceItems} />,
  },

  {
    name: "From Design To Build",
    description:
      "Transforming design files into clean, pixel-perfect web layouts.",
    href: "#",
    className: "col-span-1",
    background: <ConvertingCardContent icons={convertingCardIcons} />,
  },
  {
    name: "Reliable Engineering",
    description:
      "Building systems that stay maintainable, documented, and easier to extend over time.",
    href: "#",
    className: "col-span-1",
    background: <CleanCodeCardContent items={bestPractices} />,
  },
];
