import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import GiscusComments from "@/components/GiscusComments";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="container-page py-16">
      <Link
        href="/blog"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block"
      >
        ← All posts
      </Link>

      <article className="max-w-[640px]">
        <header className="mb-10">
          <p className="text-xs text-muted-foreground mb-3">
            {post.date
              ? new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </p>
          <h1 className="font-display text-[clamp(26px,4vw,38px)] font-semibold leading-tight tracking-[-0.02em] mb-4">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-base text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          )}
        </header>

        <div className="prose-custom">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <GiscusComments />
        </div>
      </article>
    </div>
  );
}
