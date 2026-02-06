import { Clock, Download, Headphones, RefreshCw, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Download className="w-6 h-6" />,
    title: "Instant Download",
    description: "Get your workflows immediately after purchase",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Production Ready",
    description: "Battle-tested and optimized for reliability",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Lifetime Updates",
    description: "Free updates and improvements forever",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Expert Support",
    description: "Get help from our automation specialists",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Money-Back Guarantee",
    description: "30-day refund policy, no questions asked",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick Setup",
    description: "Import and configure in under 10 minutes",
  },
];

export function FeaturesStrip() {
  return (
    <section className="py-16 bg-slate-900/50 border-y border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 text-orange-400 mb-3 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 border border-transparent transition-all">
                {f.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{f.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
