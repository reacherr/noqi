
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-dark-blue">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold text-soft-beige mb-6">
              Let's Connect
            </h1>
            <p className="text-xl font-inter text-light-beige/80 font-light">
              We're excited to hear about your ideas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-soft-beige">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-outfit font-bold text-dark-blue mb-8">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter font-medium text-dark-blue mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-dark-blue/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-blue/20 focus:border-dark-blue transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-medium text-dark-blue mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-dark-blue/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-blue/20 focus:border-dark-blue transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-inter font-medium text-dark-blue mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-dark-blue/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-blue/20 focus:border-dark-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-inter font-medium text-dark-blue mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-dark-blue/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-blue/20 focus:border-dark-blue transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={200}>
              <div className="lg:pl-8">
                <h2 className="text-2xl font-outfit font-bold text-dark-blue mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-outfit font-semibold text-dark-blue mb-2">
                      Email
                    </h3>
                    <p className="text-muted-blue font-inter">
                      hello@noqi.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-outfit font-semibold text-dark-blue mb-2">
                      Response Time
                    </h3>
                    <p className="text-muted-blue font-inter">
                      We typically respond within 24 hours
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-outfit font-semibold text-dark-blue mb-2">
                      Project Timeline
                    </h3>
                    <p className="text-muted-blue font-inter">
                      Most projects are completed within 2-8 weeks, depending on scope and complexity
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/30 rounded-lg">
                  <p className="text-muted-blue font-inter text-sm leading-relaxed">
                    "Working with noqi transformed our entire digital presence. Their attention to detail and understanding of user experience is unmatched."
                  </p>
                  <p className="text-dark-blue font-inter font-medium text-sm mt-3">
                    — Sarah Chen, Founder at TechFlow
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
