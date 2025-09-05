@@ .. @@
   return (
-    <div className="min-h-screen bg-gray-900 text-white">
+    <div className="min-h-screen bg-material-dark-surface text-material-dark-on-surface">
       {/* GitHub Header */}
-      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
+      <header className="bg-material-dark-surface-variant border-b border-material-dark-surface-container px-4 py-3 shadow-material">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
           <div className="flex items-center space-x-4">
-            <GitHubIcon className="w-8 h-8 text-white" />
+            <GitHubIcon className="w-8 h-8 text-material-dark-on-surface" />
             <nav className="hidden md:flex space-x-6">
-              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pull requests</a>
-              <a href="#" className="text-gray-300 hover:text-white transition-colors">Issues</a>
-              <a href="#" className="text-gray-300 hover:text-white transition-colors">Marketplace</a>
-              <a href="#" className="text-gray-300 hover:text-white transition-colors">Explore</a>
+              <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface transition-colors">Pull requests</a>
+              <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface transition-colors">Issues</a>
+              <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface transition-colors">Marketplace</a>
+              <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface transition-colors">Explore</a>
             </nav>
           </div>
           <div className="flex items-center space-x-4">
-            <div className="relative">
-              <input 
-                type="text" 
-                placeholder="Search GitHub" 
-                className="bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
-              />
-            </div>
-            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
+            <span className="material-icons text-material-dark-on-surface-variant cursor-pointer hover:text-material-dark-on-surface">search</span>
+            <span className="material-icons text-material-dark-on-surface-variant cursor-pointer hover:text-material-dark-on-surface">notifications</span>
+            <div className="w-8 h-8 bg-material-dark-surface-container rounded-full"></div>
           </div>
         </div>
       </header>
 
       {/* Main Content */}
-      <div className="max-w-7xl mx-auto px-4 py-8">
+      <div className="max-w-7xl mx-auto px-4 py-6">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {/* Left Sidebar */}
           <div className="lg:col-span-1">
-            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
+            <div className="bg-material-dark-surface-variant rounded-lg p-6 border border-material-dark-surface-container shadow-material">
               <div className="text-center mb-6">
-                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
-                <h1 className="text-2xl font-bold text-white">octocat</h1>
-                <p className="text-gray-400">The Octocat</p>
+                <div className="w-24 h-24 bg-material-dark-surface-container rounded-full mx-auto mb-4 flex items-center justify-center">
+                  <span className="material-icons text-4xl text-material-dark-on-surface-variant">person</span>
+                </div>
+                <h1 className="text-2xl font-medium text-material-dark-on-surface">octocat</h1>
+                <p className="text-material-dark-on-surface-variant">The Octocat</p>
               </div>
               
-              <button 
+              <button
                 onClick={onOpenSprintApp}
-                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-transform transform hover:scale-105 mb-4"
+                className="w-full bg-material-dark-primary hover:bg-material-dark-primary-variant text-material-dark-surface font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-material-dark-primary transition-all duration-200 transform hover:scale-105 mb-6 shadow-material elevation-2"
               >
-                Generate GitHub Sprint
+                <span className="flex items-center justify-center gap-2">
+                  <span className="material-icons">analytics</span>
+                  Generate GitHub Sprint
+                </span>
               </button>
               
-              <div className="space-y-3 text-sm">
-                <div className="flex items-center text-gray-300">
-                  <span className="w-4 h-4 mr-2">👥</span>
+              <div className="space-y-4 text-sm">
+                <div className="flex items-center text-material-dark-on-surface-variant">
+                  <span className="material-icons text-base mr-3">people</span>
                   <span>42 followers · 24 following</span>
                 </div>
-                <div className="flex items-center text-gray-300">
-                  <span className="w-4 h-4 mr-2">🏢</span>
+                <div className="flex items-center text-material-dark-on-surface-variant">
+                  <span className="material-icons text-base mr-3">business</span>
                   <span>@github</span>
                 </div>
-                <div className="flex items-center text-gray-300">
-                  <span className="w-4 h-4 mr-2">📍</span>
+                <div className="flex items-center text-material-dark-on-surface-variant">
+                  <span className="material-icons text-base mr-3">location_on</span>
                   <span>San Francisco</span>
                 </div>
               </div>
@@ .. @@
           {/* Main Content */}
           <div className="lg:col-span-3">
             {/* Navigation Tabs */}
-            <div className="border-b border-gray-700 mb-6">
+            <div className="border-b border-material-dark-surface-container mb-6">
               <nav className="flex space-x-8">
-                <a href="#" className="border-b-2 border-orange-500 text-white pb-3 px-1">Overview</a>
-                <a href="#" className="text-gray-400 hover:text-white pb-3 px-1 transition-colors">Repositories</a>
-                <a href="#" className="text-gray-400 hover:text-white pb-3 px-1 transition-colors">Projects</a>
-                <a href="#" className="text-gray-400 hover:text-white pb-3 px-1 transition-colors">Packages</a>
+                <a href="#" className="border-b-2 border-material-dark-primary text-material-dark-on-surface pb-3 px-1 font-medium">Overview</a>
+                <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface pb-3 px-1 transition-colors">Repositories</a>
+                <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface pb-3 px-1 transition-colors">Projects</a>
+                <a href="#" className="text-material-dark-on-surface-variant hover:text-material-dark-on-surface pb-3 px-1 transition-colors">Packages</a>
               </nav>
             </div>
 
             {/* Pinned Repositories */}
             <div className="mb-8">
-              <h2 className="text-lg font-semibold text-white mb-4">Pinned</h2>
+              <h2 className="text-lg font-medium text-material-dark-on-surface mb-4">Pinned</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[1, 2, 3, 4].map((i) => (
                   <div 
                     key={i}
-                    className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
+                    className="bg-material-dark-surface-variant border border-material-dark-surface-container rounded-lg p-4 hover:border-material-dark-surface-container-high transition-colors shadow-material"
                   >
-                    <h3 className="font-semibold text-blue-400 mb-2">Hello-World</h3>
-                    <p className="text-gray-400 text-sm mb-3">My first repository on GitHub!</p>
+                    <h3 className="font-medium text-material-dark-primary mb-2">Hello-World</h3>
+                    <p className="text-material-dark-on-surface-variant text-sm mb-3">My first repository on GitHub!</p>
                     <div className="flex items-center justify-between text-xs">
-                      <div className="flex items-center space-x-4 text-gray-400">
-                        <span className="flex items-center">
-                          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></span>
+                      <div className="flex items-center space-x-4 text-material-dark-on-surface-variant">
+                        <span className="flex items-center gap-1">
+                          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                           JavaScript
                         </span>
-                        <span className="flex items-center">
-                          ⭐ 42
+                        <span className="flex items-center gap-1">
+                          <span className="material-icons text-sm">star</span>
+                          42
                         </span>
                       </div>
                     </div>
@@ .. @@
             {/* Contribution Activity */}
             <div>
-              <h2 className="text-lg font-semibold text-white mb-4">Contribution activity</h2>
-              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
+              <h2 className="text-lg font-medium text-material-dark-on-surface mb-4">Contribution activity</h2>
+              <div className="bg-material-dark-surface-variant border border-material-dark-surface-container rounded-lg p-6 shadow-material">
                 {/* Contribution Graph Placeholder */}
-                <div className="mb-6">
-                  <p className="text-sm text-gray-400 mb-3">1,337 contributions in the last year</p>
-                  <div className="grid grid-cols-53 gap-1">
+                <div className="mb-4">
+                  <p className="text-sm text-material-dark-on-surface-variant mb-4">1,337 contributions in the last year</p>
+                  <div className="grid grid-cols-53 gap-1 mb-4">
                     {Array.from({ length: 371 }).map((_, i) => (
                       <div 
                         key={i}
-                        className={`w-3 h-3 rounded-sm ${
+                        className={`w-2.5 h-2.5 rounded-sm ${
                           Math.random() > 0.7 
-                            ? 'bg-green-500' 
+                            ? 'bg-material-dark-secondary' 
                             : Math.random() > 0.5 
-                              ? 'bg-green-700' 
-                              : 'bg-gray-700'
+                              ? 'bg-material-dark-secondary opacity-60' 
+                              : 'bg-material-dark-surface-container'
                         }`}
                       />
                     ))}
                   </div>
+                  <div className="flex justify-between items-center text-xs text-material-dark-on-surface-variant">
+                    <span>Less</span>
+                    <div className="flex gap-1">
+                      <div className="w-2.5 h-2.5 bg-material-dark-surface-container rounded-sm"></div>
+                      <div className="w-2.5 h-2.5 bg-material-dark-secondary opacity-30 rounded-sm"></div>
+                      <div className="w-2.5 h-2.5 bg-material-dark-secondary opacity-60 rounded-sm"></div>
+                      <div className="w-2.5 h-2.5 bg-material-dark-secondary rounded-sm"></div>
+                    </div>
+                    <span>More</span>
+                  </div>
                 </div>
               </div>
             </div>
@@ .. @@