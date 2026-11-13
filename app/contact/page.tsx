"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata export doesn't work in client components.
// Move this to a separate layout if SEO for /contact is needed.

const subjects = [
  "General",
  "Collaboration",
  "Speaking",
  "Job Opportunity",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container-page py-16">
      <div className="section-header mb-10">
        <span className="section-label">Contact</span>
        <div className="section-divider" />
      </div>

      <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-[-0.02em] mb-4 max-w-[480px]">
        Get in touch.
      </h1>
      <p className="text-sm text-muted-foreground mb-10 max-w-[420px] leading-relaxed">
        Open to conversations about data leadership, AI systems, speaking
        engagements, and interesting collaborations.
      </p>

      {status === "sent" ? (
        <div className="bg-card border border-border rounded-lg p-8 max-w-[480px]">
          <div className="text-sm font-semibold mb-1">Message sent.</div>
          <div className="text-sm text-muted-foreground">
            I&apos;ll get back to you at {form.email}.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-[480px] space-y-5">
          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
              Subject
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or email directly at{" "}
              <a
                href="mailto:aamod.sathe@gmail.com"
                className="underline"
              >
                aamod.sathe@gmail.com
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
