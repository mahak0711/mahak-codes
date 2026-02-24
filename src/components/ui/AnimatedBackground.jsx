export default function AnimatedBackground({ variant = 'default' }) {
  const gradients = {
    default: `
      radial-gradient(ellipse 80% 50% at 20% 40%, rgba(255,107,0,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,69,0,0.1) 0%, transparent 60%),
      radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255,140,0,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 50% 70% at 30% 80%, rgba(200,80,0,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 40% 30% at 70% 30%, rgba(255,120,0,0.07) 0%, transparent 50%)
    `,
    cosmic: `
      radial-gradient(ellipse 80% 60% at 10% 30%, rgba(255,107,0,0.15) 0%, transparent 50%),
      radial-gradient(ellipse 60% 50% at 90% 70%, rgba(255,50,0,0.12) 0%, transparent 50%),
      radial-gradient(ellipse 90% 40% at 50% 10%, rgba(255,160,0,0.1) 0%, transparent 50%),
      radial-gradient(ellipse 50% 80% at 20% 90%, rgba(200,60,0,0.08) 0%, transparent 50%),
      radial-gradient(ellipse 70% 50% at 80% 20%, rgba(255,100,50,0.1) 0%, transparent 50%),
      radial-gradient(ellipse 40% 40% at 60% 50%, rgba(255,80,0,0.06) 0%, transparent 60%)
    `,
  };

  return (
    <div
      className="absolute inset-0 -z-10 animate-aurora opacity-80"
      style={{
        backgroundImage: gradients[variant] || gradients.default,
        backgroundSize: '200% 200%',
      }}
    />
  );
}
