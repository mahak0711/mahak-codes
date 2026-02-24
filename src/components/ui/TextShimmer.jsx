export default function TextShimmer({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #ff6b00 0%, #ff8c33 25%, #ffb366 50%, #ff8c33 75%, #ff6b00 100%)',
      }}
    >
      {children}
    </span>
  );
}
