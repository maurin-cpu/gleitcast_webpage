import type { Config } from "tailwindcss";

/**
 * Tailwind config — DESIGN PRINCIPLE
 *
 * Use Tailwind defaults (slate, sky, white, red) directly in components.
 * Map MASTER §2.1:
 *   - ink-900/700/500   = slate-900/700/500   (Primary-CTA, Body-Text)
 *   - sky-700/600/500/100/50 = default Tailwind sky  (Eyebrows, Links, Akzent)
 *   - paper             = white
 *   - bg                = slate-50
 *   - border            = slate-200
 *   - destructive       = red-600
 *
 * Sun-Amber (#D97706 / #F59E0B) ist KEIN Marken-Akzent — nur fürs 5-Tier-
 * Rating-System reserviert (siehe MASTER §2.2 / §6.1). Orange außerhalb
 * Rating verwässert die Tier-Bedeutung.
 *
 * The ONLY custom tokens here are the 5 fly-tier colors (MASTER §2.2).
 * They are direct hex strings — NO CSS variables, NO `<alpha-value>` placeholders.
 * This keeps the Tailwind output stable on Windows + OneDrive where dev-server
 * HMR cannot reliably re-read this file. See memory: feedback_tailwind_tokens.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 5-Farben-Ampel (MASTER §2.2). MUST stay locked to these hex values.
        flyViolet: "#8B5CF6",
        flyGreen: "#16A34A",
        flyBronze: "#92400E",
        flyAmber: "#B45309",
        flyRed: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
        content: "1120px",
        reading: "720px",
      },
      borderRadius: {
        // MASTER §6.2 — cards 12px
        card: "12px",
      },
      animation: {
        "fade-in": "fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up": "fade-in-up 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
