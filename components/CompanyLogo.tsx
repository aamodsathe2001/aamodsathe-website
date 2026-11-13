/**
 * CompanyLogo — renders a 38×38 rounded logo box.
 * Uses official SVG paths from simple-icons for eBay, PayPal, Facebook,
 * Google, and Meta. Vanta uses a clean letter treatment (not in simple-icons).
 */
import { siEbay, siPaypal, siFacebook, siGoogle, siMeta } from "simple-icons";

const config: Record<string, { path: string; bg: string }> = {
  ebay:     { path: siEbay.path,     bg: "#E53238" },
  paypal:   { path: siPaypal.path,   bg: "#003087" },
  facebook: { path: siFacebook.path, bg: "#1877F2" },
  google:   { path: siGoogle.path,   bg: "#4285F4" },
  meta:     { path: siMeta.path,     bg: "#0467DF" },
};

interface CompanyLogoProps {
  company: "ebay" | "paypal" | "facebook" | "google" | "meta" | "vanta";
  size?: number;
  glow?: boolean;
}

export default function CompanyLogo({
  company,
  size = 38,
  glow = false,
}: CompanyLogoProps) {
  const iconSize = Math.round(size * 0.52);
  const cfg = config[company];

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: Math.round(size * 0.24),
    background: cfg ? cfg.bg : "#3B82F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: glow ? "0 0 0 3px rgba(59,130,246,0.3)" : undefined,
  };

  if (cfg) {
    return (
      <div style={containerStyle}>
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="white"
          aria-label={company}
        >
          <path d={cfg.path} />
        </svg>
      </div>
    );
  }

  // Vanta — use the official mascot logo
  return (
    <div style={{ ...containerStyle, background: "none", overflow: "hidden" }}>
      <img
        src="/vanta-logo.jpeg"
        alt="Vanta"
        style={{ width: size, height: size, objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
