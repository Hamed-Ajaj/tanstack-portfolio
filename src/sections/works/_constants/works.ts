export interface WorksItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const works: WorksItem[] = [
  {
    image: "/better-news.webp",
    title: "Better news",
    description: "Hacker news clone using bun hono and react.",
    link: "https://github.com/Hamed-Ajaj/better-news",
  },
  {
    image: "/pitch-startup.webp",
    title: "Pitch Startup",
    description:
      "PitchStartup is a community-driven platform where ambitious founders share their startup ideas and gain real-time feedback, visibility, and connections — all before launch.",
    link: "https://example.com/project-2",
  },
];
