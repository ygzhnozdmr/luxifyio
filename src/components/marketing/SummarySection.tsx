import React from 'react';

interface SummarySectionProps {
  summary: string;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ summary }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Plan Summary</h3>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
}; 