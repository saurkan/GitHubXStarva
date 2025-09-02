import React from 'react';
import { GitHubIcon } from './icons';

interface GitHubProfilePageProps {
  onOpenSprintApp: () => void;
}

const GitHubProfilePage: React.FC<GitHubProfilePageProps> = ({ onOpenSprintApp }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* GitHub Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <GitHubIcon className="w-8 h-8 text-gray-900" />
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-gray-900">Pull requests</a>
              <a href="#" className="hover:text-gray-900">Issues</a>
              <a href="#" className="hover:text-gray-900">Marketplace</a>
              <a href="#" className="hover:text-gray-900">Explore</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search GitHub"
                className="w-64 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200"
                />
                <h1 className="text-xl font-semibold text-gray-900 mb-1">John Developer</h1>
                <p className="text-gray-600 text-sm mb-4">johndeveloper</p>
                <p className="text-gray-700 text-sm mb-4">
                  Full-stack developer passionate about open source and building amazing web experiences.
                </p>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    1.2k followers
                  </span>
                  <span>·</span>
                  <span>890 following</span>
                </div>

                <button
                  onClick={onOpenSprintApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Generate GitHub Sprint
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <a href="#" className="px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-orange-500">
                    Overview
                  </a>
                  <a href="#" className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Repositories
                  </a>
                  <a href="#" className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Projects
                  </a>
                  <a href="#" className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Packages
                  </a>
                  <a href="#" className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Stars
                  </a>
                </nav>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pinned Repositories */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Pinned</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'awesome-react-app', description: 'A modern React application with TypeScript', language: 'TypeScript', stars: 42 },
                        { name: 'node-api-server', description: 'RESTful API server built with Node.js and Express', language: 'JavaScript', stars: 28 },
                        { name: 'css-animations', description: 'Collection of smooth CSS animations and transitions', language: 'CSS', stars: 15 },
                      ].map((repo) => (
                        <div key={repo.name} className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-blue-600 hover:underline cursor-pointer">{repo.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                  {repo.language}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  {repo.stars}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contribution Activity */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contribution activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-900">Created 3 commits in <span className="font-medium">awesome-react-app</span></p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-900">Opened pull request in <span className="font-medium">node-api-server</span></p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm text-gray-900">Starred <span className="font-medium">vercel/next.js</span></p>
                          <p className="text-xs text-gray-500">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contribution Graph */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contributions</h3>
                  <div className="bg-gray-50 rounded-md p-4">
                    <div className="grid grid-cols-53 gap-1 mb-2">
                      {Array.from({ length: 365 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-sm ${
                            Math.random() > 0.7 ? 'bg-green-500' :
                            Math.random() > 0.5 ? 'bg-green-300' :
                            Math.random() > 0.3 ? 'bg-green-200' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">Learn how we count contributions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfilePage;