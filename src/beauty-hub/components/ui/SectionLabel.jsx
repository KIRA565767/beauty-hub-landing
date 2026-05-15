export function SectionLabel({ children, tone = "dark" }) {
  const color = tone === "light" ? "text-concrete" : "text-copper";

  return (
    <p className={`flex items-center gap-3 font-mono text-xs uppercase ${color}`}>
      <span className="accent-marker text-orange" aria-hidden="true">
        /
      </span>
      <span>{children}</span>
    </p>
  );
}
