import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="flex justify-center items-center py-16 px-4 bg-base-content dark:bg-gray-900 transition-colors duration-300">
      <form className="flex flex-col items-center text-center w-full max-w-md">
        <span className="text-3xl font-bold mb-2 text-white dark:text-green-400">
          Subscribe to our newsletter
        </span>
        <p className="text-gray-300 dark:text-gray-300 mb-6">
          Get updates about upcoming events and community activities directly to
          your inbox.
        </p>
        <div className="flex w-full gap-2 sm:flex-col sm:gap-2">
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="Enter your email"
            className="flex-1 p-3 text-sm rounded-md border border-white/30 bg-white/10 text-white dark:text-white placeholder-gray-200 dark:placeholder-gray-400 focus:border-yellow-400 outline-none transition"
          />
          <button
            type="submit"
            className="p-3 text-sm font-semibold rounded-md bg-[#0a400c] text-white hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSection;
