import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - SPECTRAUX</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Cookie Policy</h1>
        <div className="prose dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Essential Cookies Only</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">SPECTRAUX uses only essential cookies that are necessary for the website to function properly. We use a single cookie to remember your dark/light mode preference.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">What We Don't Use</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We do not use:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 dark:text-gray-300">Analytics cookies</li>
              <li className="text-gray-600 dark:text-gray-300">Third-party cookies</li>
              <li className="text-gray-600 dark:text-gray-300">Tracking cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Browser Settings</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website, such as theme preference saving.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
