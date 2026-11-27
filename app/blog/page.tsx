import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on AI, data leadership, analytics culture, and building things.",
};

export default function BlogPage() {
  const published = getAllPosts();

  return (
    <div className="container-page py-16">
      <div className="section-header mb-10">
        <span className="section-label">Writing</span>
        <div className="section-divider" />
      </div>

      <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-[-0.02em] mb-4">
        On AI, data, and building things.
      </h1>
      <p className="text-sm text-muted-foreground mb-12 max-w-[500px] leading-relaxed">
        Practical thinking on data leadership, AI-native systems, and what it
        means to build products as a senior practitioner.
      </p>

      <div className="flex flex-col border border-border rounded-lg overflow-hidden">
        {published.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="px-6 py-5 border-b border-border last:border-b-0 hover:bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between gap-6 mb-1.5">
              <span className="text-sm font-semibold leading-snug">
                {post.title}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 mt-0.5">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
