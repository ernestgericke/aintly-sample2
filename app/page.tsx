import { Terminal, Cpu, Zap, Shield, ArrowRight, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-[#e0e0e0] font-sans selection:bg-[#00f2ff] selection:text-[#000]">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-[#222]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00f2ff] flex items-center justify-center rounded-sm">
            <span className="text-[#000] font-black text-xl">A</span>
          </div>
          <span className="font-bold tracking-tighter text-xl text-white">AINTLY // SAMPLE_02</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-zinc-500 uppercase">
          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">Core</span>
          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">Nodes</span>
          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">Auth</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Hero Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-full text-[10px] font-mono tracking-tighter text-[#00f2ff]">
              <span className="animate-pulse">●</span> SYSTEM_STATUS: OPERATIONAL
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">
              INTELLIGENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7000ff]">
                INDUSTRIALIZED.
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Deploying autonomous agent clusters with cyber-speed. Aintly 2.0 provides the raw infrastructure for the next generation of digital labor.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-black px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#00f2ff] transition-all group">
                INITIATE PROTOCOL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button className="border border-zinc-700 px-8 py-4 font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all">
                <Github size={20} /> REPO_ACCESS
              </button>
            </div>
          </div>

          {/* Visual Element / "Terminal" */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-[#1a1a1e] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#252529] border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-4 font-mono text-xs text-zinc-500 uppercase tracking-widest">aintly_core.sh</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-[#00f2ff]/80">
                <p><span className="text-zinc-600">$</span> brew install aintly-core</p>
                <p className="text-zinc-500">>> resolving dependencies...</p>
                <p className="text-zinc-500">>> configuring neural bridge...</p>
                <p><span className="text-zinc-600">$</span> aintly up --cluster=02</p>
                <p className="text-white bg-[#00f2ff]/20 px-2 inline-block">DEPLOYMENT SUCCESSFUL [PID 9924]</p>
                <p className="text-zinc-400">ENDPOINT: sample2.aintly.com</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-4 bg-zinc-900/50">
                    <Cpu className="mb-2 text-[#7000ff]" />
                    <div className="text-xs text-zinc-500">LOAD</div>
                    <div className="text-lg font-bold text-white">4.2%</div>
                  </div>
                  <div className="border border-zinc-800 p-4 bg-zinc-900/50">
                    <Zap className="mb-2 text-[#00f2ff]" />
                    <div className="text-xs text-zinc-500">LATENCY</div>
                    <div className="text-lg font-bold text-white">12ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <p>© 2026 AINTLY CORPORATE ENTITY</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>[PRIVACY_POLICY]</span>
            <span>[TERMS_OF_SERVICE]</span>
            <span className="text-[#00f2ff]">NO_TRACKING_ENABLED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
