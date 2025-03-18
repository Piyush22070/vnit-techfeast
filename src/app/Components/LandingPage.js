import React from 'react';

const LandingPage = ({ inputValue, setInputValue, handleSubmit, handleKeyPress }) => {
  return (
    <>
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        <code className="text-5xl">Innovate,</code> Create, Celebrate - Ask me how!
      </h1>
      
      {/* Subheading */}
      <p className="text-xl text-center mb-5">
        <span className="text-gray-400">Get schedules, locations, event details,</span>
        <span className="text-white font-medium"> registration </span>
        <span className="text-gray-400">and</span>
        <span className="text-white font-medium"> info </span>
        <span className="text-gray-400">in seconds.</span>
      </p>
      
      {/* Input Box */}
      <div className="w-full max-w-3xl bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="How can Bot help you today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-lg"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center mt-5 mb-2">
            <button type="button" className="p-2 rounded-full text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
            <button type="button" className="p-2 rounded-full text-gray-400 hover:text-white transition ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LandingPage;