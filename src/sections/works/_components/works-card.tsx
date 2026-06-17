import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WorksCardProps {
	image: string;
	title: string;
	description: string;
	link?: string;
	backdropVariant?: "teal-glow";
	frameClassName?: string;
	imageClassName?: string;
	contentTone?: "light" | "dark";
}

export default function WorksCard({
	image,
	title,
	description,
	link,
	backdropVariant,
	frameClassName,
	imageClassName,
	contentTone = "light",
}: WorksCardProps) {
	const isDarkTone = contentTone === "dark";

	return (
		<Card className="relative aspect-video w-full overflow-hidden">
			<div className="relative h-full w-full rounded-lg p-1">
				<div
					className={cn(
						"relative h-full w-full overflow-hidden rounded-md border border-border/80 bg-card-elevated",
						frameClassName,
					)}
				>
					{backdropVariant === "teal-glow" ? (
						<>
							<div className="absolute inset-0 bg-linear-to-b from-[#020617] via-[#0F172A] to-[#111827]" />
							<div className="absolute left-1/2 top-1/2 h-[52%] w-[34%] -translate-x-1/2 -translate-y-[42%] rounded-full bg-[#14b8a6]/35 blur-3xl" />
							<div className="absolute left-1/2 top-1/2 h-[34%] w-[22%] -translate-x-1/2 -translate-y-[46%] rounded-full bg-[#5eead4]/25 blur-2xl" />
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
						</>
					) : null}
					<img
						src={image}
						alt={title}
						className={cn(
							"relative z-10 h-full w-full object-cover object-center",
							imageClassName,
						)}
					/>
					<div
						className={cn(
							"absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-end justify-between gap-3 p-4",
							isDarkTone &&
								"bg-linear-to-t from-white/90 via-white/55 to-transparent",
							!isDarkTone &&
								"bg-linear-to-t from-black/80 via-black/35 to-transparent",
						)}
					>
						<div className="min-w-0 flex-1">
							<CardTitle
								className={cn(
									"hidden sm:block",
									isDarkTone ? "text-black" : "text-primary",
								)}
							>
								{title}
							</CardTitle>
							<CardDescription
								className={cn(
									"hidden max-w-[420px] sm:block",
									isDarkTone ? "text-black/60" : "text-primary/60",
								)}
							>
								{description}
							</CardDescription>
						</div>

						{link ? (
							<Button asChild size="sm" variant="secondary">
								<a href={link} target="_blank" rel="noreferrer">
									View project
								</a>
							</Button>
						) : null}
					</div>
				</div>
			</div>
		</Card>
	);
}
