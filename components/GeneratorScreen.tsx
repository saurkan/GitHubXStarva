import React, { useState, useCallback } from 'react';
import type { GitHubStats, TimeFrame } from '../types';
import { fetchRealGitHubStats } from '../services/githubService';
import GitHubInputForm from './GitHubInputForm';
import StatsImage from './StatsImage';
import { LoaderIcon } from './icons';

interface GeneratorScreenProps {
  githubUrl: string;
  githubToken: string;
  onLogout: () => void;
  onClose: () => void;
}

const GeneratorScreen: React.FC<GeneratorScreenProps> = ({ githubUrl, githubToken, onLogout, onClose }) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('yearly');
  const [date, setDate] = useState<Date>(new Date());
  const [showStatsModal, setShowStatsModal] = useState<boolean>(false);

  const handleGenerate = useCallback(async (
    imageFile: File, 
    options: { timeFrame: TimeFrame; date: Date }
  ) => {
    setIsLoading(true);
    setError(null);
    setStats(null);
    setBackgroundImage(null);
    setTimeFrame(options.timeFrame);
    setDate(options.date);

    const usernameMatch = githubUrl.match(/github\.com\/([^\/]+)/);
    if (!usernameMatch) { // Should not happen due to previous validation
      setError('Invalid GitHub profile URL.');
      setIsLoading(false);
      return;
    }
    const username = usernameMatch[1];

    try {
      const statsData = await fetchRealGitHubStats(username, githubToken, options);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setStats(statsData);
        setBackgroundImage(reader.result as string);
        setIsLoading(false);
      };
      reader.onerror = () => {
        setError('Failed to read the image file.');
        setIsLoading(false);
      };
      reader.readAsDataURL(imageFile);

    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Could not generate stats. ${errorMessage}`);
      setIsLoading(false);
    }
  }, [githubUrl, githubToken]);

  const handleReset = useCallback(() => {
    setStats(null);
    setBackgroundImage(null);
    setError(null);
    setIsLoading(false);
    setShowStatsModal(false);
  }, []);

  const handleViewStats = useCallback(() => {
    setShowStatsModal(true);
  }, []);

  const handleCloseStatsModal = useCallback(() => {
    setShowStatsModal(false);
  }, []);

  const handleResetAndClose = useCallback(() => {
    handleReset();
    onClose();
  }, [handleReset, onClose]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center p-8 h-96">
          <LoaderIcon className="w-16 h-16 animate-spin text-indigo-400" />
          <p className="mt-4 text-lg text-gray-300">Fetching real GitHub data...</p>
          <p className="text-sm text-gray-500">This may take a moment.</p>
        </div>
      );
    }

    if (stats && backgroundImage) {
      if (showStatsModal) {
        return (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Your GitHub Sprint</h3>
                <button
                  onClick={handleCloseStatsModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <StatsImage 
                stats={stats} 
                backgroundImageUrl={backgroundImage} 
                onReset={handleResetAndClose}
                onClose={handleCloseStatsModal}
                timeFrame={timeFrame} 
                date={date} 
              />
            </div>
          </div>
        );
      }
      
      return (
        <div className="p-8 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Stats Generated Successfully!</h3>
            <p className="text-gray-400">Your GitHub Sprint is ready to view.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500 transition-colors"
            >
              <BackIcon className="w-5 h-5"/>
              Create New
            </button>
            <button
              onClick={handleViewStats}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            >
              View Stats
            </button>
          </div>
        </div>
      );
    }

    return <GitHubInputForm onGenerate={handleGenerate} error={error} onLogout={onLogout} onClose={onClose} />;
  };
  
  const username = githubUrl.match(/github\.com\/([^\/]+)/)?.[1];

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Generate Your Review
        </h1>
        <p className="text-gray-400 mt-2">
            Logged in as <code className="bg-gray-900 text-indigo-300 px-2 py-1 rounded-md">{username}</code>.
        </p>
      </header>
      <div className="bg-gray-800 rounded-2xl shadow-2xl shadow-indigo-900/20 overflow-hidden border border-gray-700">
        {renderContent()}
      </div>
    </>
  );
};

export default GeneratorScreen;
