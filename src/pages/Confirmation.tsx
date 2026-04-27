import { Link } from 'react-router-dom';
import { storeConfig } from '../config/storeConfig';
import { CheckCircle } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className="max-w-lg mx-auto text-center mt-16 animate-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-surface border border-edge flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-brand" />
        </div>
      </div>
      <h1 className="text-[48px] font-[800] tracking-[-0.04em] leading-[1.1] mb-4 text-ink">{storeConfig.ui.confirmation.title}</h1>
      <p className="text-muted text-[18px] mb-10">{storeConfig.ui.confirmation.subtitle}</p>
      
      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full text-[14px] font-medium transition-all bg-ink text-white hover:opacity-90"
      >
        {storeConfig.ui.buttons.backToHome}
      </Link>
    </div>
  );
}
