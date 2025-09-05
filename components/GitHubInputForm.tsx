import React, { useState, useRef, useCallback } from 'react';
import type { TimeFrame } from '../types';
import { UploadIcon, BackIcon } from './icons';

interface GitHubInputFormProps {
  onGenerate: (imageFile: File, options: { timeFrame: TimeFrame; date: Date }) => void;
  error: string | null;
  onLogout: () => void;
}

const GitHubInputForm: React.FC<GitHubInputFormProps> = ({ onGenerate, error, onLogout }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('yearly');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setLocalError("Image size cannot exceed 5MB.");
        return;
      }
      setImageFile(file);
      setLocalError(null);
    }
  };

  const triggerFileSelect = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
        setLocalError("Please upload a background image.");
        return;
    }
    setLocalError(null);
    onGenerate(imageFile, { timeFrame, date: selectedDate });
  };

  const renderDateSelector = () => {
    const currentYear = new Date().getFullYear();

    if (timeFrame === 'daily') {
      const today = new Date();
      const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      return (
         <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          max={dateString}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="w-full bg-material-dark-surface-container border border-material-dark-surface-container-high rounded-lg px-4 py-3 text-material-dark-on-surface focus:outline-none focus:ring-2 focus:ring-material-dark-primary focus:border-material-dark-primary transition-all"
        />
      );
    }

    if (timeFrame === 'monthly') {
      const years = Array.from({ length: 4 }, (_, i) => currentYear - i);
      const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }));
      
      return (
        <div className="flex gap-2">
           <select 
             value={selectedDate.getMonth()} 
             onChange={(e) => setSelectedDate(new Date(selectedDate.getFullYear(), parseInt(e.target.value), 1))}
            className="w-full bg-material-dark-surface-container border border-material-dark-surface-container-high rounded-lg px-4 py-3 text-material-dark-on-surface focus:outline-none focus:ring-2 focus:ring-material-dark-primary transition-all"
            >
              {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
           </select>
           <select 
             value={selectedDate.getFullYear()} 
             onChange={(e) => setSelectedDate(new Date(parseInt(e.target.value), selectedDate.getMonth(), 1))}
            className="w-full bg-material-dark-surface-container border border-material-dark-surface-container-high rounded-lg px-4 py-3 text-material-dark-on-surface focus:outline-none focus:ring-2 focus:ring-material-dark-primary transition-all"
            >
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
        </div>
      );
    }
    
    // Yearly
    const years = Array.from({ length: 4 }, (_, i) => currentYear - i);
    return (
      <div className="flex space-x-2">
        {years.map(year => (
          <button
            key={year}
            type="button"
            onClick={() => setSelectedDate(new Date(year, 0, 1))}
            className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-material-dark-primary shadow-material ${
              selectedDate.getFullYear() === year
                ? 'bg-material-dark-primary text-material-dark-surface' 
                : 'bg-material-dark-surface-container hover:bg-material-dark-surface-container-high text-material-dark-on-surface-variant'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="relative"
      style={{
        backgroundImage: 'url(/Untitled-design-22-1-2048x1152.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-material-dark-surface/90 backdrop-blur-sm"></div>
      <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
       <div>
        <label className="block text-sm font-medium text-material-dark-on-surface mb-3 flex items-center gap-2">
          <span className="material-icons text-base">schedule</span>
          Time Frame
        </label>
        <div className="flex space-x-2">
            {(['daily', 'monthly', 'yearly'] as TimeFrame[]).map(tf => (
                 <button
                    key={tf}
                    type="button"
                    onClick={() => setTimeFrame(tf)}
                    className={`flex-1 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-material-dark-primary capitalize shadow-material ${
                        timeFrame === tf
                        ? 'bg-material-dark-primary text-material-dark-surface' 
                        : 'bg-material-dark-surface-container hover:bg-material-dark-surface-container-high text-material-dark-on-surface-variant'
                    }`}
                >
                    {tf}
                </button>
            ))}
        </div>
      </div>
      
       <div>
        <label className="block text-sm font-medium text-material-dark-on-surface mb-3 flex items-center gap-2">
          <span className="material-icons text-base">date_range</span>
          Select Period
        </label>
        {renderDateSelector()}
      </div>

      <div>
        <label className="block text-sm font-medium text-material-dark-on-surface mb-3 flex items-center gap-2">
          <span className="material-icons text-base">image</span>
          Background Image
        </label>
        <div 
          onClick={triggerFileSelect}
          className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-material-dark-surface-container border-dashed rounded-lg cursor-pointer hover:border-material-dark-primary transition-colors bg-material-dark-surface-container/30"
        >
          <div className="space-y-1 text-center">
            <span className="material-icons text-4xl text-material-dark-on-surface-variant mx-auto block">cloud_upload</span>
            <div className="flex text-sm text-material-dark-on-surface-variant justify-center">
              <p className="pl-1">
                {imageFile ? imageFile.name : 'Upload a file or drag and drop'}
              </p>
            </div>
            <p className="text-xs text-material-dark-on-surface-variant">PNG, JPG, GIF up to 5MB</p>
          </div>
        </div>
        <input
          ref={fileInputRef}
          id="file-upload"
          name="file-upload"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleImageUpload}
        />
      </div>

      {(error || localError) && (
        <div className="bg-material-dark-error/20 border border-material-dark-error/50 text-material-dark-error px-4 py-3 rounded-lg text-sm flex items-center gap-2">
          <span className="material-icons text-base">error</span>
          {error || localError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <button
            onClick={onLogout}
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-material-dark-surface-container hover:bg-material-dark-surface-container-high text-material-dark-on-surface font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-material-dark-surface-container-high transition-all duration-200 shadow-material"
        >
            <span className="material-icons">arrow_back</span>
            Change User
        </button>
        <button
            type="submit"
            className="flex-1 bg-material-dark-primary hover:bg-material-dark-primary-variant text-material-dark-surface font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-material-dark-primary transition-all duration-200 transform hover:scale-105 shadow-material flex items-center justify-center gap-2"
        >
            <span className="material-icons">analytics</span>
            Generate Sprint
        </button>
      </div>
      </form>
    </div>
  );
};

export default GitHubInputForm;