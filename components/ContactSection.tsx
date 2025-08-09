import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+60 4-5404 424',
    subtitle: 'Mon-Fri 9AM-4PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@greenviro.my',
    subtitle: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Kuala Lumpur, Malaysia',
    subtitle: 'Schedule an appointment'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 9AM-4PM',
    subtitle: 'Schedule an appointment'
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm">Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contact our environmental experts today for a free consultation and discover 
            how we can help your business achieve sustainability goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl text-gray-900">Get a Free Consultation</h3>
              <p className="text-gray-600">
                Our experts are ready to help you find the perfect environmental solution for your business needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-gray-200 hover:border-primary/20 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-primary mb-1">{info.content}</p>
                          <p className="text-xs text-gray-600">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-900 mb-1">Emergency Hotline</h4>
                    <p className="text-red-600 mb-1">+60 3-2181 8888</p>
                    <p className="text-xs text-gray-600">24/7 Emergency Response</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Full Name *</label>
                      <Input 
                        placeholder="Enter your full name" 
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Company</label>
                      <Input 
                        placeholder="Your company name" 
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Email Address *</label>
                      <Input 
                        type="email"
                        placeholder="your.email@company.com" 
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Phone Number</label>
                      <Input 
                        placeholder="+60 12-345 6789" 
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Service Interested In</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none">
                      <option>Select a service</option>
                      <option>Water Treatment</option>
                      <option>Waste Management</option>
                      <option>Renewable Energy</option>
                      <option>Industrial Solutions</option>
                      <option>Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                      rows={4}
                      className="border-gray-300 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white px-8 flex-1"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="border-primary text-primary hover:bg-primary/10 px-8"
                    >
                      Schedule Call
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    By submitting this form, you agree to our privacy policy. We'll use your information 
                    to contact you about our services and may share relevant industry insights.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}