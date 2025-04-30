import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Sparkles } from 'lucide-react';

interface SummaryCardProps {
  businessName: string;
  summary: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ businessName, summary }) => {
  return (
    <Card className="bg-gradient-to-br from-navy-800 to-navy-900 text-white">
      <CardHeader className="border-b border-navy-700 pb-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-gold-400" />
          <CardTitle className="text-xl font-serif">Executive Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <p className="text-lg font-medium text-gold-300 mb-2">
          {businessName}'s Luxury Marketing Strategy
        </p>
        <p className="text-gray-300 leading-relaxed">
          {summary}
        </p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;