"use client";

import { useState } from "react";

const roles = [
  {
    company: "Vanta",
    color: "#3B82F6",
    dates: "May 2026 – Present",
    title: "Head of Data & Analytics",
    current: true,
    bullets: [
      "Built MCP-based self-service layer; 80%+ of company data questions answered without analyst involvement at near-100% accuracy",
      "Built LLM transcript parsing pipeline end-to-end — annotation framework, ground truth baselines, fine-tuned model at 88–92% accuracy at a fraction of prior API cost",
      "Owns CEO's weekly metrics forum; rebuilt company KPI framework and full data architecture on dbt + BigQuery in six months",
      "40% headcount growth in four months; highest manager favorability gain at this level company-wide",
    ],
    tags: ["MCP", "LLM Evaluation", "dbt", "BigQuery", "Semantic Metrics", "CEO Partnership"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    dates: "Jan 2025 – Mar 2026",
    title: "Director of Data Science, Enterprise AI Platform",
    bullets: [
      "Built agentic analytical infrastructure for Meta's internal AI developer platform serving a 70,000-engineer organization",
      "Natural-language-to-query systems and automated anomaly detection; reduced data investigation cycle time 40%",
      "Drove AI-driven analytical output from 0 to 70% in 18 months; defined evaluation frameworks and guardrail metrics for AI model assessment",
    ],
    tags: ["Agentic Tooling", "NL-to-SQL", "LLM Evaluation", "Anomaly Detection"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    dates: "Oct 2021 – Dec 2024",
    title: "Director of Data Science, Reality Labs",
    bullets: [
      "Led 60+ person global DS organization across US and Singapore; set joint DS + DE strategy across 8 product lines (Quest, Portal, Ray-Ban, Horizon)",
      "Drove the deprecation of Portal (Meta's consumer hardware) through analytical evidence in the executive business review — showed no meaningful north star movement while carrying significant cost",
      "Ran executive business review and metrics forum for all of Reality Labs; built the KPI framework across a multi-product, multi-business-model portfolio",
    ],
    tags: ["Executive Business Review", "KPI Frameworks", "60+ Global Team", "Experimentation"],
  },
  {
    company: "Meta",
    color: "#0866FF",
    dates: "Apr 2020 – Oct 2021",
    title: "Director of Data Science, Ads",
    bullets: [
      "Scaled DS team from 12 to 50+ in one year while maintaining production quality standards — hiring process, onboarding infrastructure, and quality gates",
      "Built A/B testing, switchback experiment, and causal inference infrastructure connecting model changes to measurable P&L outcomes",
      "Delivered $1B+ in incremental annualized revenue through data-driven product improvements",
    ],
    tags: ["Revenue Analytics", "Causal Inference", "A/B Testing at Scale", "Team Scaling"],
  },
  {
    company: "Google",
    color: "#4285F4",
    dates: "Jan 2016 – Apr 2020",
    title: "Group Analytics Manager, Consumer Data Science",
    bullets: [
      "Led analytics operations for Google Ads relevance and ranking ML systems — measurement infrastructure, evaluation frameworks, 70+ analytics staff globally. Promoted to L7.5",
      "Ran executive metrics forum for Google Ads Marketing: defined KPIs and driver metrics, delivered weekly analytical narrative on growth and plan variance",
      "Built self-serve analytical tooling on large behavioral datasets; established reproducibility and data quality standards",
    ],
    tags: ["Executive Metrics Forum", "ML Evaluation", "70+ Staff", "Self-Serve Analytics"],
  },
  {
    company: "Facebook",
    color: "#1877F2",
    dates: "Jul 2014 – Dec 2015",
    title: "Head of SMB Analytics",
    bullets: [
      "Founded the analytics function from scratch for Facebook's B2B small business advertising platform — defined operating model, built data infrastructure, established GTM analytics capability",
      "Built pipeline tracking, lead scoring, and sales productivity metrics with no prior infrastructure and no playbook",
    ],
    tags: ["From-Scratch Build", "GTM Analytics", "B2B SaaS Metrics"],
  },
  {
    company: "PayPal",
    color: "#009cde",
    dates: "May 2009 – Jul 2014",
    title: "Director of Product Analytics",
    bullets: [
      "Built stochastic forecasting models for capacity and growth planning and financial data pipelines connecting product performance to unit economics and margin",
      "Developed behavioral cohort models for operational decision-support; analytical frameworks adopted company-wide and presented directly to the CEO",
    ],
    tags: ["Stochastic Forecasting", "Unit Economics", "Financial Analytics", "CEO-Level Communication"],
  },
  {
    company: "eBay",
    color: "#E53238",
    dates: "2005 – 2009",
    title: "Manager / Sr. Manager, Analytics",
    bullets: [
      "Built production ML systems at internet scale — trust and safety forecasting, fraud detection, community health signals, and capacity modeling",
      "Each system designed to turn model output into an operational decision with direct business consequences",
    ],
    tags: ["Trust & Safety", "Fraud Detection", "Production ML", "Operational Analytics"],
  },
];

export default function ExperienceSlider() {
  const [current, setCurrent] = useState(0);
  const total = roles.length;

  const goTo = (index: number) =>
    setCurrent(Math.max(0, Math.min(total - 1, index)));

  const role = roles[current];

  return (
    <div>
      {/* Card */}
      <div
        className="bg-card rounded-lg border border-border p-7 sm:p-8"
        style={{ borderLeftWidth: "3px", borderLeftColor: role.color }}
      >
        <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
          <span
            className="text-[11px] font-bold tracking-widest uppercase"
            style={{ color: role.color }}
          >
            {role.company}
          </span>
          <span className="text-xs text-muted-foreground">{role.dates}</span>
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

        <h3 className="text-xl font-semibold tracking-tight mb-4">
          {role.title}
        </h3>

        <ul className="flex flex-col gap-2 mb-5">
          {role.bullets.map((b, i) => (
            <li key={i} className="rc-bullet">
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5 px-0.5">
        <div className="flex gap-2">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous role"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-default"
          >
            ←
          </button>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
            aria-label="Next role"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-default"
          >
            →
          </button>
        </div>

        <div className="flex gap-1.5 items-center">
          {roles.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to role ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-200"
              style={{
                width: i === current ? "20px" : "6px",
                background: i === current ? "#3B82F6" : "#242424",
              }}
            />
          ))}
        </div>

        <span className="text-xs text-muted-foreground tabular-nums">
          {current + 1} / {total}
        </span>
      </div>
    </div>
  );
}
