
import React from 'react';

const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            {children}
        </div>
    </div>
);

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-light">About ImageConv</h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                            Simplifying image conversions for everyone, securely and efficiently.
                        </p>
                    </div>

                    <ContentSection title="Our Mission">
                        <p>
                            In a digital world where images are central to communication, we recognized a need for a simple, fast, and secure way to convert image formats. Our mission is to provide a powerful, user-friendly tool that respects user privacy. We believe that basic utilities like image conversion should be accessible to everyone, for free, without compromising on security or performance.
                        </p>
                        <p>
                            That's why ImageConv operates entirely within your browser. No uploads, no servers, no data collection. Just pure, client-side conversion power at your fingertips.
                        </p>
                    </ContentSection>

                    <ContentSection title="How It Works">
                        <p>
                            We leverage the power of modern web technologies, specifically JavaScript and the HTML5 Canvas API, to perform all conversions directly on your device. When you select an image, our tool reads the file locally, processes it in your browser's memory, and generates the new file for you to download.
                        </p>
                        <ul className="list-disc pl-5">
                            <li><strong>100% Client-Side:</strong> Your files never leave your computer.</li>
                            <li><strong>Blazing Fast:</strong> By eliminating upload and download times to a server, conversions are nearly instantaneous.</li>
                            <li><strong>Privacy-Focused:</strong> We don't see, store, or have access to your images. Ever.</li>
                            <li><strong>Universally Compatible:</strong> Works on any modern browser, on any device, without needing to install any software.</li>
                        </ul>
                    </ContentSection>

                    <ContentSection title="Our Vision for the Future">
                        <p>
                            We are passionate about building tools that empower users. While ImageConv currently focuses on the most popular web formats like JPG, PNG, and WEBP, our vision extends beyond that. We are continuously exploring new features, format support, and basic image editing capabilities to make ImageConv an even more indispensable tool for creators, professionals, and everyday users.
                        </p>
                        <p>
                            Thank you for using ImageConv. We're excited to have you with us on this journey!
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
