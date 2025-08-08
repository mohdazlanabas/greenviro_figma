import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Droplets, Recycle, Zap, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Water Treatment',
    description: 'Advanced wastewater treatment and water purification systems for industrial and municipal applications.',
    features: ['Industrial Wastewater', 'Drinking Water Purification', 'Sewage Treatment', 'Water Recycling']
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Comprehensive waste management solutions including recycling, disposal, and waste-to-energy systems.',
    features: ['Waste Collection', 'Recycling Programs', 'Hazardous Waste', 'Organic Waste Processing']
  },
  {
    icon: Zap,
    title: 'Renewable Energy',
    description: 'Sustainable energy solutions including solar, wind, and biomass energy systems for businesses.',
    features: ['Solar Installation', 'Wind Energy', 'Biomass Systems', 'Energy Storage']
  },
  {
    icon: Factory,
    title: 'Industrial Solutions',
    description: 'Environmental compliance and pollution control systems for industrial facilities and manufacturing.',
    features: ['Air Pollution Control', 'Environmental Monitoring', 'Compliance Consulting', 'Emission Reduction']
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Comprehensive Environmental Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From water treatment to renewable energy, we provide end-to-end environmental 
            solutions that help businesses achieve sustainability goals while ensuring compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl text-gray-900">{service.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <Button variant="ghost" className="w-full justify-between text-primary hover:bg-primary/10 p-0 h-auto pt-4">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}