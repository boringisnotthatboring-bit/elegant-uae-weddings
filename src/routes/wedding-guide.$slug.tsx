import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug, blogPosts } from "@/lib/content/blog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/wedding-guide/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Wedding Guide" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | Wedding Guide` },
        { name: "description", content: p.excerpt },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="section-y">
      <div className="container-page text-center">
        <h1 className="font-display text-4xl">Article not found</h1>
        <div className="mt-6">
          <Button asChild><Link to="/wedding-guide">Back to Wedding Guide</Link></Button>
        </div>
      </div>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts
    .filter((p) => p.status === "published" && p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <article className="section-y">
        <div className="container-page max-w-3xl">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/wedding-guide">Wedding Guide</Link>{" "}
            <span className="mx-2">/</span> {post.category}
          </nav>
          <p className="eyebrow">{post.category}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <div className="mt-8 aspect-[16/9] overflow-hidden rounded-sm">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
          <div className="prose prose-neutral mt-10 max-w-none text-base leading-relaxed text-foreground/85">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            {post.body ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <>
                <p>
                  This is a seeded article outline. Our editorial team is preparing the full guide with expert insight, up-to-date pricing and real venue examples across Dubai, Abu Dhabi and the wider UAE.
                </p>
                <p>
                  In the meantime, if you'd like to discuss how this topic applies to your wedding, book a free consultation and one of our planners will walk you through it in detail.
                </p>
              </>
            )}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild><Link to="/contact">Book Free Consultation</Link></Button>
            <Button asChild variant="outline"><Link to="/wedding-guide">Back to the Guide</Link></Button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-y bg-secondary/40">
          <div className="container-page">
            <h2 className="font-display text-2xl">More in {post.category}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/wedding-guide/$slug"
                  params={{ slug: r.slug }}
                  className="group"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-3 font-display text-lg group-hover:text-primary">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
