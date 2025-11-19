import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      {/* subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '18px 18px'}} />

      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />

      <footer className="relative py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Naveen — Design Researcher • Crafted with care</p>
      </footer>
    </div>
  )
}

export default App