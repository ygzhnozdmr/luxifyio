import React, { useState } from 'react';
import { Crown, Check, Star, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import ContactForm from '../components/ui/ContactForm';

const OfferPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [contactOpen, setContactOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const packages = [
    {
      id: 'starter',
      name: 'Starter Transformation',
      description: 'Perfect for businesses beginning their luxury journey',
      icon: <Sparkles className="w-6 h-6" />,
      price: {
        monthly: 49,
        yearly: 490
      },
      features: [
        '1 Bespoke Marketing Plan per month',
        'Basic luxury tips & insights',
        'Email support',
        'Standard templates',
        'PDF export',
        'Basic visual analysis'
      ],
      cta: 'Start Transformation'
    },
    {
      id: 'professional',
      name: 'Professional Elevation',
      description: 'For brands ready to elevate their luxury presence',
      icon: <Crown className="w-6 h-6" />,
      price: {
        monthly: 149,
        yearly: 1490
      },
      features: [
        '5 Tailored Marketing Plans per month',
        'Advanced AI-powered insights',
        'Priority support',
        'Custom brand templates',
        'Multiple export formats',
        'Advanced visual analysis',
        'Competitor analysis',
        'Social media strategies',
        'Email marketing templates'
      ],
      cta: 'Go Professional',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Luxury',
      description: 'For luxury brands seeking comprehensive transformation',
      icon: <Star className="w-6 h-6" />,
      price: {
        monthly: 399,
        yearly: 3990
      },
      features: [
        'Unlimited Marketing Plans',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        'API access',
        'Advanced analytics',
        'Team collaboration tools',
        'Custom AI training',
        'Quarterly strategy reviews',
        'Priority feature requests'
      ],
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Personal Brand Consultant',
      description: '1-on-1 consultation with luxury marketing experts',
      price: 299,
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: 'Rush Delivery',
      description: 'Get your marketing plan within 24 hours',
      price: 99,
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: 'Custom Visual Assets',
      description: 'Professional design assets for your luxury brand',
      price: 199,
      icon: <Star className="w-5 h-5" />
    }
  ];

  const faqs = [
    {
      question: 'What makes Luxify different from other marketing tools?',
      answer: 'Luxify is specifically designed for luxury brand transformation. Our AI understands the nuances of luxury marketing, exclusivity principles, and high-end customer psychology.'
    },
    {
      question: 'Can I upgrade or downgrade my package anytime?',
      answer: 'Yes, you can change your package at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all packages. If you\'re not satisfied with your luxury marketing transformation, we\'ll refund your payment.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all packages come with a 14-day free trial. No credit card required to start your luxury transformation journey.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for Starter, priority support for Professional, and dedicated account management for Enterprise clients.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Transform Your Business Into a <span className="text-gold-400">Luxury Brand</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Choose the perfect package to elevate your marketing strategy and attract discerning clientele.
              </p>
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <div className="bg-navy-800 rounded-lg p-1 flex">
                  <button
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      billingCycle === 'monthly'
                        ? 'bg-gold-500 text-navy-900'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      billingCycle === 'yearly'
                        ? 'bg-gold-500 text-navy-900'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setBillingCycle('yearly')}
                  >
                    Yearly
                    <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 17%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`relative ${
                    pkg.popular 
                      ? 'ring-2 ring-gold-400 shadow-xl scale-105' 
                      : 'hover:shadow-lg'
                  } transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      pkg.popular ? 'bg-gold-100 text-gold-600' : 'bg-navy-100 text-navy-600'
                    }`}>
                      {pkg.icon}
                    </div>
                    <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-navy-900">
                          ${pkg.price[billingCycle]}
                        </span>
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-green-600 mt-1">
                          Save ${(pkg.price.monthly * 12) - pkg.price.yearly} per year
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={pkg.popular ? 'secondary' : 'primary'}
                      size="lg"
                      onClick={() => { setSelected(pkg.name); setContactOpen(true); }}
                    >
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                  Premium Add-ons
                </h2>
                <p className="text-gray-600">
                  Enhance your luxury transformation with our premium services
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {addOns.map((addon, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-gold-600">{addon.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">
                        {addon.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {addon.description}
                      </p>
                      <div className="text-2xl font-bold text-navy-900 mb-4">
                        ${addon.price}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => { setSelected(addon.name); setContactOpen(true); }}
                      >
                        Add to Package
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Everything you need to know about transforming your business into a luxury brand
                </p>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-navy-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="w-16 h-16 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of businesses that have successfully transformed into luxury brands with Luxify.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8"
                  onClick={() => { setSelected('Start Free Trial'); setContactOpen(true); }}
                >
                  Start Free Trial
                </Button>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal ContactForm */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl p-0 max-w-3xl w-full relative">
            <ContactForm selectedPackage={selected} onClose={() => setContactOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferPage; 