import { ArrowLeftIcon, LapTimerIcon } from "@radix-ui/react-icons";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getRootSeo } from "@/lib/seo";
import Footer from "@/sections/footer/footer";
import { Background } from "@/sections/hero/_components/background";
import { getProjectDetailBySlug } from "@/sections/works/_constants/project-details";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectDetailBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          ...getRootSeo(),
          meta: [
            { title: `${loaderData.title} | Project Details` },
            {
              name: "description",
              content: loaderData.summary,
            },
          ],
        }
      : getRootSeo(),
  notFoundComponent: NotFound,
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const project = Route.useLoaderData();

  return (
    <main className="mx-auto flex w-full flex-col items-center justify-start md:w-7xl md:border-x border-border divide-y divide-border/80">
      <section className="relative flex min-h-[52svh] w-full flex-col justify-end overflow-hidden border-b border-border/80 px-4 pb-8 pt-28 md:px-8 md:pb-10">
        <div className="absolute inset-0 pointer-events-none">
          <Background />
        </div>
        <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.95fr)] lg:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <Badge variant="secondary" size="lg" className="w-fit bg-card/70">
              <LapTimerIcon aria-hidden="true" />
              {project.category}
            </Badge>
            <h1 className="max-w-[12ch] text-4xl font-medium leading-[1.02] text-balance text-foreground md:max-w-3xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-lg">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="md">
                <Link to="/" hash="works">
                  <ArrowLeftIcon aria-hidden="true" />
                  Back to projects
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card/40 p-3 backdrop-blur-sm card-highlight">
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-linear-to-b from-[#020617] via-[#0F172A] to-[#111827]">
              <div className="absolute left-1/2 top-1/2 h-[52%] w-[34%] -translate-x-1/2 -translate-y-[42%] rounded-full bg-[#14b8a6]/35 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[34%] w-[22%] -translate-x-1/2 -translate-y-[46%] rounded-full bg-[#5eead4]/25 blur-2xl" />
              <img
                src={project.cover}
                alt={project.title}
                className={cn(
                  "relative z-10 mx-auto h-full max-h-[440px] w-full object-contain p-4 md:p-6",
                  project.coverImageClassName,
                )}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full gap-8 px-4 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1.1fr)_320px]">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-foreground">
              Overview
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-base">
              {project.intro}
            </p>
          </div>

          {project.problem ? (
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-foreground">
                The Problem
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-base">
                {project.problem}
              </p>
            </div>
          ) : null}

          {project.solution ? (
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-foreground">
                The Solution
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-base">
                {project.solution}
              </p>
            </div>
          ) : null}

          {project.featureGroups?.length ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">
                Key Features
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.featureGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-border/80 bg-card/40 p-5 card-highlight"
                  >
                    <h3 className="text-lg font-medium text-foreground">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/65">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-foreground">
              Screens & workflows
            </h2>
            <div className="grid gap-4">
              {project.screens.map((screen) => (
                <article
                  key={screen.title}
                  className="rounded-2xl border border-border/80 bg-card/40 p-4 md:p-5 card-highlight"
                >
                  {screen.image ? (
                    <div className="mb-4 overflow-hidden rounded-xl border border-border/80 bg-linear-to-b from-[#020617] via-[#0F172A] to-[#111827]">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="mx-auto h-full max-h-[420px] w-full object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex min-h-56 items-center justify-center rounded-xl border border-dashed border-border/80 bg-card/50 text-sm text-foreground/45">
                      Screenshot placeholder
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-foreground">
                    {screen.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/65">
                    {screen.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border/80 bg-card/40 p-5 card-highlight">
            <h2 className="text-lg font-medium text-foreground">
              Project highlights
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
              {project.highlights.map((item) => (
                <li key={item} className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {project.technicalHighlights?.length ? (
            <div className="rounded-2xl border border-border/80 bg-card/40 p-5 card-highlight">
              <h2 className="text-lg font-medium text-foreground">
                Technical Highlights
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
                {project.technicalHighlights.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.impact?.length ? (
            <div className="rounded-2xl border border-border/80 bg-card/40 p-5 card-highlight">
              <h2 className="text-lg font-medium text-foreground">
                Project Impact
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </section>
      <Footer />
    </main>
  );
}
