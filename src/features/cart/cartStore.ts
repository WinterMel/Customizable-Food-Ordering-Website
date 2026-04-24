import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_available?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) => {
    const { items } = get();
    const existingItem = items.find((i) => i.id === product.id);
    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      // Sanitize product data (only keep required fields for CartItem)
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: 1,
      };
      set({ items: [...items, newItem] });
    }
  },
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== productId),
    })),
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      // Automatically remove item if quantity drops to 0 or below
      get().removeItem(productId);
    } else {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === productId ? { ...i, quantity } : i
        ),
      }));
    }
  },
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
