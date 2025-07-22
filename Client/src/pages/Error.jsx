
    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { FaExclamationTriangle } from "react-icons/fa";
    
    const Error = () => {
      const navigate = useNavigate();
    
      const handleRetry = () => {
        window.location.reload(); // Reload the page
      };
    
      const goHome = () => {
        navigate("/"); // Navigate to Home
      };
    
      return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
          <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Connection Error</h1>
          <p className="text-gray-600 mb-6">Oops! It seems like something went wrong. Please check your internet connection and try again.</p>
          <div className="flex gap-4">
            <button
              onClick={handleRetry}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Retry
            </button>
            <button
              onClick={goHome}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    };
export default Error