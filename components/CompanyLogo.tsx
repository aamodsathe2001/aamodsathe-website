/**
 * CompanyLogo — renders a 38×38 rounded logo box.
 * Uses official SVG paths from simple-icons for eBay, PayPal, Facebook,
 * Google, and Meta. Vanta uses a clean letter treatment (not in simple-icons).
 */

// simple-icons paths are viewBox 24×24, white fill on brand bg
// eslint-disable-next-line @typescript-eslint/no-require-imports
const icons = require("simple-icons");

const config: Record<string, { path: string; bg: string }> = {
  ebay:     { path: icons.siEbay.path,     bg: "#E53238" },
  paypal:   { path: icons.siPaypal.path,   bg: "#003087" },
  facebook: { path: icons.siFacebook.path, bg: "#1877F2" },
  google:   { path: icons.siGoogle.path,   bg: "#4285F4" },
  meta:     { path: icons.siMeta.path,     bg: "#0467DF" },
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

  // Vanta — styled letter since it's not in simple-icons
  return (
    <div style={containerStyle}>
      <span
        style={{
          color: "white",
          fontSize: Math.round(size * 0.46),
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          fontFamily: "var(--font-geist-sans), sans-serif",
        }}
      >
        V
      </span>
    </div>
  );
}
