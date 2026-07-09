export default function SovSystemsLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="text-8xl mb-8">⚒️</div>
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6">
          Sovereign Systems
        </h1>
        <p className="text-3xl text-gray-400 max-w-2xl mx-auto">
          I build self-owned, auditable technology for founders and operators who refuse dependency.
        </p>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-900 text-center">
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-xl">
          <a href="/auditforge" className="hover:text-yellow-400 transition">AuditForge</a>
          <a href="/forgeworks" className="hover:text-yellow-400 transition">ForgeWorks</a>
          <a href="/ai-skills-stack" className="hover:text-yellow-400 transition">AI Skills Stack</a>
        </nav>
      </div>

      {/* How I Can Help You */}
      <div className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-900">
        <h2 className="text-5xl font-bold mb-16 text-center">How I Can Help You</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">AuditForge</h3>
            <p className="text-gray-400 text-lg">Automated compliance, security, and infrastructure audits.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">ForgeWorks</h3>
            <p className="text-gray-400 text-lg">Revenue engines and sovereign implementation systems.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Claude Code Skills Stack</h3>
            <p className="text-gray-400 text-lg">25+ production-ready skills that run real businesses.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-zinc-950 py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-3xl font-medium mb-8">
            Get the 25+ Claude Skills That Run My Business
          </p>
          <a 
            href="/ai-skills-stack"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-2xl px-16 py-6 rounded-full transition"
          >
            Get Instant Access
          </a>
        </div>
      </div>

      <div className="text-center py-16 text-gray-500">
        SovSystems LLC • Ohio • admin@sovsystems.net • 614-526-8634
      </div>
    </div>
  );
}
