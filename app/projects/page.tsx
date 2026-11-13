import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four AI products built independently using Claude Code — Samani.ai, Kate, Coach Samani, and DataMod Ventures.",
};

const projects = [
  {
    name: "Samani.ai",
    tagline: "AI interview prep platform",
    desc: "Samani.ai helps candidates prepare for interviews with AI-powered practice sessions and feedback. Recruiters can configure custom interview criteria and evaluation rubrics. The platform uses role-specific scoring and provides structured feedback at scale.",
    status: "Active · 100s of users",
    href: "https://samani.ai",
    tags: ["AI/LLM", "Interview Prep", "Recruiter Tools", "Evaluation"],
  },
  {
    name: "Kate",
    tagline: "AI phone answering for frontline businesses",
    desc: "Kate is an AI phone answering service for businesses that can't always pick up — restaurants, service shops, clinics. It handles inbound calls, answers questions, books appointments, and routes inquiries. Built for businesses that live and die by the phone.",
    status: "Active · 100s of users",
    href: "#",
    tags: ["Voice AI", "Small Business", "Automation", "Appointment Booking"],
  },
  {
    name: "Coach Samani",
    tagline: "AI school exam prep tutor",
    desc: "Coach Samani helps school students prepare for exams with adaptive practice, personalized explanations, and progress tracking. The platform adjusts difficulty based on student performance and covers curriculum-aligned content.",
    status: "Active · 100s of users",
    href: "#",
    tags: ["EdTech", "AI Tutoring", "Adaptive Learning", "K-12"],
  },
  {
    name: "DataMod Ventures",
    tagline: "AI-native investment research",
    desc: "DataMod Ventures is an investment research and thesis development platform focused on India's AI ecosystem. It combines deal flow tracking, market research, and AI-powered investment analysis.",
    status: "Active",
    href: "https://datamodventures.vc",
    tags: ["Venture", "India AI", "Investment Research", "Market Analysis"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container-page py-16">
      <div className="section-header mb-10">
        <span className="section-label">Projects</span>
        <div className="section-divider" />
      </div>

      <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-[-0.02em] mb-4 max-w-[560px]">
        Four AI products. All built independently. All with real users.
      </h1>
      <p className="text-sm text-muted-foreground mb-12 max-w-[500px] leading-relaxed">
        Built using Claude Code on evenings and weekends. The same approach I
        use in my day job — build fast, iterate on real feedback, care about
        the product.
      </p>

      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-card border border-border rounded-lg p-7 block hover:border-primary hover:bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <span className="text-lg font-semibold">{p.name}</span>
                <span className="text-sm text-muted-foreground ml-3">
                  {p.tagline}
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary whitespace-nowrap flex-shrink-0">
                {p.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[560px]">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
