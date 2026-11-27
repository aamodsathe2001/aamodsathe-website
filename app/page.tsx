import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ExperienceSlider from "@/components/ExperienceSlider";
import CompanyLogo from "@/components/CompanyLogo";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Aamod Sathe",
  description:
    "Data & AI leader with 20+ years at Google, Meta, PayPal, and Vanta. Builder of AI products.",
};

type CompanyKey = "ebay" | "paypal" | "facebook" | "google" | "meta" | "vanta";

const companies: {
  keys: CompanyKey[];
  name: string;
  years: string;
  current?: boolean;
}[] = [
  { keys: ["ebay", "paypal"], name: "eBay · PayPal", years: "2005–2013" },
  { keys: ["facebook"],       name: "Facebook",      years: "2013–2015" },
  { keys: ["google"],         name: "Google",        years: "2015–2020" },
  { keys: ["meta"],           name: "Meta",          years: "2020–2026" },
  { keys: ["vanta"],          name: "Vanta",         years: "2026–Present", current: true },
];

const metrics = [
  { number: "20+", label: "Years in data & AI leadership" },
  { number: "60+", label: "Data scientists led globally at Meta Reality Labs" },
  { number: "80%+", label: "Data questions automated at Vanta via MCP" },
  { number: "$1B+", label: "Incremental revenue driven at Meta Ads" },
];

const projects = [
  {
    name: "Samani.ai",
    desc: "AI interview prep platform for candidates and recruiters. Custom evaluation, role-specific criteria.",
    status: "Active · 100s of users",
    href: "https://samani.ai",
  },
  {
    name: "Kate",
    desc: "AI phone answering service for frontline businesses. Handles calls, books appointments, routes inquiries.",
    status: "Active · 100s of users",
    href: "#",
  },
  {
    name: "Coach Samani",
    desc: "AI school exam prep tutor for students. Adaptive practice and personalized feedback.",
    status: "Active · 100s of users",
    href: "#",
  },
  {
    name: "DataMod Ventures",
    desc: "AI-native venture and investment research platform. Investing in India's AI revolution.",
    status: "Active",
    href: "https://datamodventures.vc",
  },
];


export default function HomePage() {
  return (
    <div className="container-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-[88px] pb-10">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-primary mb-5">
          Sunnyvale, CA · aamodsathe.com
        </p>
        <h1 className="font-display text-[clamp(44px,7vw,68px)] font-semibold leading-[1.08] tracking-[-0.025em] mb-8">
          Aamod Sathe
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
          <Image
            src="/aamod-sathe.jpeg"
            alt="Aamod Sathe"
            width={148}
            height={148}
            className="rounded-2xl object-cover flex-shrink-0 ring-1 ring-border"
            priority
          />
          <p className="text-xl text-muted-foreground leading-relaxed max-w-[580px]">
            <strong className="text-foreground font-medium">
              Data &amp; AI leadership
            </strong>{" "}
            — I build analytical functions from nothing, scale them, then make
            them AI-native before anyone asks.
            <br />
            <br />
            20+ years across{" "}
            <strong className="text-foreground font-medium">
              Google, Meta, PayPal, and Vanta
            </strong>
            . Player-coach: comfortable in the CEO&apos;s business review and
            writing the SQL when it matters.
          </p>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          <Link href="/about" className="btn-primary">
            About me →
          </Link>
          <Link href="/blog" className="btn-secondary">
            My writing
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>
      </section>

      {/* ── COMPANY TIMELINE ─────────────────────────────── */}
      <div className="border-t border-border pt-10 pb-8">
        <div className="flex">
          {companies.map((co) => (
            <div key={co.name} className="flex-1 flex flex-col items-center">
              <div className="flex gap-1.5 mb-2.5">
                {co.keys.map((key) => (
                  <CompanyLogo key={key} company={key} glow={co.current} />
                ))}
              </div>
              <span
                className="text-xs font-medium text-center whitespace-nowrap"
                style={{ color: co.current ? "#3B82F6" : "#808080" }}
              >
                {co.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex relative h-[22px] items-center my-4">
          <div className="absolute left-[10%] right-[10%] h-px bg-border top-1/2 -translate-y-1/2" />
          {companies.map((co, i) => (
            <div key={i} className="flex-1 flex justify-center relative z-10">
              <div
                className="rounded-full flex-shrink-0"
                style={{
                  width: co.current ? "14px" : "10px",
                  height: co.current ? "14px" : "10px",
                  background: co.current ? "#3B82F6" : "#3a3a3a",
                  boxShadow: co.current
                    ? "0 0 0 5px rgba(59,130,246,0.18)"
                    : undefined,
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex">
          {companies.map((co) => (
            <div
              key={co.name}
              className="flex-1 text-center text-[11px] whitespace-nowrap"
              style={{
                color: co.current ? "#3B82F6" : "#808080",
                fontWeight: co.current ? 600 : undefined,
              }}
            >
              {co.years}
            </div>
          ))}
        </div>
      </div>

      {/* ── METRICS STRIP ────────────────────────────────── */}
      <div className="border-t border-b border-border py-10 grid grid-cols-2 md:grid-cols-4 gap-6 mb-[72px]">
        {metrics.map((m) => (
          <div key={m.number}>
            <div className="font-display text-[38px] font-semibold leading-none mb-2.5">
              {m.number}
            </div>
            <div className="text-sm text-muted-foreground leading-snug">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section className="mb-[72px]">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <div className="section-divider" />
        </div>
        <ExperienceSlider />
      </section>

      {/* ── BUILDING ─────────────────────────────────────── */}
      <section className="mb-[72px]">
        <div className="section-header">
          <span className="section-label">Building</span>
          <div className="section-divider" />
        </div>
        <p className="text-sm text-muted-foreground mb-6 max-w-[540px] leading-relaxed">
          Four AI products built independently using Claude Code — all active,
          all with real users. The site itself is a demonstration of that.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={
                p.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="bg-card border border-border rounded-lg p-6 block hover:border-primary hover:bg-secondary transition-colors"
            >
              <div className="text-base font-semibold mb-2">{p.name}</div>
              <div className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-primary">
                {p.status}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── WRITING ──────────────────────────────────────── */}
      <section className="mb-[72px]">
        <div className="section-header">
          <span className="section-label">Writing</span>
          <div className="section-divider" />
        </div>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          On AI, data leadership, analytics culture, and building things.
        </p>
        <div className="border border-border rounded-lg overflow-hidden">
          {getAllPosts().map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex justify-between items-center px-6 py-[18px] border-b border-border last:border-b-0 hover:bg-secondary transition-colors gap-8"
            >
              <span className="text-sm font-medium leading-snug">{post.title}</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
