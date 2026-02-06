import { useState } from "react";
import { Menu, X, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1.5 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              way<span className="text-orange-500">2ai</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#workflows" className="text-sm text-slate-300 hover:text-white transition-colors">
              Workflows
            </a>
            <a href="#bundles" className="text-sm text-slate-300 hover:text-white transition-colors">
              Bundles
            </a>
            <a href="#testimonials" className="text-sm text-slate-300 hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              className="relative p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg shadow-orange-500/25">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              className="relative p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              className="p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800/50 px-4 py-4 space-y-3">
          <a href="#workflows" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
            Workflows
          </a>
          <a href="#bundles" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
            Bundles
          </a>
          <a href="#testimonials" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
            Reviews
          </a>
          <a href="#faq" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
