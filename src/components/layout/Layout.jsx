import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import QuoteModal from './QuoteModal';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <Outlet />
      </Suspense>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </>
  );
}
