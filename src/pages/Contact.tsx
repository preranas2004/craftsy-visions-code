
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Smartphone, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        subject: '',
        message: ''
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
            Have a project in mind or just want to say hello? I'd love to hear from you!
            Fill out the form below or reach out through WhatsApp.
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
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I'm always excited to discuss new
                projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:contact@craftsyvisions.com" className="text-gray-600 hover:text-primary transition-colors">
                      contact@craftsyvisions.com
                    </a>
                  </div>
                </div>

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
              </div>

              {/* WhatsApp Button */}
              <div 
                className="mt-12 p-6 bg-green-50 rounded-lg border border-green-100 cursor-pointer hover:bg-green-100 transition-colors"
                onClick={handleWhatsAppClick}
              >
                <div className="flex items-center">
                  <Smartphone className="h-10 w-10 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Contact via WhatsApp</h3>
                    <p className="text-gray-600 mb-3">
                      Click here to send a message directly through WhatsApp
                    </p>
                    <button 
                      className="flex items-center text-green-600 font-medium"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
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
                      className="input-field min-h-[150px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-crafty-deep-purple text-white"
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
        <div className="h-96 bg-gray-200 w-full">
          {/* This is a placeholder for a Google Map */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary/50 mx-auto mb-4" />
              <p className="text-gray-500">Map location: Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
