import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-center">
      <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-4 text-gray-500">It might have been moved or deleted.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
