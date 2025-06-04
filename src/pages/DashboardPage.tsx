import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, AlertTriangle, BarChart2, Target, Users, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import TipCard from '../components/marketing/TipCard';
import RoadmapSection from '../components/marketing/RoadmapSection';
import SummaryCard from '../components/marketing/SummaryCard';
import ExportButton from '../components/marketing/ExportButton';
import { MarketingPlan } from '../types';

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
              <div className="grid grid-cols-1 gap-4">
                {marketingPlan.tips.map((tip, index) => (
                  <TipCard key={index} tip={tip} />
                ))}
              </div>
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