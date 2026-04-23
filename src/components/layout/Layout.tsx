import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { storeConfig } from '../../config/storeConfig';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink font-sans">
      <Navbar />
      
      <main className="flex-grow max-w-[900px] mx-auto w-full px-4 py-8 flex flex-col">
        <Outlet />
      </main>
      
      <footer className="py-12 text-center mt-auto border-t border-edge text-muted">
        <div className="max-w-[900px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-semibold text-ink tracking-tight uppercase">
            {storeConfig.storeName}
          </p>
          <p className="text-[14px]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
