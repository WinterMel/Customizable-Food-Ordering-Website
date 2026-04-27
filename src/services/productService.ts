import { supabase } from './supabase';
import { Product } from '../features/cart/cartStore';

export async function fetchProducts(storeId: string): Promise<Product[]> {
  if (!supabase) {
    console.warn('Supabase client not initialized. Returning empty array.');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_available', true)
      .eq('store_id', storeId)
      .order('category', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      console.error('Supabase query error fetching products:', error);
      return []; // Return empty array on failure
    }

    return (data as Product[]) || [];
  } catch (error) {
    console.error('Exception thrown while fetching products:', error);
    return [];
  }
}
