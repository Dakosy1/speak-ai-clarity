
import React from 'react';
import ScoreIndicator from './ScoreIndicator';

interface AnalysisCardProps {
  title: string;
  score: number;
  summary: string;
  suggestions: string[];
  icon: React.ReactNode;
}

const AnalysisCard = ({ title, score, summary, suggestions, icon }: AnalysisCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="mb-4">
        <ScoreIndicator score={score} />
      </div>
      
      <div className="space-y-3">
        <p className="text-gray-700 leading-relaxed">{summary}</p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">Suggestions:</h4>
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
