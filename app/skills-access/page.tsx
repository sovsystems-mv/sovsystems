import Stripe from "stripe";
    import SkillsList from "./SkillsList";
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    
    export default async function SkillsAccessPage({
      searchParams,
    }: {
      searchParams: Promise<{ session_id?: string }>;
    }) {
      const { session_id } = await searchParams;
    
      let paid = false;
      if (session_id) {
        try {
          const session = await stripe.checkout.sessions.retrieve(session_id);
          paid = session.payment_status === "paid";
        } catch {
          paid = false;
        }
      }
    
      if (!paid) {
        return (
          <div className="min-h-screen bg-[#0A1328] text-white flex items-center justify-center px-6">
            <div className="max-w-md text-center">
              <div className="text-sm text-[#D4AF37] tracking-widest mb-2">CLAUDE CODE SKILLS STACK</div>
              <h1 className="text-4xl font-semibold tracking-tight mb-4">Access restricted</h1>
              <p className="text-lg text-white/70 mb-8">
                This page is for verified customers. If you just purchased and landed here,
                use the link from your confirmation, or email us and we&apos;ll sort it out.
              </p>
              <a
                href="mailto:admin@sovsystems.net"
                className="inline-block px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E8C766] text-[#0A1328] font-medium rounded-xl transition"
              >
                Email admin@sovsystems.net
              </a>
            </div>
          </div>
        );
      }
    
      return <SkillsList />;
    }
