import najmErpCover from "@/assets/projects/najm-erp-cover.png";
import maweedCover from "@/assets/projects/maweed-cover.png";
import shabakatCover from "@/assets/projects/shabakat-cover.png";

export interface WorksItem {
	slug: string;
	image: string;
	title: string;
	description: string;
	backdropVariant?: "teal-glow";
	frameClassName?: string;
	imageClassName?: string;
	contentTone?: "light" | "dark";
}

export const works: WorksItem[] = [
	{
		slug: "najm-erp-system",
		image: najmErpCover,
		title: "Najm ERP System",
		description:
			"Enterprise ERP platform centralizing accounting, HR, content management, and organizational operations.",
		backdropVariant: "teal-glow",
		frameClassName:
			"flex items-center justify-center overflow-hidden rounded-md border border-border/80",
		imageClassName:
			"h-full w-full max-w-[84%] object-contain object-center p-4 md:max-w-[70%] md:p-7",
		contentTone: "light",
	},
	{
		slug: "maweed",
		image: maweedCover,
		title: "Maweed",
		description:
			"Built to help clinics replace manual processes with a centralized platform for appointments, patients, payments, and reminders.",
		backdropVariant: "teal-glow",
		frameClassName:
			"flex items-center justify-center overflow-hidden rounded-md border border-border/80",
		imageClassName:
			"h-full w-full max-w-[88%] object-contain object-center p-3 md:max-w-[74%] md:p-6",
		contentTone: "light",
	},
	{
		slug: "shabakat",
		image: shabakatCover,
		title: "Shabakat",
		description:
			"Manage subscribers, billing, invoices, payments, and automated reminders from a centralized platform built for generator operators.",
		backdropVariant: "teal-glow",
		frameClassName:
			"flex items-center justify-center overflow-hidden rounded-md border border-border/80",
		imageClassName:
			"h-full w-full max-w-[92%] object-contain object-center p-3 md:max-w-[80%] md:p-6",
		contentTone: "light",
	},
];
