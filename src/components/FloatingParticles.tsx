export const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient orbs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 -left-32 w-48 h-48 bg-accent/[0.04] rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-24 right-1/4 w-56 h-56 bg-primary/[0.02] rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '6s' }} />
    </div>
  );
};
