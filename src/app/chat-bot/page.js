"use client"
import React, { useState, useRef, useEffect } from 'react';
import LandingPage from '../Components/LandingPage';
import ChatInterface from '../Components/ChatInterface';

export default function ChatBot() {
  const [inputValue, setInputValue] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (chatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMessage = { text: inputValue, sender: 'user' };
    setMessages([...messages, newMessage]);
    
    setInputValue('');
    
    if (!chatOpen) {
      setChatOpen(true);
    }
    
    setTimeout(() => {
      const botResponse = { 
        text: `Thanks for your question about "${inputValue}". I'm your TechFest assistant. How can I help you with the event?`, 
        sender: 'bot' 
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-2">
      {!chatOpen ? (
        <LandingPage 
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          handleKeyPress={handleKeyPress}
        />
      ) : (
        <ChatInterface 
          messages={messages}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          handleKeyPress={handleKeyPress}
          setChatOpen={setChatOpen}
          messageEndRef={messageEndRef}
          inputRef={inputRef}
        />
      )}
    </div>
  );
}