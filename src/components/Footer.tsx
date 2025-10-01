'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/contexts/LocaleContext';

export default function Footer() {
  const { locale, dictionary } = useLocaleContext();
  const t = dictionary.footer;
  const tNav = dictionary.nav;

  // locale을 포함한 경로 생성
  const getLocalePath = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t.brand.title}</h3>
            <p className="text-gray-300 mb-4">
              {t.brand.subtitle}
            </p>
            <div className="flex space-x-4">
              <Link 
                href={getLocalePath('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {tNav.contact}
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLocalePath('/os')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.os}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/office')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.office}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/google')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.google}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/browser')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.browser}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/adobe')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.adobe}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/others')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.others}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.support.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLocalePath('/guide')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.guide}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/about')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.about}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/privacy')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.privacy}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath('/contact')} className="text-gray-300 hover:text-white transition-colors">
                  {tNav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t.copyright}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Last updated: September 28, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
