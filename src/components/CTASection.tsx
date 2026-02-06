import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-purple-500/20 border border-orange-500/20 rounded-3xl p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-500/10 blur-3xl rounded-full" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300 font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
              Join 3,500+ businesses already saving hundreds of hours every month
              with our premium n8n workflow templates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#bundles"
                className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-2xl shadow-orange-500/30"
              >
                View All Bundles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#workflows"
                className="text-slate-300 hover:text-white text-sm font-medium underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400 transition-all"
              >
                Or browse individual workflows →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
