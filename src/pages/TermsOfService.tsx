import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - SPECTRAUX</title>
        <meta name="google-adsense-account" content="ca-pub-9867578754430987" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Welcome to SPECTRAUX</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">By accessing our website, you agree to these terms. We've kept them simple and user-friendly.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Commercial and Personal Use License</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">All color palettes, patterns, and designs generated through SPECTRAUX are freely available for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-gray-600 dark:text-gray-300">Commercial use without any restrictions</li>
              <li className="text-gray-600 dark:text-gray-300">Personal projects and portfolios</li>
              <li className="text-gray-600 dark:text-gray-300">Client work and commercial products</li>
              <li className="text-gray-600 dark:text-gray-300">Digital and physical products</li>
              <li className="text-gray-600 dark:text-gray-300">Worldwide usage without limitations</li>
              <li className="text-gray-600 dark:text-gray-300">Unlimited number of projects</li>
              <li className="text-gray-600 dark:text-gray-300">No attribution required (though appreciated)</li>
              <li className="text-gray-600 dark:text-gray-300">Modification and adaptation of palettes</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">You have perpetual, worldwide rights to use the generated content in any way you see fit, with no royalties or additional payments required.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Service Availability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">While we strive to maintain consistent service availability, we provide this tool "as is" without any warranties. We reserve the right to modify or discontinue any part of the service without notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">User Conduct</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We expect users to use our service responsibly and legally. Please do not attempt to disrupt or abuse the service.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
