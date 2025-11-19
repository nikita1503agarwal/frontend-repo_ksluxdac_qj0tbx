export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl p-8 bg-slate-900/60 border border-white/10 shadow-[12px_12px_24px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">
          <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-slate-300/85">
            I explore the edges of design and research — translating complex systems into playful, human moments. My practice blends field studies, prototyping and computational design.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-200">
            <li className="rounded-2xl p-4 bg-slate-800/70 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">Ethnography & UX Research</li>
            <li className="rounded-2xl p-4 bg-slate-800/70 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">Systems & Service Design</li>
            <li className="rounded-2xl p-4 bg-slate-800/70 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">3D & Motion Prototyping</li>
            <li className="rounded-2xl p-4 bg-slate-800/70 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">Workshops & Facilitation</li>
          </ul>
        </div>
        <div className="rounded-3xl p-8 bg-slate-900/60 border border-white/10 shadow-[12px_12px_24px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">
          <h3 className="text-xl font-semibold text-white">Approach</h3>
          <p className="mt-3 text-slate-300/85">
            Start with people, map the system, prototype the edges. I use mixed-method research to uncover needs and pair it with visual thinking and code to make ideas tangible fast.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-slate-200">
            <div className="rounded-2xl p-4 bg-slate-800/70 border border-white/10">
              <p className="text-3xl font-black text-cyan-300">8+</p>
              <p className="text-xs">Years</p>
            </div>
            <div className="rounded-2xl p-4 bg-slate-800/70 border border-white/10">
              <p className="text-3xl font-black text-cyan-300">30+</p>
              <p className="text-xs">Projects</p>
            </div>
            <div className="rounded-2xl p-4 bg-slate-800/70 border border-white/10">
              <p className="text-3xl font-black text-cyan-300">12</p>
              <p className="text-xs">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
