import { Link } from 'react-router-dom';
import { storeConfig } from '../config/storeConfig';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="py-[64px] text-center">
        <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">
          {storeConfig.storeName}
        </h1>
        <p className="text-[18px] text-muted max-w-[500px] mx-auto mb-8">
          {storeConfig.tagline}
        </p>
        <Link
          to="/menu"
          className="inline-block px-8 py-3 rounded-full text-[14px] font-semibold transition-all bg-ink text-white hover:opacity-90"
        >
          Explore Our Menu
        </Link>
        <div className="mt-12 max-w-[900px] mx-auto">
          <img
            src={storeConfig.heroImage}
            alt="Store Hero"
            className="w-full aspect-[21/9] object-cover bg-surface border border-edge rounded-[16px]"
          />
        </div>
      </section>

      {/* Overview Section Placeholder */}
      <section className="text-center max-w-[900px] mx-auto">
        <h2 className="text-[28px] font-bold text-ink mb-8 tracking-tight">Why order from us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-[16px] border border-edge flex flex-col gap-4 text-left">
            <div className="text-[18px] font-semibold text-ink flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg border border-edge text-[14px]">1</span>
              Browse the Menu
            </div>
            <p className="text-muted text-[16px] m-0">Pick out your favorites from our configurable catalog.</p>
          </div>
          <div className="bg-surface p-6 rounded-[16px] border border-edge flex flex-col gap-4 text-left">
            <div className="text-[18px] font-semibold text-ink flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg border border-edge text-[14px]">2</span>
              Fast Checkout
            </div>
            <p className="text-muted text-[16px] m-0">Seamlessly add details—no complicated accounts required.</p>
          </div>
          <div className="bg-surface p-6 rounded-[16px] border border-edge flex flex-col gap-4 text-left">
            <div className="text-[18px] font-semibold text-ink flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg border border-edge text-[14px]">3</span>
              Enjoy
            </div>
            <p className="text-muted text-[16px] m-0">Delicious items prepared securely and reliably for you.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
