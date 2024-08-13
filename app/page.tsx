"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Features"); // Default active link
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // use to  Load theme preference from local storage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  // using to Toggle dark mode and save preference to local storage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", String(newMode)); // Convert boolean to string
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  //just to handle link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <header className="flex flex-wrap custom-sm:justify-start sm:flex-nowrap w-full text-sm py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between mt-3">
          <a
            className={`flex-none text-xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            } focus:outline-none focus:opacity-80`}
            href="#"
            aria-label="Brand"
          >
            <span className="inline-flex items-center gap-x-2 text-2xl font-bold">
              <Image
                className="w-14 h-auto"
                src="/book.svg"
                alt="Logo"
                width="10"
                height="10"
              />
              BookAI
            </span>
          </a>
          <div className="custom-sm:order-3 flex items-center gap-x-2">
           
            <button
              type="button"
              className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-600 text-purple-500 shadow-sm hover:bg-purple-600 hover:text-white focus:outline-none focus:bg-purple-800 focus:text-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </button>
            <button
              type="button"
              className="p-1.5 inline-flex items-center justify-center text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <svg
                className={`w-6 h-6 ${darkMode ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v1.293A6.993 6.993 0 0118.707 12H20a8.002 8.002 0 00-8-8z" />
                <path d="M21 12a9 9 0 11-9-9 9 9 0 019 9z" />
              </svg>
              <svg
                className={`w-6 h-6 ${darkMode ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v1.293A6.993 6.993 0 0118.707 12H20a8.002 8.002 0 00-8-8z" />
                <path d="M4.23 4.23a9 9 0 0012.743 12.743" />
              </svg>
            </button>
            <button
              type="button"
              className="custom-sm:hidden relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={darkMode ? "currentColor" : "black"} 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={darkMode ? "currentColor" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle</span>
            </button>
          </div>
          <div
            id="hs-navbar-alignment"
            className={`${
              isOpen ? "block" : "hidden"
            } w-full custom-sm:w-auto custom-sm:flex custom-sm:flex-row custom-sm:items-center custom-sm:justify-center mt-3 sm:mt-0`}
          >
            <div className="flex flex-col custom-sm:flex-row items-center justify-center gap-5 mt-5 sm:mt-0 sm:ps-5 text-base">
              <a
                className={`font-medium ${
                  activeLink === "Features"
                    ? "text-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-gray-400"
                    : "text-black hover:text-gray-700"
                } focus:outline-none`}
                href="#"
                onClick={() => handleLinkClick("Features")}
                aria-current={activeLink === "Features" ? "page" : undefined}
              >
                Features
              </a>
              <a
                className={`font-medium ${
                  activeLink === "Guide"
                    ? "text-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-gray-400"
                    : "text-black hover:text-gray-700"
                } focus:outline-none`}
                href="#"
                onClick={() => handleLinkClick("Guide")}
                aria-current={activeLink === "Guide" ? "page" : undefined}
              >
                Guide
              </a>
              <a
                className={`font-medium ${
                  activeLink === "Roadmap"
                    ? "text-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-gray-400"
                    : "text-black hover:text-gray-700"
                } focus:outline-none`}
                href="#"
                onClick={() => handleLinkClick("Roadmap")}
                aria-current={activeLink === "Roadmap" ? "page" : undefined}
              >
                Roadmap
              </a>
              <a
                className={`font-medium ${
                  activeLink === "API"
                    ? "text-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-gray-400"
                    : "text-black hover:text-gray-700"
                } focus:outline-none`}
                href="#"
                onClick={() => handleLinkClick("API")}
                aria-current={activeLink === "API" ? "page" : undefined}
              >
                API
              </a>
              <a
                className={`font-medium ${
                  activeLink === "Price"
                    ? "text-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-gray-400"
                    : "text-black hover:text-gray-700"
                } focus:outline-none`}
                href="#"
                onClick={() => handleLinkClick("Price")}
                aria-current={activeLink === "Price" ? "page" : undefined}
              >
                Price
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
       // your main content will be here
      </main>
    </div>
  );
}
