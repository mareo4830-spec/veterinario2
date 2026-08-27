import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
