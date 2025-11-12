import React from 'react';
import { Link } from 'react-router';


const Error = () => {
  return (
    <section className="bg-white dark:bg-gray-500 min-h-screen flex items-center justify-center text-base-content">
      <title>404 - Not Found</title>
      <div className="py-8 px-4 flex flex-col justify-center items-center text-gray-900 dark:text-white lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-600 dark:text-green-400">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-green-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
