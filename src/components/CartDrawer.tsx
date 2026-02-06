import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 text-white">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold">Your Cart</h2>
            <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-2">
                <ShoppingBag className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-lg font-medium text-white">Your cart is empty</p>
              <p className="text-sm">Looks like you haven't added any workflows yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Browse Workflows
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex gap-4 items-center group"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white mb-1 truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 capitalize bg-slate-800 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                      <span className="font-semibold text-orange-400">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors shrink-0"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-400 font-medium">Total</span>
              <span className="text-2xl font-bold text-white">${cartTotal}</span>
            </div>
            <button 
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              onClick={() => alert("Proceeding to checkout with " + cartItems.length + " items!")}
            >
              <ShoppingBag className="w-5 h-5" />
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}
