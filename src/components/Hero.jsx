import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {/* Background gradient + noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.25),transparent_45%)]"></div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 isolate">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] items-center gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-900/70 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-slate-200">Available for freelance & research collaborations</span>
              </div>
              <h1 className="mt-6 text-5xl sm:text-6xl font-black tracking-tight text-white">
                Naveen — Design Researcher
              </h1>
              <p className="mt-4 text-lg text-slate-200/80 max-w-xl">
                Blending design thinking, systems research, and 3D exploration to craft playful, modern and human-centered experiences.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#work" className="px-5 py-3 rounded-2xl bg-slate-800 text-cyan-300 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)] hover:text-cyan-200 transition">See Projects</a>
                <a href="#contact" className="px-5 py-3 rounded-2xl bg-slate-900/70 text-slate-100 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">Get in touch</a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* subtle overlay so content clickable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-950/70" />
    </section>
  );
}
