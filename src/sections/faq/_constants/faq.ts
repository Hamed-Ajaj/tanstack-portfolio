export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question:
      "What kind of frontend development services do you specialize in, and what technologies do you primarily use?",
    answer:
      "I focus on building modern, high-performance web applications with an emphasis on clean architecture, smooth interactions, and strong visual appeal. My core stack includes React, TypeScript, and Next.js, along with tools like Tailwind CSS and GSAP,Motion for animations. My services cover everything from building custom UI components and integrating APIs to deploying production-ready applications with scalability and maintainability in mind.",
  },
  {
    question:
      "How long does it usually take to build a frontend project, and what factors influence the timeline?",
    answer:
      "The duration of a project depends heavily on its scope and technical complexity. A minimal landing page with animations might take around 2–3 weeks, while a complex web application with authentication, dashboards, and API integrations could span several months. Factors that influence timelines include the number of features, animation complexity, third-party integrations, and revision cycles. During the initial planning stage, I always provide a detailed estimate with milestones to keep expectations transparent and the workflow predictable.",
  },
  {
    question: "What technologies do you typically use when building a backend?",
    answer:
      "The technology stack depends on the project needs, but I commonly use frameworks like Laravel, Node.js (with Express or NestJS), also i work with nextjs or similar modern backend tools. For databases, I work with PostgreSQL, MySQL, or SQLite depending on scale. I also integrate authentication systems, background jobs, caching layers like Redis, and cloud storage services when needed to ensure scalability and performance.",
  },
  {
    question: "How do you ensure backend security and data protection?",
    answer:
      "Security is implemented at multiple layers. I use secure authentication methods, hashed passwords, role-based authorization, request validation, and protection against common attacks like SQL injection and XSS. Sensitive data is encrypted, API access is rate-limited, and regular security best practices are followed throughout development to ensure user data remains protected.",
  },
  {
    question:
      "What methods do you use to ensure websites are responsive, accessible, and visually consistent across devices?",
    answer:
      "I build using a mobile-first, component-driven approach. Each layout and UI element is designed to adapt fluidly to different screen sizes using CSS Grid, Flexbox, and Tailwind CSS utilities. I also follow accessibility best practices (WCAG standards) — ensuring semantic HTML, keyboard navigation, and screen-reader compatibility. To guarantee consistency, I test across real devices and multiple browsers, using both manual and automated checks to ensure the interface feels cohesive everywhere.",
  },
  {
    question:
      "Can you help optimize the performance of an existing website or web application?",
    answer:
      "Absolutely. This includes techniques like code splitting, lazy loading, and efficient bundling for reduced load times. I optimize images and assets, minimize render-blocking resources, and fine-tune animations for smoothness. I also use tools like Lighthouse and WebPageTest to measure Core Web Vitals and ensure measurable improvements in performance, SEO, and accessibility. My goal is not just to make your site faster, but to create a smoother and more enjoyable experience for your users.",
  },
  // {
  //   question: "Should I cover pricing?",
  //   answer:
  //     "If youre comfortable sharing, outline the formats you offer: fixed bids, retainers, sprints, or day rates. Even a simple range provides clarity for new leads.",
  // },
  {
    question: "What if someone needs more info?",
    answer:
      "Contact me directly through the form so I can provide tailored answers and next steps, or by email hamed.ajaj@proton.me. ",
  },
];

export const faqItemsMobile: FaqItem[] = [
  {
    question: "What projects fit here?",
    answer:
      "Describe the type of work you love doing and who its for so new leads know theyre in the right place.",
  },
  {
    question: "Whats the process?",
    answer:
      "Outline your workflow at a high level discovery, build, launch to show how organized you are.",
  },
  {
    question: "How fast can things ship?",
    answer:
      "Give a rough range for common engagements and call out what makes timelines move up or down.",
  },
  {
    question: "How do we collaborate?",
    answer:
      "List the tools you prefer and whether you plug into existing teams, handle communication async, or lead the project.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Share your primary stack or platforms. People searching for a specialist will thank you.",
  },
  {
    question: "Are you available?",
    answer:
      "Let folks know if youre open for new work now, booking next quarter, or taking on limited engagements.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Reference your preferred model (fixed scope, sprint-based, or retainers) and invite people to request a quote.",
  },
  {
    question: "Need something else?",
    answer:
      "Remind visitors they can always message you through the contact form for anything not covered here.",
  },
];
