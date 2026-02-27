export default function TextShimmer({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #ff6b00 0%, #ff9544 20%, #ffcc99 50%, #ff9544 80%, #ff6b00 100%)',
        filter: 'drop-shadow(0 0 20px rgba(255,107,0,0.15))',
      }}
    >
      {children}
    </span>
  );
}
