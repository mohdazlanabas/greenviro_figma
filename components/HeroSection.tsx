import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-sm">🌱 Leading Environmental Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight">
                Sustainable 
                <span className="text-primary block">Environmental</span>
                Solutions
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Transform your business with cutting-edge environmental technologies. 
                We provide comprehensive solutions for Waste Management, Renewable Energy, 
                and Waste To Energy solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl text-primary">700+</div>
                <div className="text-sm text-gray-600">GWh Renewable Energy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">3,500+</div>
                <div className="text-sm text-gray-600">Tons Waste Managed Everyday</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">1,500 m3</div>
                <div className="text-sm text-gray-600">Wastewater Leachate Treated</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="../../images/lsspv4.png"
                alt="Environmental solutions and sustainability"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Carbon Neutral</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-600">ISO 14001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
