import { Check, Crown, Rocket, Star, Zap } from "lucide-react";
import { bundles } from "../data/workflows";
import { useCart } from "../context/CartContext";

const bundleIcons: Record<string, React.ReactNode> = {
  starter: <Zap className="w-8 h-8" />,
  growth: <Rocket className="w-8 h-8" />,
  enterprise: <Crown className="w-8 h-8" />,
};

export function BundlesSection() {
  const { addToCart, cartItems } = useCart();

  return (
    <section id="bundles" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Save up to 60%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Workflow Bundles
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get more value with our curated bundles. Perfect for teams and businesses
            looking to automate multiple processes at once.
          </p>
        </div>

        {/* Bundle Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle) => {
            const discount = Math.round(
              ((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100
            );
            
            const isInCart = cartItems.some(item => item.id === bundle.id);

            return (
              <div
                key={bundle.id}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  bundle.popular
                    ? "bg-gradient-to-b from-orange-500/10 to-slate-800/40 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/10 scale-105 z-10"
                    : "bg-slate-800/30 border border-slate-700/40"
                }`}
              >
                {bundle.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 text-sm font-bold">
                    🔥 Most Popular — Best Value
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                      bundle.popular
                        ? "bg-gradient-to-br from-orange-500 to-red-600 text-white"
                        : "bg-slate-700/50 text-slate-300"
                    }`}
                  >
                    {bundleIcons[bundle.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{bundle.title}</h3>
                  <p className="text-sm text-slate-400 mb-6">{bundle.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${bundle.price}</span>
                      <span className="text-lg text-slate-500 line-through">
                        ${bundle.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                        Save {discount}%
                      </span>
                      <span className="text-xs text-slate-500">
                        {bundle.workflowCount} workflows included
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {bundle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            bundle.popular ? "text-orange-400" : "text-green-400"
                          }`}
                        />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all ${
                      bundle.popular
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/30"
                        : "bg-slate-700/50 text-white hover:bg-slate-700 border border-slate-600/50"
                    }`}
                  >
                    Get {bundle.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
            <span className="text-lg">🛡️</span>
            30-day money-back guarantee • Instant delivery • Lifetime updates
          </p>
        </div>
      </div>
    </section>
  );
}
