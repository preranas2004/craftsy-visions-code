
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, RefreshCw, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate elements when they come into view
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView) {
          ref.classList.add('animate-fade-in');
          ref.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                <span className="gradient-text">Your Vision,</span><br />
                Our Code.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>
                We transform your creative ideas into beautiful, functional websites 
                that captivate your audience and drive results.
              </p>
              <div className="space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-6 py-2">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-8 right-8 w-48 h-48 bg-crafty-pink/20 rounded-full mix-blend-multiply filter blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                  alt="Web Development" 
                  className="rounded-lg shadow-2xl relative z-10 animate-float max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white" ref={(el) => addToRefs(el as HTMLDivElement, 0)}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Create Digital Experiences</h2>
            <p className="text-gray-600">
              At CraftsyVisions, we specialize in crafting beautiful, functional websites that help 
              businesses and individuals establish their online presence and connect with their audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Layout className="h-10 w-10 text-primary" />, title: "Custom Design", desc: "Tailored to your brand's unique identity" },
              { icon: <Code className="h-10 w-10 text-primary" />, title: "Clean Code", desc: "Built with the latest technologies" },
              { icon: <RefreshCw className="h-10 w-10 text-primary" />, title: "Ongoing Support", desc: "We're with you for the long haul" },
              { icon: <MessageSquare className="h-10 w-10 text-primary" />, title: "Clear Communication", desc: "Transparent process from start to finish" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-lg border border-border shadow-sm card-hover text-center opacity-0"
                ref={(el) => addToRefs(el as HTMLDivElement, i + 1)}
                style={{animationDelay: `${0.2 * (i + 1)}s`}}
              >
                <div className="mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-gray-50" ref={(el) => addToRefs(el as HTMLDivElement, 6)}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We offer a range of services to help you establish and grow your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Design",
                desc: "Unique websites tailored to your brand identity and business goals.",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "E-Commerce Solutions",
                desc: "Powerful online stores that drive sales and provide a seamless shopping experience.",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              },
              {
                title: "Ongoing Support",
                desc: "Continuous maintenance, updates, and optimization to keep your site running smoothly.",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="service-card overflow-hidden opacity-0"
                ref={(el) => addToRefs(el as HTMLDivElement, i + 7)}
                style={{animationDelay: `${0.2 * (i + 1)}s`}}
              >
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link 
                  to="/services" 
                  className="text-primary hover:text-crafty-deep-purple flex items-center font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 opacity-0" ref={(el) => addToRefs(el as HTMLDivElement, 10)}>
            <Link to="/services">
              <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-6 py-2">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding bg-primary/10" 
        ref={(el) => addToRefs(el as HTMLDivElement, 11)}
      >
        <div className="container mx-auto px-4 md:px-8 text-center opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with a custom website 
            that perfectly represents your brand.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-8 py-2 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
