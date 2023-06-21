import React from 'react';

export default function TermsComponent(props) {
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
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Acceptance of Terms and Conditions</h1>
                        </header>
                        <p className="lead">By accessing and using this website, the user agrees to be bound by these Terms and Conditions, as well as applicable laws and regulations. If the user does not agree to these Terms and Conditions, they should not access or use the website.</p><br/>
                        
                        <h2 className='font-bold'>Intellectual Property</h2>
                        <p>All content, trademarks, and intellectual property rights on the website are the exclusive property of the company or its suppliers. The user does not have the right to use or reproduce such content, trademarks, or intellectual property rights without written permission.</p>
                        <br />
                        <h2 className='font-bold'>Limitations of Liability</h2>
                        <p>The company does not warrant the accuracy, reliability, or completeness of the content on the website. The user agrees to use the website at their own risk. In no event shall the company or its suppliers be liable for any direct, indirect, special, or consequential damages arising out of or in connection with the use of the website.</p>
                        <br />
                        <h2 className='font-bold'>Modifications to Terms and Conditions</h2>
                        <p>The company reserves the right to modify these Terms and Conditions at any time without notice. The user is responsible for regularly reviewing these Terms and Conditions for any modifications.</p>
                        <br />
                        <h2 className='font-bold'>Links to Third-Party Websites</h2>
                        <p>The website may contain links to third-party websites. The company has no control over such websites and shall not be liable for the content or actions of the owners of such websites.</p>
                        <br />
                        <h2 className='font-bold'>Applicable Law and Jurisdiction</h2>
                        <p>These Terms and Conditions shall be governed and interpreted in accordance with the laws of the state in which the company has its legal headquarters. The user agrees to submit to the exclusive jurisdiction of the courts of such state in relation to any dispute arising out of or in connection with the use of the website.</p>
                        <br />
                        <h2 className='font-bold'>Severability</h2>
                        <p>If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be interpreted to reflect the parties' intentions, and the remaining provisions shall remain in full force and effect.</p>
                        <br />
                        <h2 className='font-bold'>Entire Agreement</h2>
                        <p>These Terms and Conditions constitute the entire agreement between the user and the company regarding the use of the website and supersede any prior agreements or understandings.</p>
                        <br />
                        <h2 className='font-bold'>Waiver</h2>
                        <p>The failure of the company to exercise any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision unless expressly waived in writing.</p>
                        <br />
                        <h2 className='font-bold'>Language</h2>
                        <p>These Terms and Conditions are written in the English language. If a translation in any other language has been provided, the translation is provided for convenience only. In the event of any discrepancies between the English version and the translated version, the English version shall prevail.</p>
                        <br />
                        <h2 className='font-bold'>Notices</h2>
                        <p>Any communication or notice regarding these Terms and Conditions must be in writing and sent to the email or postal address provided on the website.</p>
                        <br />
                        <h2 className='font-bold'>Privacy</h2>
                        <p>The company collects, uses, and stores the user's personal data in accordance with its Privacy Policy, which is an integral part of these Terms and Conditions.</p>
                        <br />
                        <h2 className='font-bold'>Contact</h2>
                        <p>For any questions, complaints, or requests for information regarding these Terms and Conditions, the user may contact the company through the contact form on the website or at the email or postal address provided on the website.</p>
                    </article>
                </div>
            </main>
        </>
    );
};