import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import { Product } from '../features/cart/cartStore';
import ProductCard from '../components/ui/ProductCard';
import { storeConfig } from '../config/storeConfig';

export default function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>(storeConfig.ui.menu.allCategory);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await fetchProducts(storeConfig.storeId);
        // Ensure data is always an array
        setProducts(data || []);
      } catch (error) {
        console.error("Failed to load products in Menu component", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Extract unique categories dynamically from products
  const categories = [storeConfig.ui.menu.allCategory, ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === storeConfig.ui.menu.allCategory 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10 text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">{storeConfig.ui.menu.title}</h1>
        <p className="text-muted text-[18px]">{storeConfig.ui.menu.subtitle}</p>
      </header>
      
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-[20px] py-[8px] rounded-full text-[14px] font-medium border transition-all duration-200 cursor-pointer ${
              activeCategory === cat 
                ? 'bg-ink text-white border-ink' 
                : 'bg-surface text-ink border-edge hover:border-muted'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-muted">
          <div className="animate-pulse flex flex-col items-center gap-4">
             <div className="w-8 h-8 border-4 border-edge border-t-brand rounded-full animate-spin"></div>
             <p className="font-medium">{storeConfig.ui.menu.loadingText}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
             <div className="col-span-full text-center py-12 text-muted bg-surface rounded-[16px] border border-edge">
               {storeConfig.ui.menu.noProducts}
             </div>
          )}
        </div>
      )}
    </div>
  );
}
