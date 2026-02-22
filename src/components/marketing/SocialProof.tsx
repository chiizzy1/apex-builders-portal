export function SocialProof() {
  return (
    <section className="w-full max-w-6xl mb-32 relative z-10 px-4 md:px-8">
      <p className="text-center text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">
        Trusted by top builders worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="font-display font-black text-2xl tracking-tighter text-white">ACME Corp</div>
        <div className="font-display font-black text-2xl tracking-tighter text-white">BuildCorp.</div>
        <div className="font-display font-black text-2xl tracking-tighter text-white">Skyline Devs</div>
        <div className="font-display font-black text-2xl tracking-tighter text-white">Urban Architects</div>
        <div className="font-display font-black text-2xl tracking-tighter text-white hidden md:block">Construct X</div>
      </div>
    </section>
  );
}
