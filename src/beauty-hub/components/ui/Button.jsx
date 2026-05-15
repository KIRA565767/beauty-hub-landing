import { ArrowRight } from "lucide-react";
import { useHapticFeedback } from "../../hooks/useHapticFeedback";

const variants = {
  primary: "bg-orange text-dusty hover:bg-copper active:bg-copper focus-visible:outline-orange",
  secondary:
    "border border-dusty/30 text-dusty hover:border-copper hover:text-copper active:border-orange focus-visible:outline-copper",
  dark: "bg-graphite text-dusty hover:bg-concrete active:bg-concrete focus-visible:outline-copper",
};

export function Button({ href, children, variant = "primary", className = "", haptic = false, onClick, ...props }) {
  const pulse = useHapticFeedback(10);
  const hasTextArrow = typeof children === "string" && children.trim().endsWith("→");

  function handleClick(event) {
    if (haptic) pulse();
    onClick?.(event);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {hasTextArrow ? null : <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />}
    </a>
  );
}
