// Educational Chatbot API Service
const API_BASE_URL = 'https://education-chat-bot-1.onrender.com';

class ChatService {
  constructor() {
    this.baseUrl = API_BASE_URL;
    console.log('ChatService initialized');
    console.log('API URL:', this.baseUrl);
  }

  /**
   * Get API headers
   */
  getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Check API health status
   */
  async checkHealth() {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      if (!response.ok) {
        throw new Error(`Health check failed: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Health check error:', error);
      return { status: 'ok', message: 'Service ready' };
    }
  }

  /**
   * Get list of available models
   */
  async getAvailableModels() {
    return {
      models: ['educational-gemini'],
      message: 'Using Educational Chat Bot with Gemini',
    };
  }

  /**
   * Send a message to the chatbot
   * @param {string} message - User's question or query
   * @returns {Promise<{response: string, timestamp: string}>}
   */
  async sendMessage(message) {
    if (!message || typeof message !== 'string' || message.trim() === '') {
      throw new Error('Message is required and must be a non-empty string');
    }

    try {
      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ message: message.trim() }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Invalid request. Please check your message.');
        }
        if (response.status === 500) {
          throw new Error('Server error. Please try again later.');
        }
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      // The API returns { response: "...", timestamp: "..." }
      return {
        response: data.response || 'No response received',
        timestamp: data.timestamp || new Date().toISOString(),
      };
    } catch (error) {
      console.error('Send message error:', error);
      throw error;
    }
  }

  /**
   * Send multiple messages in a conversation
   * @param {Array<string>} messages - Array of messages
   * @returns {Promise<Array>}
   */
  async sendConversation(messages) {
    const responses = [];
    for (const message of messages) {
      const response = await this.sendMessage(message);
      responses.push(response);
    }
    return responses;
  }

  /**
   * Check if service is configured
   */
  isConfigured() {
    return true; // No API key needed!
  }
}

// Export singleton instance
export const chatService = new ChatService();
export default chatService;
