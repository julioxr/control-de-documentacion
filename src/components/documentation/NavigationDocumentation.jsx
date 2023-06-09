import React from "react";

const NavigationDocumentation = () => {
    return (
        <nav
            className="flex w-full max-w-2xl items-center justify-between pt-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal text-gray-500">
                Mostrando{" "}
                <span className="font-semibold text-gray-900">1-10</span> de{" "}
                <span className="font-semibold text-gray-900">1000</span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <a
                        href="#"
                        className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        1
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        aria-current="page"
                        className="z-10 border border-blue-300 bg-blue-50 px-3 py-2 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        ...
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        100
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationDocumentation;
