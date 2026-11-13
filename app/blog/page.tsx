import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on AI, data leadership, analytics culture, and building things.",
};

const posts = [
  {
    title: "Why I build things with Claude Code on weekends",
    slug: "why-i-build-with-claude-code",
    date: "Coming soon",
    description:
      "The mindset behind AI-native building, and why senior practitioners should be shipping code.",
  },
  {
    title:
      "The Portal deprecation: what a data-driven product decision actually looks like",
    slug: "portal-deprecation",
    date: "Coming soon",
    description:
      "How analytical evidence from the executive business review led to a major product discontinuation at Meta.",
  },
  {
    title:
      "The executive metrics forum: the most underrated analytical function in a company",
    slug: "executive-metrics-forum",
    date: "Coming soon",
    description:
      "Why the weekly metrics meeting is the highest-leverage place for a data leader to operate.",
  },
  {
    title:
      "Building a semantic metrics layer: why the data contract is the product",
    slug: "semantic-metrics-layer",
    date: "Coming soon",
    description:
      "What I built at Vanta and why the same number appearing across all tools is worth more than any dashboard.",
  },
  {
    title: "From 12 to 50 DS in a year: what I learned about scaling analytical teams",
    slug: "scaling-ds-teams",
    date: "Coming soon",
    description:
      "The hiring process, onboarding infrastructure, and quality gates that let us scale without losing standards.",
  },
];

export default function BlogPage() {
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

      <div className="flex flex-col gap-1 border border-border rounded-lg overflow-hidden">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="px-6 py-5 border-b border-border last:border-b-0 hover:bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between gap-6 mb-1.5">
              <span className="text-sm font-semibold leading-snug">
                {post.title}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 mt-0.5">
                {post.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
