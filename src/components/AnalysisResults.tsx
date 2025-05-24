
import React from 'react';
import AnalysisCard from './AnalysisCard';

interface AnalysisData {
  clarity: { score: number; summary: string; suggestions: string[] };
  pace: { score: number; summary: string; suggestions: string[] };
  emotion: { score: number; summary: string; suggestions: string[] };
  fillers: { score: number; summary: string; suggestions: string[] };
  redundancy: { score: number; summary: string; suggestions: string[] };
}

interface AnalysisResultsProps {
  data: AnalysisData;
  fileName: string;
}

const AnalysisResults = ({ data, fileName }: AnalysisResultsProps) => {
  const overallScore = Math.round(
    (data.clarity.score + data.pace.score + data.emotion.score + data.fillers.score + data.redundancy.score) / 5
  );

  const getOverallColor = () => {
    if (overallScore >= 8) return 'text-green-600 bg-green-100';
    if (overallScore >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Overall Score Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analysis Complete
          </h2>
          <p className="text-gray-600 mb-4">
            Analysis for: <span className="font-medium">{fileName}</span>
          </p>
          <div className={`inline-flex px-6 py-3 rounded-full text-2xl font-bold ${getOverallColor()}`}>
            Overall Score: {overallScore}/10
          </div>
        </div>
      </div>

      {/* Analysis Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalysisCard
          title="Clarity & Conciseness"
          score={data.clarity.score}
          summary={data.clarity.summary}
          suggestions={data.clarity.suggestions}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <AnalysisCard
          title="Speaking Pace & Rhythm"
          score={data.pace.score}
          summary={data.pace.summary}
          suggestions={data.pace.suggestions}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <AnalysisCard
          title="Emotional Expression"
          score={data.emotion.score}
          summary={data.emotion.summary}
          suggestions={data.emotion.suggestions}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />

        <AnalysisCard
          title="Filler Words & Pauses"
          score={data.fillers.score}
          summary={data.fillers.summary}
          suggestions={data.fillers.suggestions}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          }
        />

        <div className="md:col-span-2">
          <AnalysisCard
            title="Redundant or Repetitive Content"
            score={data.redundancy.score}
            summary={data.redundancy.summary}
            suggestions={data.redundancy.suggestions}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          Download Report
        </button>
        <button className="px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-xl font-medium transition-all duration-300">
          Analyze Another Recording
        </button>
      </div>
    </div>
  );
};

export default AnalysisResults;
