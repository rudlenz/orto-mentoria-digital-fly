import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Mentors from '@/components/Professors';
import Experience from '@/components/Experience';
import TextWithImage from '@/components/TextWithImage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PhoneIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href={`https://wa.me/47992731096?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre`} target="_blank" rel="noopener noreferrer">
        <button style={{
          width: 55,
          height: 55,
          position: 'fixed',
          right: 0,
          bottom: 0,
          zIndex: 1000,
          borderRadius: '100%',
          margin: 22,
          justifyItems: 'center',
        }} className='bg-[#25d366] transition transform hover:scale-105 hover:bg-[#075e54]'>
          <PhoneIcon style={{color: 'white'}}/>
        </button>
      </a>
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
