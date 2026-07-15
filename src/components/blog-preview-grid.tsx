import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/lib/content/blog";

export function BlogPreviewGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to="/wedding-guide/$slug"
          params={{ slug: post.slug }}
          className="group flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="uppercase tracking-widest text-primary">
              {post.category}
            </span>
            <span aria-hidden>·</span>
            <time>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
          </div>
          <h3 className="mt-2 font-display text-xl leading-tight group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </Link>
      ))}
    </div>
  );
}
