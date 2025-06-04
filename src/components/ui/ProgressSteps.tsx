import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ 
  steps, 
  currentStep,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="relative">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center 
                  transition-all duration-300 
                  ${index < currentStep 
                    ? 'bg-gold-500 text-white' 
                    : index === currentStep
                      ? 'bg-navy-700 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              
              {/* Step label */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-max">
                <span
                  className={`
                    text-xs font-medium whitespace-nowrap
                    ${index <= currentStep ? 'text-navy-800' : 'text-gray-500'}
                  `}
                >
                  {step}
                </span>
              </div>
            </div>
            
            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-1 mx-2
                  ${index < currentStep ? 'bg-gold-500' : 'bg-gray-200'}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;