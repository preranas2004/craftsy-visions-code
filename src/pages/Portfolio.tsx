
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Layout, Star, CheckCircle } from 'lucide-react';

const Portfolio = () => {
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

  // Portfolio projects - as a beginner, these are "coming soon" projects
  const portfolioProjects = [
    {
      title: "Modern E-commerce Store",
      category: "E-commerce",
      description: "A sleek online shopping experience with intuitive navigation and secure payment processing. (Coming Soon)",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      status: "In Progress"
    },
    {
      title: "Restaurant Website",
      category: "Business",
      description: "An elegant website for a local restaurant featuring online reservations and menu displays. (Coming Soon)",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      status: "Planning"
    },
    {
      title: "Creative Portfolio",
      category: "Portfolio",
      description: "A dynamic portfolio website showcasing creative work with interactive elements. (Coming Soon)",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      status: "Planning"
    }
  ];

  // Skills
  const skills = [
    { name: "HTML & CSS", level: "Learning" },
    { name: "JavaScript", level: "Learning" },
    { name: "React", level: "Beginning" },
    { name: "UI/UX Design", level: "Learning" },
    { name: "Responsive Design", level: "Learning" },
    { name: "WordPress", level: "Beginning" }
  ];

  return (
    <div className="pt-20">
      {/* Portfolio Hero */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">My Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            I'm just starting my journey in web development, excited to learn and grow in this field.
            Below you'll find my skills and upcoming projects that I'm planning to work on.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-padding" ref={(el) => addToRefs(el as HTMLDivElement, 0)}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center opacity-0">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                Hello! I'm Prerana, a passionate beginner in web development. I'm currently building my skills in creating 
                beautiful, functional websites that help businesses and individuals establish their online presence.
              </p>
              <p className="text-gray-600 mb-6">
                While I'm at the beginning of my journey, I'm committed to learning and growing in this field. I'm 
                fascinated by how good design and clean code can create meaningful digital experiences.
              </p>
              <p className="text-gray-600 mb-6">
                My goal is to help clients bring their visions to life through creative web solutions, 
                even as I continue to develop my skills and expand my portfolio.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Creative Design</div>
                <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Learning Web Development</div>
                <div className="bg-primary/10 px-4 py-2 rounded-full text-primary font-medium">Problem Solving</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                alt="Web Development" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50" ref={(el) => addToRefs(el as HTMLDivElement, 1)}>
        <div className="container mx-auto px-4 md:px-8 opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm continuously learning and improving my skills in these areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                ref={(el) => addToRefs(el as HTMLDivElement, index + 2)}
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {skill.name}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Status:</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Projects */}
      <section className="section-padding" ref={(el) => addToRefs(el as HTMLDivElement, 8)}>
        <div className="container mx-auto px-4 md:px-8 opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Upcoming Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are projects I'm planning to work on as I continue developing my skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                ref={(el) => addToRefs(el as HTMLDivElement, index + 9)}
                style={{animationDelay: `${0.2 * (index + 1)}s`}}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Code className="h-4 w-4 mr-1" />
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section-padding bg-primary/10" ref={(el) => addToRefs(el as HTMLDivElement, 12)}>
        <div className="container mx-auto px-4 md:px-8 opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Even though I'm just getting started, I bring passion and commitment to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Fresh Perspective",
                desc: "I bring new ideas and a modern approach to web design."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Commitment to Learning",
                desc: "I'm constantly improving my skills to deliver better results."
              },
              {
                icon: <Layout className="h-10 w-10 text-primary" />,
                title: "Attention to Detail",
                desc: "I focus on the small things that make a big difference."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                ref={(el) => addToRefs(el as HTMLDivElement, i + 13)}
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

      {/* CTA Section */}
      <section className="section-padding" ref={(el) => addToRefs(el as HTMLDivElement, 16)}>
        <div className="container mx-auto px-4 md:px-8 text-center opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm excited to collaborate on your next web project and help bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-8 py-2 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
