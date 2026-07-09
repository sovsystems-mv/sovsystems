export default function AuditForge() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-full mb-8">
          AI COMPLIANCE &amp; SECURITY
        </div>
        <h1 className="text-7xl font-black tracking-tighter mb-8">
          AuditForge
        </h1>
        <p className="text-3xl text-gray-400 max-w-3xl mx-auto">
          Automated, auditable audits for security, compliance, and infrastructure.<br />
          Professional reports in minutes — not weeks.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-900">
        <h2 className="text-5xl font-bold text-center mb-16">What AuditForge Delivers</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">Fast Professional Audits</h3>
            <p className="text-gray-400">Config, IaC, security, and compliance scans turned into polished PDF/DOCX reports.</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">Self-Hosted &amp; Sovereign</h3>
            <p className="text-gray-400">Run it on your infrastructure. Full data ownership. No vendor lock-in.</p>
          </div>
          <div className="bg-zinc-950 p-10 rounded-3xl">
            <h3 className="text-3xl font-semibold mb-6">Veteran &amp; MSP Ready</h3>
            <p className="text-gray-400">Templates and workflows built by operators who understand real-world requirements.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-zinc-950 py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-3xl mb-8">Ready for your next audit?</p>
          <a 
            href="mailto:admin@sovsystems.net"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-semibold text-2xl px-16 py-6 rounded-full transition"
          >
            Start Free Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
