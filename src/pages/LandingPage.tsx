import React from 'react';
import { ArrowRight, Sparkles, Users, LineChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy-900 text-white overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-20" 
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Elevate Your <span className="text-gold-400">Luxury</span> Marketing Strategy
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                AI-powered insights and personalized recommendations to help your luxury brand stand out in an exclusive market.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="w-full sm:w-auto">
                    Create Your Luxury Plan <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Luxury Marketing. <span className="text-gold-500">Reimagined.</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform analyzes your luxury brand and provides tailored strategies that resonate with discerning clientele.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Strategic Roadmaps</h3>
                <p className="text-gray-600">
                  Custom marketing roadmaps designed specifically for luxury brands in your industry.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Audience Insights</h3>
                <p className="text-gray-600">
                  Deep understanding of luxury consumers and their unique expectations and behaviors.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Competitive Analysis</h3>
                <p className="text-gray-600">
                  Stay ahead of competitors with actionable insights into the luxury marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform makes it easy to transform your luxury marketing strategy in just a few steps.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Share Your Business</h3>
                  <p className="text-gray-600">
                    Tell us about your luxury brand, clientele, and objectives.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Upload Visuals</h3>
                  <p className="text-gray-600">
                    Share images of your products, spaces, or brand elements.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Receive Your Plan</h3>
                  <p className="text-gray-600">
                    Get your personalized luxury marketing strategy and roadmap.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <Link to="/onboarding">
                  <Button size="lg">
                    Start Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Trusted by Luxury Brands</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how Luxify has helped transform luxury marketing strategies worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex space-x-1 text-gold-400 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "Luxify's personalized roadmap helped us reposition our jewelry brand and increase our high-value clientele by 40% in just six months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-navy-900">Sophia Laurent</h4>
                    <p className="text-sm text-gray-600">Marketing Director, Éclat Jewels</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex space-x-1 text-gold-400 mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "The insights on exclusivity strategies transformed how we approach our limited edition collections, resulting in unprecedented demand."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-navy-900">Marcus Chen</h4>
                    <p className="text-sm text-gray-600">Founder, Ethereal Residences</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Elevate Your Luxury Brand Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the exclusive community of luxury brands transforming their marketing with Luxify.
              </p>
              <Link to="/onboarding">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-10"
                >
                  Get Started
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

export default LandingPage;