
import React from 'react';

const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            {children}
        </div>
    </div>
);


export default function PrivacyPage() {
    return (
        <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Privacy Policy</h1>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <ContentSection title="Introduction">
                        <p>
                            Welcome to ImageConv ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains our practices concerning the collection, use, and disclosure of information. Our core principle is privacy by design; our service is built to function without collecting your personal data.
                        </p>
                    </ContentSection>

                    <ContentSection title="No Data Collection">
                        <p>
                            <strong>We do not collect, store, or have access to any of your files or personal information.</strong>
                        </p>
                        <p>
                            All image processing and conversion performed by our tools happens entirely on your own computer, within your web browser (client-side). The images you select for conversion are never uploaded to our servers or any third-party servers. They remain on your device throughout the entire process.
                        </p>
                    </ContentSection>

                    <ContentSection title="Information We Do Not Collect">
                        <p>
                           To be perfectly clear, we do not collect:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Your images or any files you process.</li>
                            <li>Personal data such as your name, email address, or IP address.</li>
                            <li>Any usage data that could be tied back to you as an individual.</li>
                        </ul>
                    </ContentSection>
                    
                    <ContentSection title="Local Storage">
                      <p>
                        Our website uses your browser's `localStorage` for one specific purpose: to remember your theme preference (light or dark mode). This information is stored only on your browser and is not transmitted to us. It is used solely to enhance your user experience on subsequent visits.
                      </p>
                    </ContentSection>

                    <ContentSection title="Third-Party Services">
                        <p>
                            Our website does not integrate with any third-party services that would collect your personal data. We do not use third-party analytics (like Google Analytics) or advertising networks.
                        </p>
                    </ContentSection>

                    <ContentSection title="Changes to This Privacy Policy">
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </ContentSection>

                    <ContentSection title="Contact Us">
                        <p>
                            If you have any questions about this Privacy Policy, please <a href="#/contact" className="text-primary hover:underline">contact us</a>.
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
