import React from 'react';

export default function ChangelogComponent(props) {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Changelog
                        </h2>

                        <div className="mt-4">
                            <a href="#" title=""
                                className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Learn more about our agenda
                                <svg aria-hidden="true" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                        <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.3
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">
                                    Public and Private layouts</a>
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    -
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">
                                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Fix</span>
                                    The sidebar button doesn't work</a>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.2c
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">New model schemes added</a>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.2b
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">New navigation navbar</a>
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    -
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">
                                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Bug</span>
                                        The sidebar button doesn't work </a>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.1a
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Fix registration form</a>
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    -
                                </h3>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Added dashboard view layout</a>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.1
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Added login system and user controllers</a>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    Version 0.1.0
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Opening beta</a>
                                </h3>
                            </div>

                            {/* <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    09:00 - 10:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    10:00 - 11:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    11:00 - 12:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Coffee Break</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    12:00 - 13:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    13:00 - 14:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Updates from the Open Source Multimedia community</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    14:00 - 15:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Exploring the balance between customer acquisition and retention</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    15:00 - 16:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    16:00 - 14:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Scaling your brand from €0 to multimillion euros</a>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                    17:00 - 14:00
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    <a href="#" className="hover:underline">Drinks & networking</a>
                                </h3>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
