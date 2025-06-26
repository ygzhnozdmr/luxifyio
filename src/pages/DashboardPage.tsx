import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, AlertTriangle, BarChart2, Target, Users, TrendingUp, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import TipCard from '../components/marketing/TipCard';
import RoadmapSection from '../components/marketing/RoadmapSection';
import SummaryCard from '../components/marketing/SummaryCard';
import ExportButton from '../components/marketing/ExportButton';
import { MarketingPlan } from '../types';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'tips'>('roadmap');

  useEffect(() => {
    const savedPlan = localStorage.getItem('marketingPlan');
    if (savedPlan) {
      setMarketingPlan(JSON.parse(savedPlan));
    }
  }, []);

  if (!marketingPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">No marketing plan found</h2>
          <p className="mt-4 text-gray-600">Please complete the onboarding process first.</p>
          <button
            onClick={() => navigate('/onboarding')}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Onboarding
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'tips'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tips
            </button>
            <Button
              variant="secondary"
              onClick={() => navigate('/offer')}
              className="ml-2"
            >
              Luxury Offer
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Crown className="w-5 h-5 mr-2 text-yellow-500" />
                  Marketing Plan Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{marketingPlan.summary}</p>
              </CardContent>
            </Card>

            {activeTab === 'roadmap' && (
              <div className="space-y-8">
                {marketingPlan.roadmap.map((section, index) => (
                  <RoadmapSection
                    key={`${section.title}-${index}`}
                    title={section.title}
                    description={section.description}
                    shortTermActions={section.shortTermActions}
                    longTermGoals={section.longTermGoals}
                    kpis={section.kpis}
                  />
                ))}
              </div>
            )}

            {activeTab === 'tips' && (
              <>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {marketingPlan.tips.map((tip, index) => (
                    <TipCard key={index} tip={tip} />
                  ))}
                </div>
                {/* Luxury Offer Cards */}
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6 text-center">Luxury Transformation Packages</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Package */}
                    <Card className="relative hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-navy-100 text-navy-600">
                          <span><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>
                        </div>
                        <CardTitle className="text-2xl font-serif">Starter Transformation</CardTitle>
                        <p className="text-gray-600 text-sm mt-2">Perfect for businesses beginning their luxury journey</p>
                        <div className="mt-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-navy-900">$49</span>
                            <span className="text-gray-500 ml-2">/month</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">1 Bespoke Marketing Plan per month</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Basic luxury tips & insights</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Email support</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Standard templates</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">PDF export</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Basic visual analysis</span></li>
                        </ul>
                        <Link to="/onboarding" className="block"><Button className="w-full" variant="primary" size="lg">Start Transformation</Button></Link>
                      </CardContent>
                    </Card>
                    {/* Professional Package */}
                    <Card className="relative ring-2 ring-gold-400 shadow-xl scale-105 transition-all duration-300">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                      </div>
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gold-100 text-gold-600">
                          <span><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>
                        </div>
                        <CardTitle className="text-2xl font-serif">Professional Elevation</CardTitle>
                        <p className="text-gray-600 text-sm mt-2">For brands ready to elevate their luxury presence</p>
                        <div className="mt-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-navy-900">$149</span>
                            <span className="text-gray-500 ml-2">/month</span>
                          </div>
                          <p className="text-sm text-green-600 mt-1">Save $298 per year</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">5 Tailored Marketing Plans per month</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Advanced AI-powered insights</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Priority support</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Custom brand templates</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Multiple export formats</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Advanced visual analysis</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Competitor analysis</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Social media strategies</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Email marketing templates</span></li>
                        </ul>
                        <Link to="/onboarding" className="block"><Button className="w-full" variant="secondary" size="lg">Go Professional</Button></Link>
                      </CardContent>
                    </Card>
                    {/* Enterprise Package */}
                    <Card className="relative hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-navy-100 text-navy-600">
                          <span><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>
                        </div>
                        <CardTitle className="text-2xl font-serif">Enterprise Luxury</CardTitle>
                        <p className="text-gray-600 text-sm mt-2">For luxury brands seeking comprehensive transformation</p>
                        <div className="mt-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-navy-900">$399</span>
                            <span className="text-gray-500 ml-2">/month</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Unlimited Marketing Plans</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">White-label solutions</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Dedicated account manager</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Custom integrations</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">API access</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Advanced analytics</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Team collaboration tools</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Custom AI training</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Quarterly strategy reviews</span></li>
                          <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span className="text-gray-700 text-sm">Priority feature requests</span></li>
                        </ul>
                        <Link to="/onboarding" className="block"><Button className="w-full" variant="primary" size="lg">Contact Sales</Button></Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-900">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <BarChart2 className="w-5 h-5 mr-2 text-blue-500 mt-0.5" />
                    <span>Regularly review and update your marketing plan</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 mr-2 text-green-500 mt-0.5" />
                    <span>Track your KPIs and adjust strategies accordingly</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 mr-2 text-purple-500 mt-0.5" />
                    <span>Stay consistent with your brand messaging</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-500 mt-0.5" />
                    <span>Monitor market trends and adapt your approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/onboarding')}
                className="bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              >
                Create New Plan
              </Button>
              <ExportButton marketingPlan={marketingPlan} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;