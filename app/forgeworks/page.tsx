export default function ForgeWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center border-b border-gray-900">
        <div className="inline-block bg-yellow-500 text-black text-sm font-medium px-6 py-2 rounded-full mb-8">
          LEAD GEN REVENUE ENGINES
        </div>
        <h1 className="text-7xl font-black tracking-tighter mb-8">
          We don&apos;t build websites.<br />
          We build <span className="text-yellow-400">REVENUE ENGINES</span>.
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          ForgeWorks creates automated lead generation systems that actually turn strangers into paying customers.
        </p>
      </div>

      {/* Solutions */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">What We Build For You</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">AI-Powered Lead Generation Sites</h3>
            <p className="text-gray-400">High-converting landing pages + automated nurturing systems that work 24/7.</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">DomainForge Lead Engine</h3>
            <p className="text-gray-400">Scan expiring domains, identify high-intent buyers, and turn them into revenue.</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">Audit-to-Implementation</h3>
            <p className="text-gray-400">Turn security/compliance gaps into fully built, sovereign revenue systems.</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">Sovereign Sales Infrastructure</h3>
            <p className="text-gray-400">Self-hosted funnels, CRM automations, and AI follow-up systems you actually own.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-zinc-950 py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-3xl mb-8">Ready to turn traffic into revenue?</p>
          <a 
            href="mailto:admin@sovsystems.net"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-2xl px-16 py-6 rounded-full transition"
          >
            Let&apos;s Build Your Revenue Engine
          </a>
        </div>
      </div>
    </div>
  );
}
