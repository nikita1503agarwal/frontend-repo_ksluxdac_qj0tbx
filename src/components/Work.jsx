import { ArrowUpRight, Shapes, Brain, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Playful Systems",
    tag: "Design Research",
    desc: "Investigating emergent behavior through interactive prototypes and participatory studies.",
    icon: Brain,
  },
  {
    title: "Neo-UI Kit",
    tag: "3D + Neomorphism",
    desc: "Soft, tactile interface components blending depth, light and motion.",
    icon: Shapes,
  },
  {
    title: "Motion Grammar",
    tag: "Interaction",
    desc: "A tiny language for prototyping motion and feedback loops.",
    icon: Sparkles,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300/80 mt-2">A snapshot of explorations across research, product and 3D.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
            View all <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-3xl p-6 bg-slate-900/60 border border-white/10 shadow-[12px_12px_24px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)] hover:shadow-[16px_16px_32px_rgba(0,0,0,0.6),-10px_-10px_20px_rgba(255,255,255,0.05)] transition">
              <div className="size-12 rounded-2xl bg-slate-800 text-cyan-300 inline-flex items-center justify-center mb-5 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">
                <p.icon />
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-xs text-cyan-300/80 mb-2">{p.tag}</p>
              <p className="text-slate-300/80">{p.desc}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-slate-100 hover:text-white">
                Read case <ArrowUpRight className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
