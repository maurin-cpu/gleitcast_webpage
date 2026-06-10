import type { SVGProps } from "react";
import {
  ArrowRight,
  MoveUpRight,
  Sparkles,
  MapPin,
  Mail,
  Shield,
  Wind,
  Languages,
  Check,
  ChevronDown,
  Star,
  ExternalLink,
  Layers,
  Eye,
  Bell,
} from "lucide-react";

export {
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
  Shield,
  Wind,
  Languages,
  Check,
  ChevronDown,
  Star,
  ExternalLink,
  Layers,
  Eye,
  Bell,
};

export const ArrowUpRight = MoveUpRight;

const iconBase = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Paraglider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M3 9c4-4 14-4 18 0-3-1-6 0-9 2-3-2-6-3-9-2z" />
      <path d="M9 11l3 6 3-6" />
      <circle cx="12" cy="20" r="1.5" />
    </svg>
  );
}

/**
 * Tier-Icons (MASTER §2.2 / §4.2) — fünf distinkte SVGs, currentColor.
 * Werden im Cast-Preview, in der App und in der Briefing-Mail identisch verwendet.
 */
const tierBase = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TierLegendaryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...tierBase} {...props}>
      <path
        d="M8 1.5l1.85 4.05 4.4.45-3.3 2.95.95 4.35L8 11.1 4.1 13.3l.95-4.35-3.3-2.95 4.4-.45z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TierFlyableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...tierBase} {...props}>
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5 8.2l2.2 2.2L11 6.5" />
    </svg>
  );
}

export function TierGlideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...tierBase} {...props}>
      <path d="M1.5 8a6.5 6.5 0 0113 0" fill="currentColor" stroke="none" />
      <path d="M1.5 8a6.5 6.5 0 0013 0" />
      <path d="M9.5 11.2L11.5 13.2M11.5 13.2H9.5M11.5 13.2V11.2" />
    </svg>
  );
}

export function TierConditionalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...tierBase} {...props}>
      <path d="M8 1.8L14.7 13H1.3z" />
      <path d="M8 6.5v3.2" />
      <circle cx="8" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TierUnflyableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...tierBase} {...props}>
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" />
    </svg>
  );
}
