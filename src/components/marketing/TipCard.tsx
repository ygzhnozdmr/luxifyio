import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { TrendingUp, Clock, BarChart, Star, MessageCircle } from 'lucide-react';

interface TipCardProps {
  tip: string;
}

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-50 mb-2">
              <Clock className="h-5 w-5 mr-1" />
              General
            </div>
            <CardTitle className="text-lg mt-1">Marketing Tip</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{tip}</p>
      </CardContent>
    </Card>
  );
};

export default TipCard;