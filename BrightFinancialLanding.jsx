export default function BrightFinancialLanding() {
  const whatsappLink = "https://wa.me/9647742777047";
  const instagramLink = "https://www.instagram.com/bright.financial";

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold tracking-[0.2em]">
          BRIGHT FINANCIAL CO.
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-2xl">
          Modern investment solutions and professional financial services.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-emerald-400 text-black font-semibold"
          >
            WhatsApp
          </a>

          <a
            href={instagramLink}
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
