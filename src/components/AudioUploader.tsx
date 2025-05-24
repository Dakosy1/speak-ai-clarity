
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface AudioUploaderProps {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
}

const AudioUploader = ({ onFileUpload, isProcessing }: AudioUploaderProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('audio/')) {
        onFileUpload(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300
          ${isDragOver 
            ? 'border-teal-500 bg-teal-50' 
            : 'border-gray-300 bg-gray-50/50 hover:border-teal-400 hover:bg-teal-50/50'
          }
          ${isProcessing ? 'pointer-events-none opacity-60' : 'cursor-pointer'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*,.mp3,.wav"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isProcessing}
        />
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Upload Your Audio Recording
            </h3>
            <p className="text-gray-600 mb-4">
              Drag & drop your audio file here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports MP3, WAV files up to 10MB
            </p>
          </div>
          
          <Button 
            type="button"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Choose File'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioUploader;
