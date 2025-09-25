'use client';

import { Keyboard } from 'lucide-react';
import Link from 'next/link';
import GuidePage from '@/components/GuidePage';

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                <Keyboard className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">LearnShortcuts.dev</h1>
            </Link>
            
            <nav className="flex items-center gap-4">
              <Link 
                href="/list"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ショートカット一覧
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <GuidePage />
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
