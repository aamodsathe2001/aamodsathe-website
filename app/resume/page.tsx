import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Full career history: Google, Meta, PayPal, eBay, Facebook, Vanta. 20+ years in data & AI leadership.",
};

const roles = [
  {
    company: "Vanta",
    color: "#3B82F6",
    period: "May 2026 – Present",
    title: "Head of Data & Analytics",
    current: true,
    bullets: [
      "Built MCP-based self-service layer that encodes business rules and data contracts at the infrastructure level — 80%+ of company data questions answered without analyst involvement at near-100% accuracy",
      "Built LLM-based transcript parsing pipeline end-to-end: annotation framework, ground truth baselines, root cause diagnosis of a chunking failure the benchmarks had missed, fine-tuned production model at 88–92% accuracy at a fraction of prior API cost",
      "Owns the weekly company metrics update and forum for the CEO and senior leadership team: defines what numbers appear, shapes the narrative, explains what is driving revenue and usage trends",
      "Rebuilt company KPI framework from scratch — each metric explicitly linked to a decision the business can make, with driver trees connecting top-line trends to underlying levers",
      "Revamped the full data architecture on dbt and BigQuery in six months; designed the semantic metrics layer that makes the same number appear regardless of who queries it or what tool they use",
      "40% headcount growth in four months; highest manager favorability gain at this level company-wide",
    ],
    skills: ["MCP", "LLM Evaluation", "dbt", "BigQuery", "GCP", "Semantic Metrics Layer", "Executive Metrics Forum"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    period: "Jan 2025 – Mar 2026",
    title: "Director of Data Science, Enterprise AI Platform",
    bullets: [
      "Built agentic analytical infrastructure for Meta's internal AI developer platform (70,000-engineer org) — natural-language-to-query systems and automated anomaly detection agents",
      "Reduced data investigation cycle time 40%; drove AI-driven analytical output from 0 to 70% in 18 months",
      "Defined evaluation frameworks, benchmark datasets, and guardrail metrics for AI model assessment — establishing what counts as a genuine performance improvement versus a measurement artifact",
      "Set data quality and reproducibility standards across a large distributed technical organization",
    ],
    skills: ["Agentic Tooling", "NL-to-SQL", "LLM Evaluation", "Anomaly Detection", "Guardrail Metrics"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    period: "Oct 2021 – Dec 2024",
    title: "Director of Data Science, Reality Labs",
    bullets: [
      "Led 60+ person global DS organization across US and Singapore; set joint DS + DE strategy across 8 product lines (Quest, Portal, Ray-Ban Smart Glasses, Horizon Worlds)",
      "Ran the executive business review and metrics forum for all of Reality Labs — owned the structure, content, and cadence; built the KPI framework across a multi-product, multi-business-model portfolio",
      "Drove the deprecation of Portal (Meta's consumer video calling hardware) through analytical evidence: showed Portal was generating no meaningful north star metrics movement while carrying significant cost. Recommendation was directionally unpopular but held up — Portal was discontinued",
      "Built the experimentation framework for ranking and recommendation systems: objective function design, guardrail metrics, counterfactual analysis, and governance standards that prevented metric drift",
    ],
    skills: ["Executive Business Review", "KPI Frameworks", "60+ Global Team", "Experimentation Rigor", "Product Deprecation"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    period: "Apr 2020 – Oct 2021",
    title: "Director of Data Science, Ads",
    bullets: [
      "Scaled DS team from 12 to 50+ in one year while maintaining production quality standards — hiring process, onboarding infrastructure, and quality gates",
      "Built A/B testing, switchback experiment, and causal inference infrastructure connecting model changes to measurable P&L outcomes",
      "Delivered $1B+ in incremental annualized revenue through data-driven product improvements",
      "Partnered with Finance and senior leadership on the analytical frameworks that informed resource allocation and strategic planning",
    ],
    skills: ["Revenue Analytics", "Causal Inference", "A/B Testing at Scale", "Team Scaling", "$1B+ Impact"],
  },
  {
    company: "Google",
    color: "#4285F4",
    period: "Jan 2016 – Apr 2020",
    title: "Group Analytics Manager, Consumer Data Science",
    subroles: [
      {
        title: "Group Lead — Ads Relevance, Ranking & Operations Analytics",
        period: "Nov 2018 – Apr 2020",
        note: "Promoted to L7.5",
      },
      {
        title: "Lead Analytics Manager — Google Ads Marketing Analytics",
        period: "Jan 2016 – Nov 2018",
      },
    ],
    bullets: [
      "Led analytics operations for Google Ads relevance and ranking ML systems — measurement infrastructure, evaluation frameworks, 70+ analytics staff globally",
      "Ran executive metrics forum for Google Ads Marketing: defined KPIs and driver metrics, delivered weekly analytical narrative on growth, plan variance, and next actions",
      "Built self-serve analytical tooling on large behavioral datasets; established reproducibility and data quality standards across a distributed organization",
    ],
    skills: ["Executive Metrics Forum", "ML System Evaluation", "Global Team Ops", "Self-Serve Analytics"],
  },
  {
    company: "Facebook",
    color: "#1877F2",
    period: "Jul 2014 – Dec 2015",
    title: "Head of SMB Analytics",
    bullets: [
      "Founded the analytics function from scratch for Facebook's B2B small business advertising platform — defined operating model, built data infrastructure, established GTM analytics capability",
      "Delivered pipeline tracking, lead scoring, sales productivity metrics, and operational reporting with no prior infrastructure and no playbook",
    ],
    skills: ["From-Scratch Build", "GTM Analytics", "B2B SaaS Metrics", "Early-Stage Product Analytics"],
  },
  {
    company: "PayPal",
    color: "#009cde",
    period: "May 2009 – Jul 2014",
    title: "Director of Product Analytics",
    bullets: [
      "Built stochastic forecasting models for capacity and growth planning and financial data pipelines connecting product performance to unit economics and margin",
      "Developed behavioral cohort models for operational decision-support; analytical frameworks adopted company-wide; presented directly to the CEO",
    ],
    skills: ["Stochastic Forecasting", "Unit Economics", "Financial Analytics", "CEO-Level Communication"],
  },
  {
    company: "eBay",
    color: "#E53238",
    period: "2005 – 2009",
    title: "Manager / Sr. Manager, Analytics",
    bullets: [
      "Built production ML systems at internet scale — trust and safety forecasting, fraud detection, community health signals, and capacity modeling",
      "Each system designed to turn model output into an operational decision with direct business consequences",
    ],
    skills: ["Trust & Safety", "Fraud Detection", "Production ML", "Operational Analytics"],
  },
];

const skills = {
  "AI & ML": "LLM pipelines, MCP, agentic tooling, model evaluation, fine-tuning, anomaly detection, NL-to-SQL, Claude Code",
  "Analytics": "Executive metrics forums, KPI framework design, A/B testing, causal inference, stochastic forecasting, cohort analysis",
  "Data Infrastructure": "dbt, BigQuery, Snowflake, GCP, Airflow, Spark, Presto, semantic metrics layer design, dimensional modeling",
  "Leadership": "DS + DE joint function leadership, global team management (60+), from-scratch function build, player-coach",
  "Technical": "Python, SQL, Pandas, Scikit-Learn, dbt, BigQuery, GCP, Snowflake, Airflow, MCP, Spark",
  "Domains": "B2B SaaS, enterprise security, advertising platforms, payments, developer platforms, consumer hardware",
};

export default function ResumePage() {
  return (
    <div className="container-page py-16">
      {/* Header */}
      <div className="section-header mb-10">
        <span className="section-label">Resume</span>
        <div className="section-divider" />
      </div>

      <div className="flex items-start justify-between gap-6 mb-14 flex-wrap">
        <div>
          <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-[-0.02em] mb-1">
            Aamod Sathe
          </h1>
          <p className="text-sm text-muted-foreground">
            Head of Data &amp; Analytics · Sunnyvale, CA ·{" "}
            <a
              href="mailto:aamod.sathe@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              aamod.sathe@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://linkedin.com/in/aamodsathe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              linkedin.com/in/aamodsathe
            </a>
          </p>
        </div>
        <Link href="/contact" className="btn-secondary text-xs flex-shrink-0">
          Get in touch →
        </Link>
      </div>

      {/* Summary */}
      <div className="mb-14 max-w-[640px]">
        <div className="section-header mb-4">
          <span className="section-label">Summary</span>
          <div className="section-divider" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Data and analytics leader with 20+ years building analytical functions, AI-native systems,
          and data infrastructure at scale. Consistent operating philosophy across every role:{" "}
          <strong className="text-foreground font-medium">
            automate before you hire, treat internal operations as a product, build systems that scale ahead of growth.
          </strong>{" "}
          Has run executive metrics forums and business reviews at Google, Meta, and Vanta; led DS
          organizations of 60+ globally at Meta; and driven major business decisions — including the
          deprecation of a large Meta product line — through the quality of analytical evidence.
          Currently building the AI-native analytics function at Vanta while independently shipping
          AI products using Claude Code. Player-coach by orientation.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-14">
        <div className="section-header mb-8">
          <span className="section-label">Experience</span>
          <div className="section-divider" />
        </div>

        <div className="flex flex-col gap-0">
          {roles.map((role, i) => (
            <div
              key={i}
              className="relative pl-5 pb-10 last:pb-0"
              style={{ borderLeft: `2px solid ${role.color}22` }}
            >
              {/* Colored dot on the left border */}
              <div
                className="absolute -left-[5px] top-1 w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: role.color }}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <span
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: role.color }}
                >
                  {role.company}
                </span>
                <span className="text-xs text-muted-foreground">
                  {role.period}
                </span>
                {role.current && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                    style={{
                      color: role.color,
                      borderColor: `${role.color}4d`,
                      backgroundColor: `${role.color}1a`,
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold tracking-tight mb-3">
                {role.title}
              </h3>

              {role.subroles && (
                <div className="flex flex-col gap-1 mb-3 pl-3 border-l border-border">
                  {role.subroles.map((sr, j) => (
                    <div key={j} className="text-xs text-muted-foreground">
                      <span className="text-foreground font-medium">{sr.title}</span>
                      {" · "}
                      {sr.period}
                      {sr.note && (
                        <span className="text-primary ml-1">· {sr.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <ul className="flex flex-col gap-2 mb-4">
                {role.bullets.map((b, j) => (
                  <li key={j} className="rc-bullet text-[13px]">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {role.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <div className="section-header mb-6">
          <span className="section-label">Skills</span>
          <div className="section-divider" />
        </div>
        <div className="flex flex-col gap-3">
          {Object.entries(skills).map(([category, detail]) => (
            <div key={category} className="flex gap-4 text-sm">
              <span className="font-medium text-foreground w-36 flex-shrink-0">
                {category}
              </span>
              <span className="text-muted-foreground leading-relaxed">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="section-header mb-6">
          <span className="section-label">Education</span>
          <div className="section-divider" />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="text-sm font-semibold">
              MS, Operations Research &amp; Electrical Engineering
            </div>
            <div className="text-sm text-muted-foreground">
              Pennsylvania State University · 2001 – 2003
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">BS, Electrical Engineering</div>
            <div className="text-sm text-muted-foreground">
              Mumbai University · 1997 – 2001
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
