export interface WorksItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const works: WorksItem[] = [
  {
    image: "/mern-stacker-banner.webp",
    title: "mern-stacker",
    description:
      "MERN Stacker is a CLI tool that scaffolds a modern MERN-style project ",
    link: "https://github.com/Hamed-Ajaj/mern-stacker",
  },
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
    link: "https://pitchstartup.vercel.app/",
  },
];
