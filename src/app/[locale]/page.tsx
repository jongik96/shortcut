import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import AdSense from '@/components/AdSense';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Top Banner Ad */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <AdSense 
          slot="your-top-banner-slot" 
          format="auto"
          style={{ display: 'block', textAlign: 'center' }}
          className="w-full"
        />
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <HomePage />
      </main>

      {/* Bottom Banner Ad */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <AdSense 
          slot="your-bottom-banner-slot" 
          format="auto"
          style={{ display: 'block', textAlign: 'center' }}
          className="w-full"
        />
      </div>

      <Footer />
    </div>
  );
}
