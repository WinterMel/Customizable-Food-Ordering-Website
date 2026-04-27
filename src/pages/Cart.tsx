import { Link } from 'react-router-dom';
import { useCartStore } from '../features/cart/cartStore';
import { storeConfig } from '../config/storeConfig';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  // Graceful handling for an empty cart state
  if (items.length === 0) {
    return (
      <div className="animate-in fade-in duration-500 max-w-[900px] mx-auto w-full text-center py-20">
        <div className="w-24 h-24 bg-surface border border-edge rounded-full flex items-center justify-center mx-auto mb-6 text-muted">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-[32px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">{storeConfig.ui.cart.emptyTitle}</h1>
        <p className="text-[18px] text-muted mb-8">{storeConfig.ui.cart.emptySubtitle}</p>
        <Link
          to="/menu"
          className="inline-block px-8 py-3 rounded-full text-[14px] font-medium transition-all bg-ink text-white hover:opacity-90"
        >
          {storeConfig.ui.buttons.browseMenu}
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 max-w-[900px] mx-auto w-full">
      <header className="mb-10 lg:text-left text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">{storeConfig.ui.cart.title}</h1>
        <p className="text-[18px] text-muted">{storeConfig.ui.cart.subtitle}</p>
      </header>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-surface border border-edge rounded-[16px] p-4 flex sm:flex-row flex-col gap-4 sm:items-center">
              <div className="w-full sm:w-24 h-40 sm:h-24 bg-[#F1F5F9] rounded-[8px] overflow-hidden flex-shrink-0">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted text-xs font-bold">IMG</div>
                )}
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="text-[18px] font-semibold text-ink line-clamp-1">{item.name}</h3>
                <p className="text-[16px] text-brand font-bold mt-1">
                  {storeConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="text-[13px] text-muted mt-1">
                  {storeConfig.currency.symbol}{item.price.toFixed(2)} {storeConfig.ui.cart.each}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 sm:mt-0 justify-between sm:justify-end">
                <div className="flex items-center bg-bg border border-edge rounded-full p-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-surface transition-colors active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center text-[14px] font-semibold text-ink">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-surface transition-colors active:scale-95"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-[320px] flex-shrink-0">
          <div className="bg-surface border border-edge rounded-[16px] p-6 sticky top-24">
            <h2 className="text-[20px] font-bold text-ink mb-6">{storeConfig.ui.cart.summaryTitle}</h2>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between text-[16px] text-muted">
                <span>{storeConfig.ui.cart.subtotal}</span>
                <span>{storeConfig.currency.symbol}{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[16px] text-muted">
                <span>{storeConfig.ui.cart.estimatedTax}</span>
                <span>{storeConfig.ui.cart.taxCalculatedAtCheckout}</span>
              </div>
              <div className="h-[1px] bg-edge w-full my-2"></div>
              <div className="flex justify-between text-[18px] font-bold text-ink">
                <span>{storeConfig.ui.cart.total}</span>
                <span className="text-brand">{storeConfig.currency.symbol}{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center py-3 rounded-full text-[15px] font-semibold transition-all bg-ink text-white hover:opacity-90 active:scale-[0.98]"
            >
              {storeConfig.ui.buttons.proceedToCheckout}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
