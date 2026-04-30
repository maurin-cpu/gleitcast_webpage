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
