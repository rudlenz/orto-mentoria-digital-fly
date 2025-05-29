
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Professors from '@/components/Professors';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Professors />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
