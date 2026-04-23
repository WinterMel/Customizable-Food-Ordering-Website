export default function Cart() {
  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto w-full">
      <header className="mb-10 text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">Your Cart</h1>
        <p className="text-[18px] text-muted">Review your items before checkout</p>
      </header>
      
      <div className="bg-surface p-8 rounded-[16px] border border-dashed border-edge text-center text-muted">
         <p className="text-[18px] font-semibold text-ink">Cart System Placeholder - Phase 4</p>
         <p className="text-[16px] mt-2">Items selected from the menu will populate here.</p>
      </div>
    </div>
  );
}
