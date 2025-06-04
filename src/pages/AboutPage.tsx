import React from 'react';
import { Crown, Award, Target, Users, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-serif font-bold mb-6">
                About <span className="text-gold-400">Luxify</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We help luxury brands craft exceptional marketing strategies that resonate with discerning clientele and elevate their market position.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center">
                  <Crown className="h-8 w-8 text-gold-500" />
                </div>
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-8">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Luxify was founded on the belief that marketing in the luxury sector requires a fundamentally different approach—one that understands the nuances of exclusivity, craftsmanship, and emotional resonance.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                We've combined decades of luxury marketing expertise with cutting-edge AI technology to create a platform that delivers sophisticated, tailored marketing strategies for luxury brands across all sectors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                <div className="text-center">
                  <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    We're committed to delivering exceptional quality in every recommendation, matching the standards of the luxury brands we serve.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Precision</h3>
                  <p className="text-gray-600">
                    Our strategies are meticulously crafted to address the specific needs and opportunities of each unique luxury brand.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Exclusivity</h3>
                  <p className="text-gray-600">
                    We understand the delicate balance between visibility and exclusivity that defines successful luxury marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Luxury Marketing Expertise
              </h2>
              <p className="text-gray-600">
                Our team combines deep industry knowledge with advanced AI capabilities to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 border-b border-gray-200 pb-3">
                  Industries We Serve
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Haute Couture & Luxury Fashion
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Fine Jewelry & Watches
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Luxury Real Estate
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Premium Hospitality
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Fine Dining & Spirits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Luxury Automotive
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Art & Collectibles
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                    Private Aviation & Yachting
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-navy-900 mb-4 border-b border-gray-200 pb-3">
                  Our Approach
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700 mb-4">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-medium text-navy-800">Strategic Positioning</span>
                      <p className="text-sm mt-1">Defining your unique space in the luxury landscape</p>
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700 mb-4">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-medium text-navy-800">Brand Storytelling</span>
                      <p className="text-sm mt-1">Crafting compelling narratives that resonate with luxury consumers</p>
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700 mb-4">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-medium text-navy-800">Experiential Marketing</span>
                      <p className="text-sm mt-1">Creating memorable, exclusive experiences for your clientele</p>
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-medium text-navy-800">Digital Excellence</span>
                      <p className="text-sm mt-1">Maintaining luxury positioning across all digital touchpoints</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-navy-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Elevate Your Luxury Brand
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join the exclusive community of luxury brands using Luxify to refine their marketing strategies and connect with discerning clientele.
              </p>
              <Link to="/onboarding">
                <Button variant="secondary" size="lg" className="px-10">
                  Create Your Marketing Plan
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;