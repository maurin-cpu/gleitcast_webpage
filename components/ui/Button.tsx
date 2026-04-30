import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";

/**
 * Button — MASTER §6.1
 * Genau 3 Varianten: primary | secondary | ghost.
 * Min-Height 48px (Outdoor / Handschuhe), Border-Radius 8px,
 * keine Box-Shadow auf statischen States, Focus 3px.
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-[transform,background-color,border-color,color] duration-150 ease-out focus-ring disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-900/90 active:bg-slate-900",
  secondary:
    "bg-white text-sky-700 border-2 border-sky-700 hover:bg-sky-50 active:bg-sky-100",
  ghost:
    "bg-transparent text-sky-700 hover:bg-sky-50 active:bg-sky-100",
};

const sizes: Record<Size, string> = {
  // Touch-Targets ≥44pt überall (MASTER §5.3)
  sm: "h-11 px-5 text-base",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  ),
);
Button.displayName = "Button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => (
    <a
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  ),
);
LinkButton.displayName = "LinkButton";
