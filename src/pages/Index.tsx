
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mentors from '@/components/Professors';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mentors />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
