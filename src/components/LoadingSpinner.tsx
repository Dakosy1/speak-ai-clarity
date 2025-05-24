
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-teal-500 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analyzing Your Speech
            </h3>
            <p className="text-gray-600">
              Our AI is processing your audio and generating detailed insights...
            </p>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full animate-pulse-gentle" style={{ width: '65%' }}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            This usually takes 30-60 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
