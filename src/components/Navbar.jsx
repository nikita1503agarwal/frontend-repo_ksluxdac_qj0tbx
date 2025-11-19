import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-2xl bg-slate-800 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.03)] flex items-center justify-center">
            <span className="text-cyan-400 font-black">N</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Naveen</p>
            <p className="text-xs text-cyan-300/70">Design Researcher</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <button onClick={() => scrollTo('work')} className="hover:text-white transition">Work</button>
          <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
          <a href="#" className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-300 hover:text-cyan-200 shadow-[8px_8px_16px_rgba(0,0,0,0.45),-8px_-8px_16px_rgba(255,255,255,0.03)] border border-white/10 transition">Download CV</a>
        </nav>

        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 text-slate-200">
          <button onClick={() => scrollTo('work')} className="block w-full text-left px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10">Work</button>
          <button onClick={() => scrollTo('about')} className="block w-full text-left px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10">About</button>
          <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10">Contact</button>
        </div>
      )}
    </header>
  );
}
