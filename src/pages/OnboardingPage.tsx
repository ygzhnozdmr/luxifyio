import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';
import Header from '../components/Header';
import ProgressSteps from '../components/ui/ProgressSteps';
import BusinessInfoForm from '../components/onboarding/BusinessInfoForm';
import VisualUploadForm from '../components/onboarding/VisualUploadForm';
import { BusinessInfo, MarketingPlan } from '../types';
import { generateDummyMarketingPlan } from '../utils/dummyData';
import { saveBusinessInfoToGemini, saveMarketingPlanToGemini } from '../services/geminiService';

type Step = 'business-info' | 'visual-upload' | 'generating-plan';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('business-info');
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [marketingPlan, setMarketingPlan] = useState<MarketingPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const steps = ["Business Info", "Visual Analysis", "Generating Plan"];

  const handleBusinessInfoSubmit = async (info: BusinessInfo) => {
    try {
      setBusinessInfo(info);
      await saveBusinessInfoToGemini(info);
      setStep('visual-upload');
    } catch (error) {
      console.error('Error in business info submission:', error);
    }
  };

  const handleVisualUploadSubmit = async (images: string[]) => {
    if (!businessInfo) return;

    try {
      setStep('generating-plan');
      const initialPlan: MarketingPlan = {
        businessInfo,
        summary: '',
        roadmap: [],
        tips: []
      };

      const updatedPlan = await saveMarketingPlanToGemini(initialPlan);
      setMarketingPlan(updatedPlan);
      
      // Save to localStorage
      localStorage.setItem('marketingPlan', JSON.stringify(updatedPlan));
      
      // Navigate to dashboard or show success message
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error in onboarding process:', error);
      setStep('visual-upload');
    }
  };

  const handleBack = () => {
    setStep('business-info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif font-bold text-navy-900 mb-2">
              Let's Create Your Luxury Marketing Plan
            </h1>
            <p className="text-gray-600">
              Answer a few questions about your business to get personalized luxury marketing strategies.
            </p>
          </div>
          
          <div className="mb-12">
            <ProgressSteps steps={steps} currentStep={step === 'business-info' ? 0 : step === 'visual-upload' ? 1 : 2} className="mb-8" />
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
            {step === 'business-info' && (
              <BusinessInfoForm onSubmit={handleBusinessInfoSubmit} />
            )}
            
            {step === 'visual-upload' && businessInfo && (
              <VisualUploadForm 
                onSubmit={handleVisualUploadSubmit}
                onBack={handleBack}
              />
            )}
            
            {step === 'generating-plan' && (
              <div className="text-center py-12">
                <div className="animate-pulse">
                  <Crown className="w-16 h-16 text-gold-400 mx-auto mb-6" />
                </div>
                <h3 className="text-xl font-medium text-navy-800 mb-3">
                  Creating Your Luxury Marketing Plan
                </h3>
                <p className="text-gray-600 mb-6">
                  Our AI is analyzing your business and crafting a personalized luxury marketing strategy...
                </p>
                <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gold-400 h-2.5 rounded-full animate-[grow_2.5s_ease-in-out]" style={{ width: '100%' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;