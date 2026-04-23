export default function Menu() {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="mb-10 text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">Our Menu</h1>
        <p className="text-muted text-[18px]">Browse our configurable catalog of products (Skeleton - Phase 2)</p>
      </header>
      
      <div className="bg-surface p-8 rounded-[16px] text-center text-muted border border-dashed border-edge">
        <p className="text-[18px] font-semibold text-ink">Product Grid Placeholder</p>
        <p className="text-[16px] mt-2">Data will be injected here during Phase 3 (Supabase Integration).</p>
      </div>
    </div>
  );
}
