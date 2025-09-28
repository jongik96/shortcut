import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">LearnShortcuts.dev</h3>
            <p className="text-gray-300 mb-4">
              Master keyboard shortcuts for OS, Microsoft Office, Google Workspace, 
              Browser, Adobe, and other software to boost your productivity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/os" className="text-gray-300 hover:text-white transition-colors">
                  OS Shortcuts
                </Link>
              </li>
              <li>
                <Link href="/office" className="text-gray-300 hover:text-white transition-colors">
                  Microsoft Office
                </Link>
              </li>
              <li>
                <Link href="/google" className="text-gray-300 hover:text-white transition-colors">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link href="/browser" className="text-gray-300 hover:text-white transition-colors">
                  Browser
                </Link>
              </li>
              <li>
                <Link href="/adobe" className="text-gray-300 hover:text-white transition-colors">
                  Adobe
                </Link>
              </li>
              <li>
                <Link href="/others" className="text-gray-300 hover:text-white transition-colors">
                  Others
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guide" className="text-gray-300 hover:text-white transition-colors">
                  How to Use
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LearnShortcuts.dev. All rights reserved.
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
