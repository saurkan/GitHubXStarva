import React, { useState, useCallback } from 'react';
import GitHubProfilePage from './components/GitHubProfilePage';
import LoginScreen from './components/LoginScreen';
import GeneratorScreen from './components/GeneratorScreen';

interface Credentials {
  url: string;
  token: string;
}

const App: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [showSprintApp, setShowSprintApp] = useState<boolean>(false);

  const handleLogin = useCallback((url: string, token: string) => {
    setCredentials({ url, token });
  }, []);

  const handleLogout = useCallback(() => {
    setCredentials(null);
    setShowSprintApp(false);
  }, []);

  const handleOpenSprintApp = useCallback(() => {
    setShowSprintApp(true);
  }, []);

  const handleCloseSprintApp = useCallback(() => {
    setShowSprintApp(false);
  }, []);

  if (!showSprintApp) {
    return <GitHubProfilePage onOpenSprintApp={handleOpenSprintApp} />;
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">GitHub Sprint</h2>
          <button
            onClick={handleCloseSprintApp}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {!credentials ? (
            <LoginScreen onLogin={handleLogin} />
          ) : (
            <GeneratorScreen 
              githubUrl={credentials.url} 
              githubToken={credentials.token} 
              onLogout={handleLogout}
              onClose={handleCloseSprintApp}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;