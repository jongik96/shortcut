'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <PrivacyPolicy />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 LearnShortcuts.dev。全著作権所有。</p>
            <p className="text-sm mt-2">より効率的な作業のためのショートカット学習サイト</p>
            <div className="mt-4 flex justify-center gap-6">
              <Link href="/about" className="text-sm hover:text-blue-600 transition-colors">
                サービス概要
              </Link>
              <Link href="/privacy" className="text-sm hover:text-blue-600 transition-colors">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
