export default function GlowText({ children, className = '' }) {
  return (
    <span className={`animate-glow-pulse ${className}`}>
      {children}
    </span>
  );
}
