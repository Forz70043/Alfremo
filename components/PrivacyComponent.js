import React from 'react';

export default function PrivacyComponent(props) {
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <div>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Privacy and Policy</h1>
                        </header>
                        <h2 className='font-bold'>Introduction</h2>
                        <p>This Privacy Policy outlines how we collect, use, and protect your personal data when you use our website.
                            By using our website, you agree to the terms of this Privacy Policy.</p>
                        <br />
                        <h2 className='font-bold'>Data Collected</h2>
                        <p>We may collect personal data such as your name, email address, phone number, and other contact information when you fill out a form or otherwise contact us.
                            We may also collect non-personal data such as your IP address and browser information when you use our website.</p>
                        <br />
                        <h2 className='font-bold'>Use of Data</h2>
                        <p>We use your personal data to communicate with you and to provide you with information or services that you request. We may also use your personal data for marketing purposes, such as sending you newsletters or promotional emails, but only if you have given us your consent to do so.
                            We do not share your personal data with third parties for marketing purposes.</p>
                        <br />
                        <h2 className='font-bold'>Cookies and Other Technologies</h2>
                        <p>We may use cookies and other technologies to collect non-personal data such as your IP address, browser information, and the pages you visit on our website. We may use this information to improve our website and to tailor our advertising to your interests.</p>
                        <br />
                        <h2 className='font-bold'>Data Security</h2>
                        <p>We take reasonable steps to protect your personal data from unauthorized access, alteration, or destruction. We use industry-standard encryption technologies and other security measures to protect your personal data.</p>
                        <br />
                        <h2 className='font-bold'>Your Rights</h2>
                        <p>You have the right to request access to and correction of your personal data that we hold. You also have the right to withdraw your consent to the use of your personal data for marketing purposes at any time. To exercise these rights, please contact us using the contact information provided on our website.</p>
                        <br />
                        <h2 className='font-bold'>Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We do not have control over the content or privacy policies of these websites and are not responsible for any data that you provide to them.</p>
                        <br />
                        <h2 className='font-bold'>Changes to Privacy Policy</h2>
                        <p>We reserve the right to modify this Privacy Policy at any time without notice. Any changes will be posted on our website.</p>
                        <br />
                        <h2 className='font-bold'>Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy or the use of your personal data, please contact us using the contact information provided on our website.</p>
                    </article>
                </div>
            </main>
        </>
    );
};