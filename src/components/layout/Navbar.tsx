import { Link } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import { storeConfig } from '../../config/storeConfig';
import { useCartStore } from '../../features/cart/cartStore';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-surface border-b border-edge py-6 sticky top-0 z-50">
      <div className="max-w-[900px] mx-auto px-4 w-full flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="text-[20px] font-bold tracking-[-0.02em] uppercase text-ink">
          {storeConfig.storeName}
        </Link>
        
        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-[32px]">
          <Link to="/menu" className="text-[14px] font-medium text-muted hover:text-ink transition-colors">
            {storeConfig.ui.nav.menu}
          </Link>
          <Link to="/cart" className="bg-ink text-white px-[18px] py-[10px] rounded-full text-[13px] flex items-center gap-2 group transition-colors hover:opacity-90">
            <ShoppingCart className="w-4 h-4" />
            <span>{storeConfig.ui.nav.cart}</span>
            {totalItems > 0 && (
              <span className="flex items-center">
                <span className="opacity-50 mx-2">|</span>
                <span>{totalItems}</span>
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu icon (Placeholder for future iteration) */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="bg-ink text-white px-[18px] py-[10px] rounded-full text-[13px] flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="flex items-center">
                <span className="opacity-50 mx-1">|</span>
                <span>{totalItems}</span>
              </span>
            )}
          </Link>
          <button className="p-2 text-ink">
            <MenuIcon />
          </button>
        </div>

      </div>
    </nav>
  );
}
