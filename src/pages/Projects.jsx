import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Self-Driving Car Project */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Self-Driving Car</h2>
          <p className="text-gray-400 mb-4">
            A machine learning-based self-driving car system designed to autonomously navigate roads and make decisions.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, OpenCV, TensorFlow, Keras</p>
        </div>

        {/* Bonsai Damage Detection */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Bonsai Damage Detection</h2>
          <p className="text-gray-400 mb-4">
            AI-based detection system to identify damage to bonsai trees using image processing and deep learning.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, TensorFlow, OpenCV, CNN</p>
        </div>

        {/* AI Virtual Assistant */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">AI Virtual Assistant</h2>
          <p className="text-gray-400 mb-4">
            A virtual assistant using AGI to interact and perform tasks like answering questions and setting reminders.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, GPT-3, NLP</p>
        </div>

        {/* Video Transcription */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Video Transcription</h2>
          <p className="text-gray-400 mb-4">
            AI-powered tool that converts speech from videos into accurate text transcriptions.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, SpeechRecognition, DeepSpeech</p>
        </div>

        {/* Phishing Detection */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Phishing Detection</h2>
          <p className="text-gray-400 mb-4">
            A machine learning model that detects phishing attempts in emails, preventing fraud.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, Scikit-Learn, NLP</p>
        </div>

        {/* Predictive Models */}
        <div className="p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Predictive Models</h2>
          <p className="text-gray-400 mb-4">
            A collection of AI-powered models for sales forecasting, weather prediction, and more.
          </p>
          <p className="text-sm text-gray-500"><strong>Technologies used:</strong> Python, Scikit-Learn, XGBoost</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
