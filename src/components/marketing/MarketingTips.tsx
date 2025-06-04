import React from 'react';

interface MarketingTipsProps {
  tips: string[];
}

export const MarketingTips: React.FC<MarketingTipsProps> = ({ tips }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Tips</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {tips.map((tip, index) => (
          <li key={`tip-${index}`}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}; 