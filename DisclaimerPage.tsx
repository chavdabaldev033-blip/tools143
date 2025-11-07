
import React from 'react';

const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            {children}
        </div>
    </div>
);

export default function DisclaimerPage() {
    return (
        <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Disclaimer</h1>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            Please read this disclaimer carefully before using our website.
                        </p>
                    </div>

                    <ContentSection title="No Warranty">
                        <p>
                            The information and services provided by ImageConv are on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the service. We disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                        <p>
                            While we strive to provide a high-quality service, we do not guarantee that the conversions will be error-free, that the website will be available at all times, or that it will meet your specific requirements.
                        </p>
                    </ContentSection>

                    <ContentSection title="Limitation of Liability">
                        <p>
                            In no event shall ImageConv, its owners, or its affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of data, loss of profits, or other intangible losses, resulting from:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Your access to or use of or inability to access or use the service.</li>
                            <li>Any conduct or content of any third party on the service.</li>
                            <li>Any content obtained from the service.</li>
                            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                        </ul>
                        <p>
                           Since our service operates entirely client-side and we do not store your data, the risk of data loss or corruption from our end is minimized. However, you are solely responsible for backing up your original files before using our conversion tools.
                        </p>
                    </ContentSection>
                    
                    <ContentSection title="User Responsibility">
                        <p>
                           You are responsible for the content you choose to process with our tools. You must ensure that you have the necessary rights, licenses, or permissions for any images you convert. We assume no liability for copyright infringement or any legal issues arising from the use of your content.
                        </p>
                    </ContentSection>

                    <ContentSection title="External Links">
                        <p>
                           Our website may contain links to external websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>
                    </ContentSection>
                    
                    <ContentSection title="Changes to this Disclaimer">
                        <p>
                           We reserve the right to modify this disclaimer at any time. We will notify you of any changes by posting the new disclaimer on this page. Your continued use of the service after any such changes constitutes your acceptance of the new disclaimer.
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
