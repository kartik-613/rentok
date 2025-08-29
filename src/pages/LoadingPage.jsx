import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-lg font-medium text-gray-700">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
