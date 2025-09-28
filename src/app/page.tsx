'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';

export default function Home() {
  const handleGetStarted = () => {
    // OS 페이지로 리다이렉트
    window.location.href = '/os';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <HomePage onGetStarted={handleGetStarted} />
      </main>

      <Footer />
    </div>
  );
}