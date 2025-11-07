import { useState, useCallback, useEffect } from 'react';
import chatService from '../services/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isHealthy, setIsHealthy] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await chatService.checkHealth();
        setIsHealthy(true);
      } catch (err) {
        console.error('Health check failed:', err);
        setIsHealthy(false);
      }
    };
    checkHealth();
  }, []);

  const sendMessage = useCallback(async (userMessage) => {
    if (!userMessage.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatService.sendMessage(userMessage);

      const botMsg = {
        id: Date.now() + 1,
        text: response.response,
        sender: 'bot',
        timestamp: response.timestamp,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(err.message || 'Failed to send message');

      const errorMsg = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date().toISOString(),
        isError: true,
      };

      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const retryLastMessage = useCallback(() => {
    const lastUserMessage = messages
      .filter((msg) => msg.sender === 'user')
      .pop();

    if (lastUserMessage) {
      setMessages((prev) => prev.slice(0, -1));
      sendMessage(lastUserMessage.text);
    }
  }, [messages, sendMessage]);

  return {
    messages,
    isLoading,
    error,
    isHealthy,
    sendMessage,
    clearMessages,
    retryLastMessage,
  };
};

export default useChat;
