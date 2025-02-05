import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SPECTRAUX</title>
        <meta name="google-adsense-account" content="ca-pub-9867578754430987" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9867578754430987" crossorigin="anonymous"></script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Privacy Commitment</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">At SPECTRAUX, we are committed to protecting your privacy. Our color palette generation tool operates entirely in your browser, and we do not collect, store, or process any personal information from our users.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">No Data Collection</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We want to be completely transparent: we do not collect, track, or store any personal data. When you use our color palette generator, all operations are performed locally on your device. We don't use analytics tools, tracking cookies, or any other form of user monitoring.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Your Privacy Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Since we don't collect any personal information, there's no risk of your data being shared, sold, or compromised. You can use our service with complete confidence that your privacy is protected.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
