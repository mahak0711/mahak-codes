export default function GlowingBorder({ children, className = '' }) {
  return (
    <div className={`glowing-border rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
