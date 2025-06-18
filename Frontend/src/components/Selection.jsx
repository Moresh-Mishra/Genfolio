import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import style from "../assets/style.png";
import {
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  CodeBracketIcon
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const imageRef = useRef(null);

  const navigate = useNavigate();
   const minimalistTemplate = () => navigate('/minimalist');
   const creativeTemplate = () => navigate('/creative');
   const corporateTemplate = () => navigate('/corporate');
   const developerTemplate = () => navigate('/developer');

  useEffect(() => {
    if (imageRef.current) {
      // Barba.js inspired floating animation
      const floatingAnimation = gsap.timeline({ repeat: -1, yoyo: true });
      
      floatingAnimation
        .to(imageRef.current, {
          y: -20,
          rotation: 3,
          duration: 2,
          ease: "power2.inOut"
        })
        .to(imageRef.current, {
          y: 20,
          rotation: -3,
          duration: 2,
          ease: "power2.inOut"
        });

      return () => {
        floatingAnimation.kill();
      };
    }
  }, [selectedOption]);

  return (
    <div className="customize-container flex flex-col items-center p-8 max-w-7xl mx-auto">
      
      {/* Template Selection Options */}
      <div className="mb-8 w-full">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Choose Your Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* Option 1: Select from Templates */}
          <button
            onClick={() => setSelectedOption('templates')}
            className={`p-8 border-2 rounded-2xl transition-all duration-300 hover:shadow-xl ${
              selectedOption === 'templates' 
                ? 'border-blue-500 bg-blue-50 shadow-lg' 
                : 'border-gray-300 hover:border-blue-300'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Select from Available Templates</h3>
              <p className="text-gray-600">
                Choose from our curated collection of professional portfolio templates, 
                each designed with modern aesthetics and proven layouts.
              </p>
            </div>
          </button>

          {/* Option 2: Create Custom Template */}
          <button
            onClick={() => setSelectedOption('custom')}
            className={`p-8 border-2 rounded-2xl transition-all duration-300 hover:shadow-xl ${
              selectedOption === 'custom' 
                ? 'border-green-500 bg-green-50 shadow-lg' 
                : 'border-gray-300 hover:border-green-300'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Create Your Own Template Layout</h3>
              <p className="text-gray-600">
                Build a completely custom portfolio from scratch with our intuitive 
                design tools and flexible layout options.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Templates Display for Option 1 */}
      {selectedOption === 'templates' && (
        <div className="w-full mt-8">
          <article className="bg-white border-1 mt-20 border-gray-200 rounded-xl shadow-2xl w-full max-w-5xl mx-auto p-8">
            <h2 className="text-center text-3xl font-bold mb-10">
              Choose Your Template Style
            </h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button onClick={creativeTemplate} className="flex flex-col items-center border-2 p-8 bg-pink-100 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                <SparklesIcon className="w-12 h-12 mb-4"/>
                <h3 className="text-2xl font-bold font-sans mb-4">Creative</h3>
                <div className="flex flex-col gap-3">
                  <span className="text-center text-lg font-bold">
                    Bold, artistic layout with unique sections
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Asymmetric layouts</li>
                    <li>Creative animations</li>
                    <li>Artistic elements</li>
                  </ul>
                </div>
              </button>

              <button onClick={minimalistTemplate} className="flex flex-col items-center border-2 p-8 cursor-pointer rounded-2xl bg-gray-200 hover:shadow-lg transition-shadow">
                <AdjustmentsHorizontalIcon className="w-12 h-12 mb-4"/>
                <h3 className="text-2xl font-bold font-sans mb-4">Minimalist</h3>
                <div className="flex flex-col gap-3">
                  <span className="text-center text-lg font-bold">
                    Clean, simple design focused on content
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lots of white space</li>
                    <li>Clean lines</li>
                    <li>Subtle animations</li>
                  </ul>
                </div>
              </button>

              <button onClick={corporateTemplate} className="flex flex-col items-center border-2 p-8 cursor-pointer rounded-2xl bg-sky-100 hover:shadow-lg transition-shadow">
                <BuildingOfficeIcon className="w-12 h-12 mb-4"/>
                <h3 className="text-2xl font-bold font-sans mb-4">Corporate</h3>
                <div className="flex flex-col gap-3">
                  <span className="text-center text-lg font-bold">
                    Professional business-oriented layout
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Structured layout</li>
                    <li>Formal sections</li>
                    <li>Business-focused</li>
                  </ul>
                </div>
              </button>

              <button onClick={developerTemplate} className="flex flex-col items-center border-2 p-8 cursor-pointer rounded-2xl bg-green-100 hover:shadow-lg transition-shadow">
                <CodeBracketIcon className="w-12 h-12 mb-4"/>
                <h3 className="text-2xl font-bold font-sans mb-4">Developer</h3>
                <div className="flex flex-col gap-3">
                  <span className="text-center text-lg font-bold">
                    Tech-focused with code elements
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Code snippets</li>
                    <li>Tech icons</li>
                    <li>GitHub integration</li>
                  </ul>
                </div>
              </button>
            </section>
          </article>
        </div>
      )}

      {/* Customize Content for Option 2 */}
      {selectedOption === 'custom' && (
        <div className="mt-8">
          <header className="bg-gradient-to-bl from-pink-100 to-blue-100 py-16 mb-13 rounded-2xl">
            <div className="flex flex-col items-center">
              <img
                className="border-1 w-16 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 animate-bounce mb-4 p-2"
                src={style}
                alt="Style icon"
              />
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Choose Your Style
              </h1>
              <p className="text-lg text-gray-700 text-center">
                Customize your portfolio in 2 steps
              </p>
            </div>
          </header>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Color Palette Section */}
            <article className="bg-white border border-gray-200 rounded-xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Choose Your Color Palette
              </h2>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ocean Blue */}
                <button className="flex flex-col items-center border-2 border-gray-200 shadow-xl cursor-pointer hover:shadow-lg rounded-2xl transition-shadow p-6">
                  <div
                    className="w-full h-32 rounded-xl mb-4"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #38bdf8 0%, #0ea5e9 33%, #fef3c6 66%, #e5e7eb 100%)",
                    }}
                  ></div>
                  <h3 className="text-2xl font-serif mb-4">Ocean Blue</h3>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 bg-sky-400 rounded-full"></span>
                    <span className="w-10 h-10 bg-sky-600 rounded-full"></span>
                    <span className="w-10 h-10 bg-amber-100 rounded-full"></span>
                    <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  </div>
                </button>

                {/* Purple Dreams */}
                <button className="flex flex-col items-center border-2 border-gray-200 shadow-xl cursor-pointer hover:shadow-lg rounded-2xl transition-shadow p-6">
                  <div
                    className="w-full h-32 rounded-xl mb-4"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #c084fc 0%, #9333ea 33%, #f472b6 66%, #f3f4f6 100%)",
                    }}
                  ></div>
                  <h3 className="text-2xl font-serif mb-4">Purple Dreams</h3>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 bg-purple-400 rounded-full"></span>
                    <span className="w-10 h-10 bg-purple-600 rounded-full"></span>
                    <span className="w-10 h-10 bg-pink-300 rounded-full"></span>
                    <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  </div>
                </button>

                {/* Forest Green */}
                <button className="flex flex-col items-center border-2 border-gray-200 shadow-xl cursor-pointer hover:shadow-lg rounded-2xl transition-shadow p-6">
                  <div
                    className="w-full h-32 rounded-xl mb-4"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #22c55e 0%, #15803d 33%, #86efac 66%, #f3f4f6 100%)",
                    }}
                  ></div>
                  <h3 className="text-2xl font-serif mb-4">Forest Green</h3>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 bg-green-500 rounded-full"></span>
                    <span className="w-10 h-10 bg-green-700 rounded-full"></span>
                    <span className="w-10 h-10 bg-emerald-300 rounded-full"></span>
                    <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  </div>
                </button>

                {/* Sunset Orange */}
                <button className="flex flex-col items-center border-2 border-gray-200 shadow-xl cursor-pointer hover:shadow-lg rounded-2xl transition-shadow p-6">
                  <div
                    className="w-full h-32 rounded-xl mb-4"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #fb923c 0%, #ea580c 33%, #fecaca 66%, #f3f4f6 100%)",
                    }}
                  ></div>
                  <h3 className="text-2xl font-serif mb-4">Sunset Orange</h3>
                  <div className="flex gap-3">
                    <span className="w-10 h-10 bg-orange-400 rounded-full"></span>
                    <span className="w-10 h-10 bg-orange-600 rounded-full"></span>
                    <span className="w-10 h-10 bg-red-300 rounded-full"></span>
                    <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  </div>
                </button>
              </section>
            </article>

            {/* Layout Section */}
            <article className="bg-white border border-gray-200 rounded-xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mr-3"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                Choose Your Layout
              </h2>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Single Page Layout */}
                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl mb-6 p-4">
                    <div className="h-full flex flex-col gap-2">
                      <div className="h-8 bg-blue-200 rounded-lg"></div>
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="bg-blue-200 rounded-lg"></div>
                        <div className="bg-blue-200 rounded-lg"></div>
                        <div className="bg-blue-200 rounded-lg"></div>
                      </div>
                      <div className="h-16 bg-blue-200 rounded-lg"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Single Page</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-lg font-bold">
                      All-in-One Experience
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Perfect for concise portfolios with smooth scrolling sections
                    </span>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vertical scrolling sections</li>
                      <li>Sticky navigation</li>
                      <li>Quick access to all content</li>
                    </ul>
                  </div>
                </button>

                {/* Multi-Page Layout */}
                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-6 p-4">
                    <div className="h-full flex gap-2">
                      <div className="w-1/4 bg-purple-200 rounded-lg"></div>
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="h-8 bg-purple-200 rounded-lg"></div>
                        <div className="flex-1 bg-purple-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Multi-Page</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-lg font-bold">
                      Detailed Sections
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Ideal for comprehensive portfolios with deep content
                    </span>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dedicated pages for each section</li>
                      <li>Rich content support</li>
                      <li>Better organization</li>
                    </ul>
                  </div>
                </button>

                {/* Grid Layout */}
                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-xl mb-6 p-4">
                    <div className="h-full grid grid-cols-2 gap-2">
                      <div className="bg-green-200 rounded-lg"></div>
                      <div className="bg-green-200 rounded-lg"></div>
                      <div className="bg-green-200 rounded-lg"></div>
                      <div className="bg-green-200 rounded-lg"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Grid Layout</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-lg font-bold">
                      Visual Showcase
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Perfect for visual portfolios and project galleries
                    </span>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Masonry grid display</li>
                      <li>Project showcase</li>
                      <li>Visual storytelling</li>
                    </ul>
                  </div>
                </button>

                {/* Magazine Layout */}
                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl mb-6 p-4">
                    <div className="h-full flex flex-col gap-2">
                      <div className="h-12 bg-orange-200 rounded-lg"></div>
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        <div className="bg-orange-200 rounded-lg"></div>
                        <div className="flex flex-col gap-2">
                          <div className="flex-1 bg-orange-200 rounded-lg"></div>
                          <div className="flex-1 bg-orange-200 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Magazine Style</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-lg font-bold">
                      Editorial Design
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      For content-rich portfolios with a modern editorial feel
                    </span>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Asymmetric layouts</li>
                      <li>Featured content areas</li>
                      <li>Dynamic content flow</li>
                    </ul>
                  </div>
                </button>
              </section>
            </article>

            {/* Typography Section */}
            <article className="bg-white border border-gray-200 rounded-xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mr-3"
                >
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" x2="15" y1="20" y2="20"></line>
                  <line x1="12" x2="12" y1="4" y2="20"></line>
                </svg>
                Choose Your Typography
              </h2>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-5xl font-bold font-sans mb-4">Aa</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-xl font-bold">
                      Modern Sans{" "}
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Clean and professional sans-serif perfect for tech roles
                    </span>
                    <span className="font-sans text-lg">
                      "This is how the font looks like."
                    </span>
                  </div>
                </button>

                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-5xl font-bold font-serif mb-4">Aa</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-xl font-bold">
                      Classic Seriff
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Elegant serif font for traditional professional roles
                    </span>
                    <span className="font-serif text-lg">
                      "This is how the font looks like."
                    </span>
                  </div>
                </button>

                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-5xl font-bold font-mono mb-4">Aa</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-xl font-bold">
                      Monospace{" "}
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Friendly rounded font perfect for creative professionals
                    </span>
                    <span className="font-mono text-lg">
                      "This is how the font looks like."
                    </span>
                  </div>
                </button>

                <button className="flex flex-col border-2 p-8 cursor-pointer rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-5xl font-normal mb-4">Aa</h3>
                  <div className="flex flex-col gap-3">
                    <span className="text-center text-xl font-bold">
                      Normal{" "}
                    </span>
                    <span className="text-gray-600 text-lg mb-4">
                      Simple system font for a clean, minimalist look
                    </span>
                    <span className="font-normal text-lg">
                      "This is how the font looks like."
                    </span>
                  </div>
                </button>
              </section>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selection;