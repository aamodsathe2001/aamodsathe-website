import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Data & AI leader with 20+ years building analytical functions and AI-native systems at Google, Meta, PayPal, and Vanta.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <div className="section-header mb-10">
        <span className="section-label">About</span>
        <div className="section-divider" />
      </div>

      <h1 className="font-display text-[clamp(32px,5vw,48px)] font-semibold leading-tight tracking-[-0.02em] mb-8 max-w-[600px]">
        Data &amp; AI leader. Builder of analytical functions. Shipper of AI
        products.
      </h1>

      <div className="max-w-[620px] space-y-5 text-[15px] text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a data and analytics leader with 20+ years of experience
          building analytical functions and AI-native systems at scale. My
          operating philosophy has been consistent across every role:{" "}
          <strong className="text-foreground font-medium">
            automate before you hire, treat internal operations as a product,
            and build systems that scale ahead of growth.
          </strong>
        </p>
        <p>
          I&apos;m currently{" "}
          <strong className="text-foreground font-medium">
            Head of Data &amp; Analytics at Vanta
          </strong>{" "}
          — the leading security posture management platform — where I built the
          data infrastructure and analytics function from scratch. The
          centrepiece is an MCP-based self-service layer that encodes business
          rules and data contracts at the infrastructure level, handling 80%+ of
          company data questions without analyst involvement. I also own the
          weekly company metrics update and forum for the CEO and senior
          leadership team.
        </p>
        <p>
          Before Vanta, I spent six years at Meta across three distinct roles:{" "}
          Director of Data Science for{" "}
          <strong className="text-foreground font-medium">Reality Labs</strong>{" "}
          (Quest, Portal, Ray-Ban Smart Glasses, Horizon Worlds), where I led a
          60+ person global team and drove the analytical evidence that led to
          the deprecation of the Portal product line;{" "}
          <strong className="text-foreground font-medium">Meta Ads</strong>,
          where I scaled the DS team from 12 to 50+ and delivered $1B+ in
          incremental revenue; and{" "}
          <strong className="text-foreground font-medium">
            Enterprise AI Platform
          </strong>
          , where I built agentic analytical infrastructure for a 70,000+
          engineer organization.
        </p>
        <p>
          At <strong className="text-foreground font-medium">Google</strong>, I
          ran analytics operations for Ads relevance and ranking ML systems and
          owned the executive metrics forum for Google Ads Marketing. Before
          that, at{" "}
          <strong className="text-foreground font-medium">Facebook</strong>, I
          built the SMB Analytics function from scratch. Earlier in my career, I
          built financial analytics infrastructure at{" "}
          <strong className="text-foreground font-medium">PayPal</strong> and
          production ML systems at{" "}
          <strong className="text-foreground font-medium">eBay</strong>.
        </p>
        <p>
          Outside the day job, I&apos;m a hands-on builder. I&apos;ve shipped
          four AI products using Claude Code:{" "}
          <strong className="text-foreground font-medium">Samani.ai</strong>{" "}
          (AI interview prep),{" "}
          <strong className="text-foreground font-medium">Kate</strong> (AI
          phone answering for frontline businesses),{" "}
          <strong className="text-foreground font-medium">Coach Samani</strong>{" "}
          (school exam prep tutor), and{" "}
          <strong className="text-foreground font-medium">
            DataMod Ventures
          </strong>{" "}
          (AI-native investment research). All are active with real users.
        </p>
        <p>
          I write and think about AI, data leadership, analytics culture, and
          the future of AI-native organizations.
        </p>
      </div>

      <div className="mt-10 flex gap-3 flex-wrap">
        <Link href="/resume" className="btn-primary">
          Full resume →
        </Link>
        <Link href="/contact" className="btn-secondary">
          Get in touch
        </Link>
      </div>

      <div className="mt-14 pt-10 border-t border-border">
        <div className="section-header mb-6">
          <span className="section-label">Education</span>
          <div className="section-divider" />
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-sm font-semibold">
              MS, Operations Research &amp; Electrical Engineering
            </div>
            <div className="text-sm text-muted-foreground">
              Pennsylvania State University · 2001 – 2003
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">
              BS, Electrical Engineering
            </div>
            <div className="text-sm text-muted-foreground">
              Mumbai University · 1997 – 2001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
