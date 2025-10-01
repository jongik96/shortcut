import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}
