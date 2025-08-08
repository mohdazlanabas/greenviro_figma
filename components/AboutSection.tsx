import { Button } from './ui/button';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const achievements = [
  {
    icon: Award,
    title: 'ISO 14001 Certified',
    description: 'Environmental management system certification'
  },
  {
    icon: Users,
    title: '50+ Expert Team',
    description: 'Highly qualified environmental engineers'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Serving clients across multiple countries'
  }
];

const benefits = [
  'Reduce environmental impact by up to 80%',
  'Achieve regulatory compliance effortlessly',
  '24/7 monitoring and support services',
  'Cost-effective sustainable solutions',
  'Proven track record with Fortune 500 companies'
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-sm">About GreenViro</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                Leading the Future of 
                <span className="text-primary block">Environmental Technology</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 15 years, GreenViro has been at the forefront of environmental innovation, 
                helping businesses transform their operations with sustainable technologies. Our 
                comprehensive solutions have enabled thousands of companies to reduce their 
                environmental footprint while improving operational efficiency.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-sm text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Partner With Us
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497436072909-f5e4be692560?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Environmental engineering team"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574937258890-6e8e0c8bc5e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Sustainable technology"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Water treatment facility"
                  className="rounded-lg shadow-lg w-full h-32 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Renewable energy systems"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl text-primary">15+</div>
                <div className="text-xs text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}