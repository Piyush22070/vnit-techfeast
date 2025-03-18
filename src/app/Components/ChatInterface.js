import React from 'react';

const ChatInterface = ({ 
  messages, 
  inputValue, 
  setInputValue, 
  handleSubmit, 
  handleKeyPress, 
  setChatOpen, 
  messageEndRef,
  inputRef 
}) => {
  return (
    <div className="w-full max-w-3xl mt-[100px] flex flex-col h-[700px]">
      {/* Chat header */}
      <div className="bg-zinc-800 p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-xl font-bold">TechFest Assistant</h2>
        <button 
          onClick={() => setChatOpen(false)} 
          className="p-1 rounded-full bg-zinc-700 hover:bg-zinc-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Chat messages */}
      <div className=" mt-5 flex-grow bg-zinc-900 p-2 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 my-4">
            Ask me anything about the TechFest!
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div 
                className={`inline-block p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-zinc-800 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
        <div ref={messageEndRef} />
      </div>
      
      {/* Chat input */}
      <div className="bg-zinc-800 p-4 rounded-b-lg">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow bg-zinc-700 text-white placeholder-gray-400 outline-none rounded-full px-4 py-2"
          />
          <button 
            type="submit" 
            className="ml-2 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-900 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;