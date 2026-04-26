import { supabase } from './supabase';
import { CartItem } from '../features/cart/cartStore';

export interface OrderPayload {
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  notes: string;
  items: CartItem[];
  total_price: number;
}

export async function createOrder(payload: OrderPayload): Promise<{ success: boolean; orderId?: string; error?: string }> {
  if (!supabase) {
    console.error('Supabase client not initialized. Cannot create order.');
    return { success: false, error: 'Database connection missing. Please configure your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.' };
  }

  try {
    // 1. Insert into orders table
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: payload.customer.name,
        customer_phone: payload.customer.phone,
        customer_address: payload.customer.address,
        notes: payload.notes,
        total_price: payload.total_price,
        status: 'pending'
      })
      .select('id')
      .single();

    if (orderError) {
      console.error('Supabase error creating order:', orderError);
      return { success: false, error: 'Failed to create order. Please try again.' };
    }

    const orderId = orderData.id;

    // 2. Insert into order_items table
    const orderItemsRecord = payload.items.map(item => ({
      order_id: orderId,
      product_id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItemsRecord);

    if (itemsError) {
      console.error('Supabase error creating order items:', itemsError);
      // Note: In production you would want to use a Supabase RPC (stored procedure) 
      // to handle this transaction atomically. For now, we return an error if this step fails.
      return { success: false, error: 'Failed to attach items to order.' };
    }

    return { success: true, orderId };
  } catch (error) {
    console.error('Exception during order creation:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
