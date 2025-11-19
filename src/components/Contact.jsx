export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl p-10 bg-slate-900/70 border border-white/10 shadow-[12px_12px_24px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">
          <h2 className="text-3xl font-bold text-white tracking-tight">Let’s collaborate</h2>
          <p className="mt-3 text-slate-300/85">Open to research partnerships, product design and playful experiments.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:hello@naveen.design" className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-800 text-cyan-300 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.04)]">hello@naveen.design</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900/70 text-slate-100 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">LinkedIn</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900/70 text-slate-100 border border-white/10 shadow-[8px_8px_16px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.04)]">X / Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
