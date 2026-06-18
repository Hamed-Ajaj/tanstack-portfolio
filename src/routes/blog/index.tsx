import { ArrowLeftIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getBlogIndexSeo } from "@/lib/seo";
import BlogCard from "@/sections/blog/_components/blog-card";
import { getAllPostsMeta } from "@/sections/blog/_server/posts";
import Footer from "@/sections/footer/footer";
import { Background } from "@/sections/hero/_components/background";

export const Route = createFileRoute("/blog/")({
  loader: () => getAllPostsMeta(),
  head: () => getBlogIndexSeo(),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const posts = Route.useLoaderData();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <main className="mx-auto flex w-full flex-col items-center justify-start md:w-7xl md:border-x border-border divide-y divide-border/80">
      <section className="relative flex min-h-[46svh] w-full flex-col justify-end overflow-hidden border-b border-border/80 px-4 pb-8 pt-28 md:px-8 md:pb-10">
        <div className="absolute inset-0 pointer-events-none">
          <Background />
        </div>
        <div className="relative z-10 flex max-w-3xl flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur-sm">
            <ReaderIcon aria-hidden="true" className="size-3.5" />
            Writing & case studies
          </div>
          <h1 className="max-w-[14ch] text-4xl font-medium leading-[1.02] text-balance text-foreground md:max-w-3xl md:text-6xl">
            Blog
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-lg">
            Articles, breakdowns, and practical notes from building custom
            software for businesses.
          </p>
          <div>
            <Button asChild variant="secondary" size="md">
              <Link to="/">
                <ArrowLeftIcon aria-hidden="true" />
                Back to homepage
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 px-4 py-8 md:px-8 md:py-10">
        {featuredPost ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-medium text-foreground md:text-2xl">
                Featured post
              </h2>
              <p className="text-xs text-foreground/45 md:text-sm">
                {posts.length} article{posts.length === 1 ? "" : "s"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              <BlogCard meta={featuredPost} />
              {remainingPosts.length ? (
                <div className="grid gap-4">
                  {remainingPosts.map((post) => (
                    <BlogCard key={post.slug} meta={post} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-border bg-card/60 p-6 text-sm text-foreground/60 card-highlight">
                  More writing will appear here as new posts are published.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-card/60 p-6 text-sm text-foreground/60 card-highlight">
            No posts yet. Add an MDX file in <code>src/content/posts</code> to
            publish your first article.
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
