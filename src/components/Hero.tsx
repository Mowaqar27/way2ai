import { ArrowRight, Play, Sparkles, Star, Workflow } from "lucide-react";
import { stats } from "../data/workflows";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-slate-300">Over 12,000+ workflows sold</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              n8n Workflows
            </span>
            <br />
            Ready to Deploy
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Save hundreds of hours with our battle-tested n8n automation templates.
            From lead generation to AI chatbots — just import, configure, and go.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#workflows"
              className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              Browse Workflows
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-800 transition-all">
              <Play className="w-5 h-5 text-orange-400" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex -space-x-2">
              {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-yellow-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["JD", "AK", "MR", "SC", "LP"][i]}
                  </div>
                )
              )}
            </div>
            <div className="flex items-center gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-slate-400 ml-1">
              from 3,500+ customers
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-5">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating workflow nodes */}
        <div className="hidden lg:block">
          <div className="absolute top-40 left-8 bg-slate-800/60 border border-slate-700/40 rounded-xl p-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <Workflow className="w-6 h-6 text-orange-400" />
          </div>
          <div className="absolute top-60 right-12 bg-slate-800/60 border border-slate-700/40 rounded-xl p-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
