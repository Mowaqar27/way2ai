import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/workflows";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-green-400 fill-green-400" />
            <span className="text-sm text-green-400 font-medium">Trusted by 3,500+ customers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from real customers who've
            transformed their workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-800/30 border border-slate-700/30 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
            >
              <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.role} at {t.company}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
