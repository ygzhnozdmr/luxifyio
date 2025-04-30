import React from 'react';
import { Download, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import { MarketingPlan } from '../../types';

interface ExportButtonProps {
  marketingPlan: MarketingPlan;
}

const ExportButton: React.FC<ExportButtonProps> = ({ marketingPlan }) => {
  const handleExport = () => {
    // Create a formatted version of the marketing plan
    const formattedPlan = `
# Luxury Marketing Plan for ${marketingPlan.businessInfo.name}
Generated: ${new Date(marketingPlan.timestamp).toLocaleDateString()}

## Executive Summary
${marketingPlan.summary}

## Marketing Roadmap
${marketingPlan.roadmap.map(section => `
### ${section.title} (${section.timeframe})
${section.description}

${section.steps.map((step, i) => `
${i + 1}. **${step.title}**
   ${step.description}
`).join('')}
`).join('')}

## Marketing Tips
${marketingPlan.tips.map(tip => `
### ${tip.title}
Category: ${tip.category}
${tip.description}
${tip.example ? `Example: ${tip.example}` : ''}
`).join('')}
`;

    // Create a blob and download link
    const blob = new Blob([formattedPlan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${marketingPlan.businessInfo.name.replace(/\s+/g, '_')}_luxury_marketing_plan.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex space-x-2">
      <Button 
        onClick={handleExport}
        className="flex-1 sm:flex-none"
        icon={<Download className="w-4 h-4" />}
      >
        Export Plan
      </Button>
      <Button 
        variant="outline"
        className="flex-1 sm:flex-none"
        icon={<Share2 className="w-4 h-4" />}
      >
        Share
      </Button>
    </div>
  );
};

export default ExportButton;