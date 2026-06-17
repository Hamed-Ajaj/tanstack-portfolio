export interface FaqItem {
	question: string;
	answer: string;
}

const businessFaqItems: FaqItem[] = [
	{
		question: "What kind of software do you build?",
		answer:
			"I build custom software for businesses, including internal systems, ERP platforms, client portals, SaaS products, web applications, and mobile apps.",
	},
	{
		question: "Can you build a complete system from scratch?",
		answer:
			"Yes. I can handle the full process from planning and architecture to development, deployment, and ongoing improvements.",
	},
	{
		question: "How much does a project usually cost?",
		answer:
			"It depends on the scope and complexity. Smaller projects can start at a few hundred dollars, while larger business systems and SaaS platforms are priced based on requirements and development time.",
	},
	{
		question: "How long does a project take?",
		answer:
			"Most projects take anywhere from a few weeks to a few months depending on features, integrations, and business requirements.",
	},
	{
		question: "Do you provide ongoing support and maintenance?",
		answer:
			"Yes. After launch, I can continue maintaining the system, fixing issues, and adding new features as your business grows.",
	},
	{
		question: "Can you improve or rebuild an existing system?",
		answer:
			"Absolutely. Whether it's performance issues, outdated technology, poor user experience, or missing features, I can help modernize and improve existing software.",
	},
	{
		question: "Can you integrate third-party services?",
		answer:
			"Yes. I regularly integrate payment gateways, WhatsApp automation, APIs, authentication systems, analytics tools, and other business services.",
	},
	{
		question: "Do you build mobile applications too?",
		answer:
			"Yes. Depending on the project, I can build mobile applications that work across iOS and Android alongside web platforms.",
	},
	{
		question: "What technologies do you use?",
		answer:
			"I choose technologies based on the project's needs, but I commonly work with React, Next.js, TypeScript, Node.js, .NET, PostgreSQL, Docker, and modern cloud infrastructure.",
	},
	{
		question: "How do we get started?",
		answer:
			"Simply reach out with your idea or business problem. We'll discuss requirements, define the scope, and determine the best solution for your needs.",
	},
];

export const faqItems = businessFaqItems;
export const faqItemsMobile = businessFaqItems;
