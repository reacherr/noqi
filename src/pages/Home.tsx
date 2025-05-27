import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import auracafeImg from '../assets/auracafe.png';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-dark-blue flex items-center justify-center relative overflow-hidden">
        {/* Abstract background element with parallax */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-soft-beige rounded-full blur-3xl animate-gentle-float"></div>
        </div>
        
        <div 
          className="text-center z-10 px-6"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <AnimatedSection className="space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <svg 
                width="84" 
                height="84" 
                viewBox="0 0 270 275" 
                className="fill-current text-soft-beige"
              >
                <g transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)">
                  <path d="M1221 2093 c-17 -3 -20 -7 -11 -13 8 -5 -1 -7 -21 -5 -19 1 -38 0 -44 -4 -5 -4 -37 -18 -70 -31 -106 -41 -229 -142 -305 -247 -16 -24 -28 -43 -25 -43 3 0 -3 -10 -15 -22 -11 -12 -20 -27 -20 -32 0 -6 -6 -23 -14 -38 -26 -50 -69 -254 -46 -218 7 10 9 -5 8 -50 l-1 -65 -7 50 c-9 66 -12 16 -4 -63 4 -34 11 -59 15 -56 5 3 6 -2 3 -11 -4 -8 -2 -28 4 -43 6 -15 14 -36 18 -47 4 -11 8 -23 8 -27 1 -3 4 -10 8 -14 5 -4 8 -16 8 -26 0 -10 5 -18 10 -18 6 0 10 -6 10 -14 0 -8 6 -21 13 -28 7 -7 24 -31 37 -53 25 -40 61 -79 135 -145 100 -89 362 -179 429 -147 10 5 16 5 13 0 -5 -8 177 -9 251 0 23 3 42 2 42 -2 0 -11 54 -8 62 3 5 7 8 7 8 1 0 -14 37 -16 79 -5 19 5 39 6 45 3 6 -4 25 -8 44 -10 25 -3 32 -1 26 9 -6 10 -5 10 7 2 27 -21 109 3 109 32 0 8 4 13 9 9 12 -7 17 36 12 89 -2 26 -6 34 -12 25 -7 -11 -9 -9 -9 7 0 33 -25 47 -90 48 -33 1 -60 3 -60 6 0 3 13 19 28 35 71 77 137 211 158 323 16 82 18 215 3 172 -5 -17 -6 -6 -2 32 4 43 0 73 -17 125 -13 37 -27 73 -32 80 -5 7 -7 17 -3 23 3 5 2 10 -4 10 -6 0 -13 11 -17 25 -3 14 -10 25 -15 25 -5 0 -9 7 -9 15 0 8 -4 15 -10 15 -5 0 -10 5 -10 10 0 14 -15 32 -68 86 -69 70 -123 110 -198 148 -103 51 -119 57 -134 43 -9 -8 -11 -8 -7 -1 9 16 -68 35 -82 21 -8 -8 -11 -8 -11 1 0 9 -29 12 -102 11 -57 -1 -114 -4 -127 -6z m344 -57 c183 -58 325 -180 410 -351 45 -92 66 -186 66 -300 0 -179 -58 -322 -182 -447 l-76 -78 116 0 116 0 0 -76 0 -75 -400 3 -400 4 -73 26 c-108 39 -178 84 -262 168 -134 136 -190 262 -198 448 -5 134 12 220 64 326 153 305 498 454 819 352z"/>
                  <path d="M1260 1847 c-307 -69 -462 -408 -318 -692 27 -52 122 -151 176 -182 262 -154 618 -11 697 281 23 85 17 228 -13 306 -45 117 -171 234 -292 273 -72 23 -182 30 -250 14z m130 -17 c-12 -8 -10 -10 10 -10 38 0 134 -28 138 -40 2 -5 8 -8 13 -5 11 7 86 -42 93 -61 3 -8 12 -14 19 -14 7 0 20 -11 27 -25 7 -14 17 -25 21 -25 12 0 50 -76 69 -140 53 -175 -9 -359 -163 -486 -14 -12 -60 -34 -117 -56 -19 -8 -57 -15 -85 -17 -27 -1 -52 -7 -53 -12 -2 -5 -8 -7 -13 -3 -5 3 -33 9 -62 15 -70 12 -65 11 -130 42 -95 47 -182 144 -207 232 -7 25 -16 45 -20 45 -9 0 -6 192 3 228 3 13 19 48 34 79 69 137 193 225 338 240 30 3 55 10 55 14 0 5 10 9 23 9 18 0 19 -2 7 -10z"/>
                </g>
              </svg>
              <h1 className="text-5xl md:text-7xl font-outfit font-bold text-soft-beige">
                noqi
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-inter text-light-beige font-light">
              Form-Focused. Function-Driven.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-dark-blue mb-6">
              Crafted with Precision
            </h2>
            <p className="text-lg text-muted-blue font-inter max-w-2xl mx-auto">
              Where form meets function in perfect harmony
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatedSection delay={200}>
              <ProjectCard
                title="Aura Café - Local Business Revamp"
                description="Elevating a local favorite with a seamless online ordering experience and sophisticated brand presence."
                category="Web Design"
                mockupType="desktop"
                image={auracafeImg}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <ProjectCard
                title="FinFlow - Intuitive Finance App"
                description="Simplifying personal finance management through clean interfaces and intelligent user flows."
                category="Mobile App"
                mockupType="mobile"
                image={auracafeImg}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <ProjectCard
                title="Connectr - Modern Dating Platform"
                description="Redefining digital connections with meaningful interactions and thoughtful design principles."
                category="UX/UI Design"
                mockupType="mobile"
                image={auracafeImg}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-soft-beige mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-light-beige/80 font-inter max-w-2xl mx-auto">
              Driving results through design excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <AnimatedSection delay={200}>
              <ServiceCard
                icon="🎨"
                title="UI/UX Design"
                description="Crafting intuitive interfaces that are as beautiful as they are usable, ensuring seamless user journeys."
              />
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <ServiceCard
                icon="💻"
                title="Web Development"
                description="Building responsive, high-performance websites that capture your brand and convert visitors."
              />
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <ServiceCard
                icon="📱"
                title="App Development"
                description="Developing native and cross-platform mobile applications that engage users and deliver value."
              />
            </AnimatedSection>
            
            <AnimatedSection delay={800}>
              <ServiceCard
                icon="🎯"
                title="Brand Strategy"
                description="Defining compelling brand identities that resonate with your target audience and stand out in the market."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-soft-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-dark-blue mb-6">
              Ready to Elevate Your Vision?
            </h2>
            <p className="text-lg text-muted-blue font-inter mb-8 leading-relaxed">
              Partner with Noqi to bring your ideas to life with design that performs.
            </p>
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
