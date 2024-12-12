'use client';
import { useState } from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string }[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleAskQuestion = () => {
    if (question.trim() === '') {
      setResponse('Please enter a valid question.');
      return;
    }
    setResponse(`You asked: "${question}". Here is the response to your question.`);
  };

  // Customizing the response based on the user's message
  const getCustomResponse = (message: string) => {
    const trimmedMessage = message.trim().toLowerCase();
    
    if (trimmedMessage === 'hi') {
      return 'Hello! How can I assist you today?';
    } else if (trimmedMessage === 'how are you') {
      return "I'm doing great, thank you for asking! How about you?";
    } else if (trimmedMessage.includes('help')) {
      return 'I am here to help you! Please tell me your query.';
    } else if (trimmedMessage.includes('status')) {
      return 'The status of your application is currently under review.';
    } else {
      return `You asked: "${message}". Here is the response to your question.`;
    }
  };

  const handleChatSend = () => {
    if (question.trim() === '') return;

    // Add user message to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', message: question },
    ]);

    // Get a customized response from the bot
    const botResponse = getCustomResponse(question);

    // Add bot's response to chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', message: botResponse },
    ]);

    // Clear the question input field
    setQuestion('');
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Ask a Question" />
        
        {/* Main Content */}
        <div className="flex">
          <div className="w-3/4 p-4">
            <h4 className="font-semibold text-black dark:text-white">Ask a Question</h4>
            <div className="mt-4">
              <textarea
                placeholder="Enter your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
              <button
                onClick={handleAskQuestion}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
              {response && (
                <div className="mt-4 p-4 border rounded-md bg-gray-100">
                  <p className="text-gray-700">{response}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div
        className={`fixed bottom-5 right-5 w-80 p-4 border rounded-lg bg-white shadow-lg transition-all duration-300 ${
          isChatOpen ? 'h-96' : 'h-20'
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex justify-between mb-2">
          <h4 className="font-semibold text-black">Chatbot</h4>
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="text-sm text-gray-600"
          >
            {isChatOpen ? 'Minimize' : 'Open'}
          </button>
        </div>
        {isChatOpen && (
          <>
            <div className="h-60 overflow-y-auto mb-4 p-2 border rounded-md bg-gray-50">
              {/* Chat Messages */}
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Type your message..."
              />
              <button
                onClick={handleChatSend}
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Question;
