
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Monitor, ShoppingCart, LifeBuoy, Palette, Smartphone, Globe, 
  Zap, Database, Search, BarChart 
} from 'lucide-react';

const Services = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
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

  // Main service details
  const mainServices = [
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Custom Website Design",
      description: "We create unique, responsive websites that capture your brand's essence and engage your audience. Each design is crafted with your specific needs in mind, ensuring a perfect blend of aesthetic appeal and functionality.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Unique, custom designs tailored to your brand",
        "Fully responsive layouts for all devices",
        "User experience (UX) focused approach",
        "Search engine optimization from the ground up"
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "E-Commerce Solutions",
      description: "Transform your business with a powerful online store that drives sales and provides seamless shopping experiences. Our e-commerce websites are designed to showcase your products beautifully while making management easy.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Secure payment gateway integration",
        "Inventory and product management",
        "Mobile-friendly shopping experience",
        "Order tracking and customer accounts"
      ]
    },
    {
      icon: <LifeBuoy className="h-12 w-12 text-primary" />,
      title: "Ongoing Support",
      description: "We don't just build and leave. Our ongoing support ensures your website remains secure, updated, and optimized. Regular maintenance, performance monitoring, and content updates keep your digital presence fresh and effective.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Regular security updates and backups",
        "Performance monitoring and optimization",
        "Content updates and management",
        "Technical support and problem solving"
      ]
    }
  ];

  // Additional services
  const additionalServices = [
    {
      icon: <Palette />,
      title: "Brand Identity",
      description: "Cohesive visual elements that strengthen your brand recognition."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Applications",
      description: "Custom mobile apps that extend your web presence to smartphones."
    },
    {
      icon: <Globe />,
      title: "Domain & Hosting",
      description: "Reliable hosting solutions with domain name registration services."
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and rankings."
    },
    {
      icon: <Database />,
      title: "Content Management",
      description: "Easy-to-use systems to update and manage your website content."
    },
    {
      icon: <Search />,
      title: "SEO Services",
      description: "Improve your visibility in search engine results pages."
    },
    {
      icon: <BarChart />,
      title: "Analytics Setup",
      description: "Track performance and gain insights about your visitors."
    }
  ];

  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            We offer comprehensive web development services to help you establish a strong online presence.
            From custom designs to e-commerce solutions and ongoing support, we've got you covered.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}></div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-32">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                ref={(el) => addToRefs(el, index)}
                className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr,1.5fr]' : 'lg:grid-cols-[1.5fr,1fr] lg:flex-row-reverse'} gap-8 lg:gap-16 items-center opacity-0`}
              >
                <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-lg relative z-10 w-full"
                    />
                  </div>
                </div>
                <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-primary mr-3"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-crafty-deep-purple text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50" ref={(el) => addToRefs(el, 3)}>
        <div className="container mx-auto px-4 md:px-8 opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of complementary services to enhance your web presence
              and deliver a complete digital solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                ref={(el) => addToRefs(el, index + 4)}
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding bg-primary/10" 
        ref={(el) => addToRefs(el, 11)}
      >
        <div className="container mx-auto px-4 md:px-8 text-center opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and create 
            a website that stands out from the competition.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-8 py-2 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
