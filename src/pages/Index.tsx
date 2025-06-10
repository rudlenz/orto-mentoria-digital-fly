import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Mentors from '@/components/Professors';
import Experience from '@/components/Experience';
import TextWithImage from '@/components/TextWithImage';
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
      <TextWithImage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
