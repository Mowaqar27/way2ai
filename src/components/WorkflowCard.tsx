import {
  Star,
  ShoppingCart,
  GitBranch,
  Users,
  Mail,
  MessageSquare,
  BarChart3,
  Bot,
  Share2,
  Database,
  CheckCircle2,
  Check
} from "lucide-react";
import type { Workflow } from "../data/workflows";
import { useCart } from "../context/CartContext";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Users className="w-6 h-6" />,
  instagram: <Share2 className="w-6 h-6" />,
  shopping: <ShoppingCart className="w-6 h-6" />,
  pipeline: <BarChart3 className="w-6 h-6" />,
  data: <Database className="w-6 h-6" />,
  bot: <Bot className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
  notion: <MessageSquare className="w-6 h-6" />,
  facebook: <Users className="w-6 h-6" />,
};

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-gradient-to-r from-yellow-500 to-amber-500",
  Popular: "bg-gradient-to-r from-blue-500 to-cyan-500",
  New: "bg-gradient-to-r from-green-500 to-emerald-500",
};

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const { addToCart, cartItems } = useCart();
  
  const discount = Math.round(
    ((workflow.originalPrice - workflow.price) / workflow.originalPrice) * 100
  );

  const isInCart = cartItems.some(item => item.id === workflow.id);

  return (
    <div className="group relative bg-slate-800/40 border border-slate-700/40 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col">
      {/* Badge */}
      {workflow.badge && (
        <div
          className={`absolute top-4 right-4 ${badgeColors[workflow.badge]} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}
        >
          {workflow.badge}
        </div>
      )}

      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 p-3 rounded-xl text-orange-400 shrink-0">
            {iconMap[workflow.icon] || <GitBranch className="w-6 h-6" />}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
              {workflow.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-white">{workflow.rating}</span>
              </div>
              <span className="text-slate-500 text-sm">({workflow.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {workflow.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {workflow.features.map((feature) => (
            <div key={feature} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span className="text-xs text-slate-400">{feature}</span>
            </div>
          ))}
        </div>

        {/* Node count */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <GitBranch className="w-3.5 h-3.5" />
          <span>{workflow.nodesCount} nodes included</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-700/40 p-6 pt-4 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-white">${workflow.price}</span>
          <span className="text-sm text-slate-500 line-through">${workflow.originalPrice}</span>
          <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        </div>
        <button 
          onClick={() => addToCart({ id: workflow.id, title: workflow.title, price: workflow.price, type: 'workflow' })}
          disabled={isInCart}
          className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all ${
            isInCart 
              ? 'bg-green-500/20 text-green-400 border border-green-500/20 cursor-default'
              : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/20'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-4 h-4" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add
            </>
          )}
        </button>
      </div>
    </div>
  );
}
