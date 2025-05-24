
import React from 'react';

interface ScoreIndicatorProps {
  score: number;
  maxScore?: number;
}

const ScoreIndicator = ({ score, maxScore = 10 }: ScoreIndicatorProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getColor = () => {
    if (percentage >= 80) return 'text-green-600 bg-green-100';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getBarColor = () => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getColor()}`}>
        {score}/{maxScore}
      </div>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${getBarColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 font-medium">
        {percentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default ScoreIndicator;
