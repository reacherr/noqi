import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-dark-blue">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold text-soft-beige mb-6">
              The Philosophy Behind Our Pixels
            </h1>
            <p className="text-xl font-inter text-light-beige/80 font-light">
              Form-Focused. Function-Driven.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-soft-beige">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark-blue mb-8">
              Our Mission
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-muted-blue font-inter leading-relaxed">
                  At noqi, we believe that exceptional design is born at the intersection of aesthetic beauty and functional excellence. Every pixel serves a purpose, every interaction tells a story, and every project is an opportunity to create something extraordinary.
                </p>
                <p className="text-lg text-muted-blue font-inter leading-relaxed">
                  We partner with startups, solo founders, and forward-thinking companies who understand that great design isn't just about looking good—it's about performing exceptionally well in the real world.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-dark-blue/20 rounded w-3/4"></div>
                  <div className="h-4 bg-dark-blue/10 rounded w-1/2"></div>
                  <div className="h-4 bg-dark-blue/20 rounded w-5/6"></div>
                  <div className="h-4 bg-dark-blue/10 rounded w-2/3"></div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-16 bg-dark-blue/20 rounded"></div>
                    <div className="h-16 bg-dark-blue/20 rounded"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark-blue">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-soft-beige mb-8">
              Why Choose noqi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-beige/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-outfit font-semibold text-soft-beige mb-3">
                  Bespoke Solutions
                </h3>
                <p className="text-light-beige/80 font-inter text-sm">
                  Every project is crafted specifically for your unique needs and goals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-beige/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-outfit font-semibold text-soft-beige mb-3">
                  Transparent Process
                </h3>
                <p className="text-light-beige/80 font-inter text-sm">
                  Clear communication and collaboration throughout every phase.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-beige/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-outfit font-semibold text-soft-beige mb-3">
                  Modern Aesthetics
                </h3>
                <p className="text-light-beige/80 font-inter text-sm">
                  Contemporary design principles that stand the test of time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-soft-beige/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-outfit font-semibold text-soft-beige mb-3">
                  Results-Oriented
                </h3>
                <p className="text-light-beige/80 font-inter text-sm">
                  Design decisions driven by data and user behavior insights.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-soft-beige">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark-blue mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted-blue font-inter mb-8">
              Let's explore how we can bring your vision to life.
            </p>
            <Button to="/contact" variant="primary">
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
