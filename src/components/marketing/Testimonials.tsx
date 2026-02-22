import { Surface } from "@/components/ui/Surface";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Apex automated our client updates via email and SMS. We completely stopped getting those 'what's the status?' text messages on weekends.",
      author: "Marcus T.",
      title: "Owner, Precision Plumbing Co.",
      metric: "Saved 15hrs/week",
    },
    {
      quote:
        "The asset tracking feature alone paid for the entire system in the first month. I finally know exactly where all my expensive tools are.",
      author: "Sarah L.",
      title: "Operations Mgr, Volt Electrical",
      metric: "$4,200 recovered",
    },
    {
      quote:
        "Having three separate portals means everyone sees exactly what they need to see. Our clients think we spent $100k on custom software.",
      author: "David R.",
      title: "Founder, Apex Builders",
      metric: "2x Client Referrals",
    },
  ];

  return (
    <section className="w-full max-w-6xl mb-32 relative z-10 px-4 md:px-8 mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Built for operations. <br />
          <span className="text-gray-400">Proven in the field.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Surface key={i} className="flex flex-col p-8 relative">
            <div className="absolute -top-4 -right-4 bg-primary text-slate-900 font-bold text-sm px-3 py-1 rounded-full shadow-lg transform rotate-3">
              {t.metric}
            </div>

            <div className="text-primary text-4xl leading-none font-serif opacity-50 mb-4">"</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-1">{t.quote}</p>

            <div className="mt-auto">
              <div className="font-bold text-white">{t.author}</div>
              <div className="text-sm text-gray-500">{t.title}</div>
            </div>
          </Surface>
        ))}
      </div>
    </section>
  );
}
