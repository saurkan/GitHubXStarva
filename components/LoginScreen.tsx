import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: (url: string, token: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [githubUrl, setGithubUrl] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!githubUrl) {
      setError("Please enter a GitHub profile URL.");
      return;
    }
    const usernameMatch = githubUrl.match(/github\.com\/([^\/]+)/);
    if (!usernameMatch) {
      setError('Invalid GitHub profile URL. Please use a format like https://github.com/username');
      return;
    }
    if (!githubToken) {
      setError("Please enter your GitHub Personal Access Token.");
      return;
    }
    setError(null);
    onLogin(githubUrl, githubToken);
  };

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide text-material-dark-on-surface">
          GitHub Sprint
        </h1>
        <p className="text-material-dark-on-surface-variant mt-3 text-lg">Generate your coding analytics summary</p>
      </header>
      <div 
        className="bg-material-dark-surface-variant rounded-2xl shadow-material-lg overflow-hidden border border-material-dark-surface-container relative"
        style={{
          backgroundImage: 'url(/Untitled-design-22-1-2048x1152.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-material-dark-surface/90 backdrop-blur-sm"></div>
        <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
          <div>
            <label htmlFor="github-url" className="block text-sm font-medium text-material-dark-on-surface mb-3 flex items-center gap-2">
              <span className="material-icons text-base">link</span>
              GitHub Profile URL
            </label>
            <input
              id="github-url"
              type="text"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username"
              className="w-full bg-material-dark-surface-container border border-material-dark-surface-container-high rounded-lg px-4 py-3 text-material-dark-on-surface placeholder-material-dark-on-surface-variant focus:outline-none focus:ring-2 focus:ring-material-dark-primary focus:border-material-dark-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="github-token" className="block text-sm font-medium text-material-dark-on-surface mb-3 flex items-center gap-2">
              <span className="material-icons text-base">key</span>
              GitHub Personal Access Token
            </label>
            <input
              id="github-token"
              type="password"
              value={githubToken}
              onChange={(e) => setGithubToken(e.target.value)}
              placeholder="ghp_..."
              className="w-full bg-material-dark-surface-container border border-material-dark-surface-container-high rounded-lg px-4 py-3 text-material-dark-on-surface placeholder-material-dark-on-surface-variant focus:outline-none focus:ring-2 focus:ring-material-dark-primary focus:border-material-dark-primary transition-all"
            />
            <p className="mt-3 text-xs text-material-dark-on-surface-variant">
              A token with <code className="bg-material-dark-surface px-2 py-1 rounded text-material-dark-secondary">read:user</code> and <code className="bg-material-dark-surface px-2 py-1 rounded text-material-dark-secondary">public_repo</code> scopes is required. Your token is not stored.
            </p>
          </div>
          
          {error && (
            <div className="bg-material-dark-error/20 border border-material-dark-error/50 text-material-dark-error px-4 py-3 rounded-lg text-sm flex items-center gap-2">
              <span className="material-icons text-base">error</span>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-material-dark-primary hover:bg-material-dark-primary-variant text-material-dark-surface font-medium py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-material-dark-primary transition-all duration-200 transform hover:scale-105 shadow-material flex items-center justify-center gap-2"
          >
            <span className="material-icons">arrow_forward</span>
            Continue
          </button>
        </form>
      </div>
      <footer className="text-center mt-8 text-material-dark-on-surface-variant text-sm space-y-1">
          <p className="flex items-center justify-center gap-2">
            <span className="material-icons text-base">api</span>
            Stats generated using the official GitHub API
          </p>
      </footer>
    </>
  );
};

export default LoginScreen;
