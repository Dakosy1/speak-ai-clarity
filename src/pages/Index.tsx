
import React, { useState } from 'react';
import Header from '@/components/Header';
import AudioUploader from '@/components/AudioUploader';
import LoadingSpinner from '@/components/LoadingSpinner';
import AnalysisResults from '@/components/AnalysisResults';

// Mock analysis data for demonstration
const mockAnalysisData = {
  clarity: {
    score: 8,
    summary: "Your speech demonstrates excellent clarity with well-articulated words and coherent message structure. Your ideas flow logically and are easy to follow.",
    suggestions: [
      "Consider using more specific examples to support your points",
      "Practice transitioning between ideas more smoothly",
      "Maintain this level of clarity in longer presentations"
    ]
  },
  pace: {
    score: 6,
    summary: "Your speaking pace varies throughout the recording. While generally appropriate, there are moments where you speak too quickly, which may impact comprehension.",
    suggestions: [
      "Practice speaking at a consistent 150-160 words per minute",
      "Use strategic pauses to emphasize important points",
      "Slow down when introducing new concepts or complex information"
    ]
  },
  emotion: {
    score: 7,
    summary: "Good emotional range and engagement. Your voice conveys enthusiasm and confidence, though there's room for more dynamic expression in key moments.",
    suggestions: [
      "Vary your vocal pitch more to emphasize different emotions",
      "Use vocal stress to highlight important words or phrases",
      "Practice expressing contrasting emotions within the same speech"
    ]
  },
  fillers: {
    score: 5,
    summary: "Moderate use of filler words detected. Words like 'um', 'uh', and 'like' appear 12 times throughout your recording, which can distract from your message.",
    suggestions: [
      "Practice pausing silently instead of using filler words",
      "Record yourself regularly to become more aware of filler usage",
      "Slow down your speech to give yourself more thinking time"
    ]
  },
  redundancy: {
    score: 7,
    summary: "Minimal redundancy with good content organization. Your speech efficiently covers topics without excessive repetition, maintaining audience engagement.",
    suggestions: [
      "Consider summarizing key points at the end for reinforcement",
      "Use varied vocabulary to express similar concepts",
      "Structure longer speeches with clear sections to avoid unintentional repetition"
    ]
  }
};

const Index = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name);
    setUploadedFileName(file.name);
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const resetAnalysis = () => {
    setAnalysisComplete(false);
    setIsProcessing(false);
    setUploadedFileName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-inter">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!analysisComplete && !isProcessing && (
          <div className="text-center space-y-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Speaking Skills with 
                <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  {" "}AI Analysis
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Upload your speech recording and get detailed insights on clarity, pace, emotional expression, and more. 
                Perfect for presentations, interviews, and public speaking practice.
              </p>
            </div>
            
            <AudioUploader onFileUpload={handleFileUpload} isProcessing={isProcessing} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Upload Audio</h3>
                <p className="text-sm text-gray-600">Simply drag & drop or select your MP3/WAV file</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                <p className="text-sm text-gray-600">Our AI analyzes your speech across 5 key areas</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Get Insights</h3>
                <p className="text-sm text-gray-600">Receive detailed feedback and improvement tips</p>
              </div>
            </div>
          </div>
        )}
        
        {isProcessing && <LoadingSpinner />}
        
        {analysisComplete && (
          <AnalysisResults 
            data={mockAnalysisData} 
            fileName={uploadedFileName}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
