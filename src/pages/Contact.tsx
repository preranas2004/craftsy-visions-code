
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: 'Not sure yet'
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, budget: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        budget: 'Not sure yet'
      });
      setFormSubmitting(false);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    // Format the WhatsApp URL with your number
    const whatsappNumber = "918431678966"; // Format: country code + number
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Let's turn your vision into reality
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}></div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind or want to learn more about our services? Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+918431678966" className="text-gray-600 hover:text-primary transition-colors">
                      +91 843 167 8966
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:info@craftsyvisions.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@craftsyvisions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div 
                className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100 cursor-pointer hover:bg-green-100 transition-colors"
                onClick={handleWhatsAppClick}
              >
                <div>
                  <h3 className="font-medium text-lg mb-3">Contact via WhatsApp</h3>
                  <button 
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Write your message here..." 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field min-h-[120px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="w-full input-field">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Less than $1,000">Less than $1,000</SelectItem>
                        <SelectItem value="$1,000 - $3,000">$1,000 - $3,000</SelectItem>
                        <SelectItem value="$3,000 - $5,000">$3,000 - $5,000</SelectItem>
                        <SelectItem value="$5,000+">$5,000+</SelectItem>
                        <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-crafty-deep-purple text-white mt-4"
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="h-96 bg-gray-200 w-full overflow-hidden rounded-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9952890959004!2d77.59791491482186!3d12.971598990855802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-border p-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">How long does it take to complete a website?</h3>
                <span className="text-2xl text-primary">+</span>
              </div>
              <div className="mt-2 hidden">
                <p className="text-gray-600">The timeline varies depending on the complexity of the project. A simple website might take 2-3 weeks, while more complex e-commerce sites can take 1-2 months. We'll provide a detailed timeline during our initial consultation.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-border p-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">What information do you need to start a project?</h3>
                <span className="text-2xl text-primary">+</span>
              </div>
              <div className="mt-2 hidden">
                <p className="text-gray-600">To get started, we'll need your brand guidelines (if available), content for the website, any design preferences, and a clear understanding of your goals. We'll guide you through this process during our kickoff meeting.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-border p-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">Do you offer website maintenance services?</h3>
                <span className="text-2xl text-primary">+</span>
              </div>
              <div className="mt-2 hidden">
                <p className="text-gray-600">Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our support includes regular updates, security monitoring, content updates, and technical troubleshooting.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-border p-4">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium">Can you help with website content?</h3>
                <span className="text-2xl text-primary">+</span>
              </div>
              <div className="mt-2 hidden">
                <p className="text-gray-600">While we primarily focus on design and development, we can recommend professional copywriters who specialize in creating engaging web content. We're happy to collaborate with them to ensure a cohesive final product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
