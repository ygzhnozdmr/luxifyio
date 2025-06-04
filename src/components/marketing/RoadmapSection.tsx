import React from 'react';

interface RoadmapSectionProps {
  title: string;
  description: string;
  shortTermActions: string[];
  longTermGoals: string[];
  kpis: string[];
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  title,
  description,
  shortTermActions,
  longTermGoals,
  kpis
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Short-term Actions</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {shortTermActions.map((action, index) => (
              <li key={`action-${index}`}>{action}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Long-term Goals</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {longTermGoals.map((goal, index) => (
              <li key={`goal-${index}`}>{goal}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Performance Indicators</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {kpis.map((kpi, index) => (
              <li key={`kpi-${index}`}>{kpi}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;