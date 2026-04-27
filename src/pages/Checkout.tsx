import { useState, FormEvent } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useCartStore } from '../features/cart/cartStore';
import { storeConfig } from '../config/storeConfig';
import { createOrder } from '../services/orderService';

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const totalPrice = getTotalPrice();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Redirect elegantly if cart is empty
  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  // Basic validation for required fields
  const isFormValid = 
    formData.name.trim() !== '' && 
    formData.phone.trim() !== '' && 
    formData.address.trim() !== '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare the clean payload structured for Database Insertion
    const orderPayload = {
      customer: {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim()
      },
      notes: formData.notes.trim(),
      items: items,
      total_price: totalPrice
    };

    console.log('📦 Order Payload prepared for API insertion:', orderPayload);
    
    const result = await createOrder(orderPayload);
    
    setIsSubmitting(false);

    if (result.success) {
      clearCart();
      navigate('/confirmation');
    } else {
      setSubmitError(result.error || storeConfig.ui.checkout.validation.failedOrder);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-[900px] mx-auto w-full">
      <header className="mb-10 lg:text-left text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">{storeConfig.ui.checkout.title}</h1>
        <p className="text-[18px] text-muted">{storeConfig.ui.checkout.subtitle}</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Checkout Form */}
        <div className="flex-1">
          <form id="checkout-form" onSubmit={handleSubmit} className="bg-surface border border-edge rounded-[16px] p-6 lg:p-8 flex flex-col gap-5">
            <h2 className="text-[20px] font-bold text-ink mb-2">{storeConfig.ui.checkout.formTitle}</h2>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[14px] font-semibold text-ink">{storeConfig.ui.checkout.labels.name} <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-bg border border-edge rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors"
                placeholder={storeConfig.ui.checkout.placeholders.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[14px] font-semibold text-ink">{storeConfig.ui.checkout.labels.phone} <span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-bg border border-edge rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors"
                placeholder={storeConfig.ui.checkout.placeholders.phone}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-[14px] font-semibold text-ink">{storeConfig.ui.checkout.labels.address} <span className="text-red-500">*</span></label>
              <textarea
                id="address"
                name="address"
                required
                rows={2}
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-bg border border-edge rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors resize-none"
                placeholder={storeConfig.ui.checkout.placeholders.address}
              />
            </div>

            <div className="h-[1px] bg-edge my-4 w-full"></div>
            
            <h2 className="text-[20px] font-bold text-ink mb-2">Additional Instructions</h2>

            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-[14px] font-semibold text-ink">{storeConfig.ui.checkout.labels.notes}</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full bg-bg border border-edge rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-ink transition-colors resize-none"
                placeholder={storeConfig.ui.checkout.placeholders.notes}
              />
            </div>
          </form>
        </div>

        {/* Order Summary Module */}
        <div className="w-full md:w-[360px] flex-shrink-0">
          <div className="bg-surface border border-edge rounded-[16px] p-6 sticky top-24">
            <h2 className="text-[20px] font-bold text-ink mb-6">{storeConfig.ui.cart.summaryTitle}</h2>
            
            <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-[15px]">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-ink px-2 py-0.5 bg-bg border border-edge rounded text-[13px]">{item.quantity}x</span>
                    <span className="text-muted line-clamp-2">{item.name}</span>
                  </div>
                  <span className="font-semibold text-ink flex-shrink-0">
                    {storeConfig.currency.symbol}{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-[1px] bg-edge w-full mb-6"></div>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex justify-between text-[18px] font-bold text-ink">
                <span>{storeConfig.ui.cart.total}</span>
                <span className="text-brand">{storeConfig.currency.symbol}{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {submitError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-[14px] mb-4 border border-red-100">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              form="checkout-form"
              disabled={!isFormValid || isSubmitting}
              className={`w-full block text-center py-3.5 rounded-full text-[15px] font-semibold transition-all ${
                isFormValid && !isSubmitting
                  ? 'bg-ink text-white hover:opacity-90 active:scale-[0.98]' 
                  : 'bg-edge text-muted cursor-not-allowed opacity-70'
              }`}
            >
              {isSubmitting ? storeConfig.ui.buttons.processing : storeConfig.ui.buttons.confirmOrder}
            </button>
            {!isFormValid && (
              <p className="text-center text-xs text-muted mt-3">{storeConfig.ui.checkout.validation.required}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
