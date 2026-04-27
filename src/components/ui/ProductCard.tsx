import { Product, useCartStore } from '../../features/cart/cartStore';
import { storeConfig } from '../../config/storeConfig';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-surface border border-edge rounded-[16px] p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="w-full aspect-square bg-[#F1F5F9] rounded-[12px] flex items-center justify-center text-edge font-bold overflow-hidden">
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <span>IMAGE</span>
        )}
      </div>
      
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-ink line-clamp-1" title={product.name}>
            {product.name}
          </h3>
          <p className="text-muted text-[14px] mt-1 line-clamp-2" title={product.description}>
            {product.description}
          </p>
        </div>
        <div className="text-[16px] text-brand font-bold mt-3">
          {storeConfig.currency.symbol}{product.price.toFixed(2)}
        </div>
      </div>
      
      <button 
        onClick={handleAddToCart}
        className="w-full p-3 border border-ink bg-transparent rounded-[8px] font-semibold cursor-pointer transition-all duration-200 hover:bg-ink hover:text-white mt-auto active:scale-[0.98]"
      >
        {storeConfig.ui.buttons.addToCart}
      </button>
    </div>
  );
}
