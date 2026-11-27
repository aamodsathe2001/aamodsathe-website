import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aamod Sathe — open to collaboration, speaking engagements, and job opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
