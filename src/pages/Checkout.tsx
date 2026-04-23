export default function Checkout() {
  return (
    <div className="animate-in fade-in duration-500 max-w-3xl mx-auto w-full">
      <header className="mb-10 text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">Checkout</h1>
        <p className="text-[18px] text-muted">Enter your details to place your order.</p>
      </header>

       <div className="bg-surface p-8 rounded-[16px] border border-dashed border-edge text-center text-muted">
         <p className="text-[18px] font-semibold text-ink">Checkout Form Placeholder - Phase 5</p>
         <p className="text-[16px] mt-2">No payment integration needed—just Customer and Order persistence.</p>
      </div>
    </div>
  );
}
