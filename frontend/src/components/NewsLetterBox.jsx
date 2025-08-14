import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate sending email to backend
    console.log('Subscribed Email:', email);

    toast.success('🎉 Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="text-center py-6">
      {/* Toaster should be placed once in your app (can also be in App.jsx) */}
      <Toaster position="top-center" reverseOrder={false} />

      <p className="text-md sm:text-2xl text-gray-700">Subscribe Now & Get 20% Off</p>
      <p className="text-gray-500 text-xs sm:text-md">
        Get exclusive deals and updates straight to your inbox.
      </p>

      <form
        className="w-full sm:w-1/2  pl-3 mx-auto flex items-center gap-3 border border-gray-400 rounded-lg overflow-hidden my-6"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none px-2 py-2 text-gray-700 placeholder-gray-400"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-amber-600 text-white p-2 text-md cursor-pointer px-2 sm:px-6 hover:bg-amber-700 transition-colors"
        >
          Subscribe
        </button> 
      </form>
    </div>
  );
};

export default NewsLetterBox;
