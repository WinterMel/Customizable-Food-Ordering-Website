import { supabase } from './supabase';
import { Product } from '../features/cart/cartStore';

// Fallback mock data so the app doesn't break if Supabase isn't connected yet
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Signature Burger',
    description: 'Our famous grass-fed beef patty with secret sauce.',
    price: 14.99,
    image_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    category: 'Signature'
  },
  {
    id: '2',
    name: 'Spicy Chicken Sandwich',
    description: 'Crispy fried chicken breast with house-made spicy mayo.',
    price: 12.50,
    image_url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80',
    category: 'Signature'
  },
  {
    id: '3',
    name: 'Truffle Fries Combo',
    description: 'Crispy shoestring fries tossed in truffle oil and parmesan.',
    price: 8.99,
    image_url: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80',
    category: 'Combos'
  },
  {
    id: '4',
    name: 'Artisan Iced Latte',
    description: 'Double shot espresso over ice with oat milk.',
    price: 5.50,
    image_url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80',
    category: 'Drinks'
  }
];

export async function fetchProducts(): Promise<Product[]> {
  if (!supabase) {
    console.warn('Supabase client not initialized. Returning mock products.');
    return MOCK_PRODUCTS;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_available', true)
      .order('category', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      console.error('Supabase query error fetching products:', error);
      return MOCK_PRODUCTS; // Fallback to mock on error during setup
    }

    return (data as Product[]) || [];
  } catch (error) {
    console.error('Exception thrown while fetching products:', error);
    return MOCK_PRODUCTS;
  }
}
