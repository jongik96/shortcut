'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:pji3503@gmail.com?subject=LearnShortcuts.dev Inquiry&body=Hello,%0D%0A%0D%0AI would like to inquire about:%0D%0A%0D%0A[Please describe your inquiry here]%0D%0A%0D%0AThank you!';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about keyboard shortcuts? Need help with a specific software? 
            We&apos;re here to help you master productivity shortcuts and improve your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">
                    Send us an email and we&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={handleEmailClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond within a week during business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What We Can Help With</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Keyboard shortcut questions</li>
                    <li>• Software-specific inquiries</li>
                    <li>• Feature requests</li>
                    <li>• Bug reports</li>
                    <li>• General feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I find shortcuts for specific software?
                </h3>
                <p className="text-gray-600">
                  Use our search functionality or browse by category. Each software has its own dedicated page with comprehensive shortcut lists.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are the shortcuts accurate for all versions?
                </h3>
                <p className="text-gray-600">
                  We regularly update our shortcut database to ensure accuracy across different software versions. If you find any discrepancies, please let us know.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I request shortcuts for new software?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We&apos;re always looking to expand our coverage. Send us your suggestions and we&apos;ll consider adding them to our platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is LearnShortcuts.dev free to use?
                </h3>
                <p className="text-gray-600">
                  Yes, our platform is completely free to use. We believe productivity tools should be accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Before You Contact Us</h3>
          <div className="text-blue-800 space-y-2">
            <p>• Check our <Link href="/guide" className="underline hover:text-blue-600">How to Use</Link> page for common questions</p>
            <p>• Browse our comprehensive shortcut lists to see if your question is already answered</p>
            <p>• Include specific software version and operating system in your inquiry for faster assistance</p>
            <p>• For bug reports, please include steps to reproduce the issue</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
