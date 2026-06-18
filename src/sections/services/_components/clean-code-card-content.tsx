import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/sections/services/_constants/services";

interface CleanCodeCardContentProps {
	className?: string;
	items: ServiceItem[];
}

export function CleanCodeCardContent({
	className,
	items,
}: CleanCodeCardContentProps) {
	const featuredItems = items.slice(0, 4);

	return (
		<div className={cn("relative h-full overflow-hidden", className)}>
			<div className="pointer-events-none absolute right-6 top-6 h-28 w-28 rounded-full bg-[#14b8a6]/10 blur-3xl" />
			<div className="pointer-events-none absolute inset-x-0 top-14 h-px bg-linear-to-r from-transparent via-border/70 to-transparent" />

			<div className="relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/40 p-5">
				<div className="space-y-2">
					<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5eead4]">
						Reliability
					</p>
					<h4 className="max-w-[16ch] text-lg font-medium leading-tight text-foreground">
						Built to be maintainable after launch
					</h4>
					<p className="max-w-[34ch] text-sm leading-relaxed text-foreground/60">
						Projects are structured for clarity, handoff, and long-term
						improvements instead of short-term delivery only.
					</p>
				</div>

				<div className="grid gap-3 pt-5">
					{featuredItems.map((item) => (
						<div
							key={item.name}
							className="flex items-start gap-3 rounded-xl border border-border/70 bg-card-elevated/70 px-3 py-3 card-highlight"
						>
							<div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 bg-card text-[#5eead4]">
								<CheckIcon className="size-3.5" />
							</div>
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none text-foreground">
									{item.name}
								</p>
								<p className="text-xs leading-relaxed text-foreground/55">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
