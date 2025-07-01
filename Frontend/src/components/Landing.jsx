import React from "react";
import { useNavigate } from 'react-router-dom';
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import pen from "../assets/pen.png";
import download from "../assets/download.png";
import CustomerReviews from "./CustomerReviews.jsx";
import { ClockIcon, ArrowRightEndOnRectangleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const Landing = () => {
  const navigate = useNavigate();

  const handleStartForFree = () => navigate('/form');
  const handleHistory = () => navigate('/history');
  const handleLogin = () => navigate('/login');

  return (
    <div>
      <div className="barba-wrapper">
        <div className="barba-container" data-barba="container" data-barba-namespace="landing">
          <div className="flex flex-row justify-between items-center px-5 py-2 bg-white/80 shadow-sm border-b border-blue-100 rounded-xl">
            {/* Left group: user icon, Genfolio */}
            <div className="flex flex-row items-center gap-3">
              <img src={user6} alt="" className="w-11 h-11 rounded-full transition-transform duration-200 hover:scale-105" />
              <h1 className="text-2xl font-bold text-blue-800 tracking-tight transition-colors duration-200 hover:text-blue-600 cursor-pointer">Genfolio</h1>
            </div>
            {/* Right group: History and Login */}
            <div className="flex flex-row items-center gap-3">
              <button className="flex items-center gap-1 border border-blue-100 px-3 py-1.5 rounded-lg cursor-pointer bg-white/90 hover:bg-blue-50 transition-all duration-200 font-medium" onClick={handleHistory}>
                <ArrowPathIcon className="w-6 h-6 text-blue-500" />
                History
              </button>
              <button className="flex items-center gap-1 border border-blue-200 px-3 py-1.5 rounded-lg cursor-pointer text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all duration-200 font-semibold" onClick={handleLogin}>
                <ArrowRightEndOnRectangleIcon className="w-7 h-6 text-white" />
                Login
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-bl from-pink-100 to-blue-100 min-h-[155px] p-4 sm:p-6">
            <div className="flex flex-col items-center pt-8 sm:pt-16">
              <img
                src={user5}
                alt="User"
                className="w-16 h-16 sm:w-24 border-2 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 sm:h-24 animate-bounce mb-2"
              />

              <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
                Genfolio
              </h1>

              <p className="text-center text-lg sm:text-2xl text-gray-700 px-2 sm:px-4 max-w-2xl leading-relaxed mb-6 sm:mb-10">
                Create stunning, professional portfolios in minutes. Our AI-powered generator helps you showcase your skills and projects with beautiful, customizable templates that make you stand out from the crowd.
              </p>

              <button 
                onClick={handleStartForFree}
                className="bg-blue-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl font-semibold text-base sm:text-lg mb-6 sm:mb-8 active:scale-95 cursor-pointer"
              >
                ⚡ Start for Free
              </button>

              <p className="text-center text-sm sm:text-m text-gray-600">
                ⭐⭐⭐⭐⭐ Trusted by 10,000+ professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-8 sm:py-13">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-4">How It Works</h1>
        <p className="text-center text-base sm:text-lg text-gray-500 mb-8 sm:mb-15">
          Three simple steps to create your professional portfolio
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-15 px-4 sm:px-0">
          <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-100 h-auto sm:h-64 flex flex-col items-center p-4 sm:p-0">
            <img
              src={user5}
              alt=""
              className="mt-4 sm:mt-5 w-12 sm:w-15 border-1 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 rounded-xl"
            />
            <h2 className="text-xl sm:text-2xl font-bold m-2 sm:m-3">Share your Info</h2>
            <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">
              Tell us about your background, skills, and experience. Our intelligent form guides you through each step.
            </p>
          </div>

          <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-100 h-auto sm:h-64 flex flex-col items-center p-4 sm:p-0">
            <img
              src={pen}
              alt=""
              className="mt-4 sm:mt-5 w-12 sm:w-15 border-1 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 rounded-xl"
            />
            <h2 className="text-xl sm:text-2xl font-bold m-2 sm:m-3">Choose Your Style</h2>
            <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">
              Select from professionally designed themes and customize colors, fonts, and layouts to match your brand.
            </p>
          </div>

          <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-100 h-auto sm:h-64 flex flex-col items-center p-4 sm:p-0">
            <img
              src={download}
              alt=""
              className="mt-4 sm:mt-5 w-12 sm:w-15 border-1 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 rounded-xl"
            />
            <h2 className="text-xl sm:text-2xl font-bold m-2 sm:m-3">Download & Share</h2>
            <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">
              Get your beautiful, responsive portfolio instantly. Download as PDF or share your unique link.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-25 flex justify-center px-4 sm:px-0">
          <div className="bg-white rounded-xl border-1 shadow-xl w-full sm:w-331 h-auto sm:h-90 flex flex-col items-center p-6 sm:p-0">
            <h1 className="font-bold mt-6 sm:mt-10 text-2xl sm:text-4xl text-center">
              Trusted by Professionals Worldwide
            </h1>
            <p className="mt-3 sm:mt-3.5 text-base sm:text-lg font-sans text-center">
              Join thousands who've accelerated their careers
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-35 mt-8 sm:mt-12 w-full">
              <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-70 h-auto sm:h-35 flex flex-col items-center p-4 sm:p-0">
                <h2 className="text-2xl sm:text-[35px] font-bold mt-4 sm:mt-8 mb-2 text-blue-600">1,000+</h2>
                <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">Portfolios Created</p>
              </div>
              <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-70 h-auto sm:h-35 flex flex-col items-center p-4 sm:p-0">
                <h2 className="text-2xl sm:text-[35px] font-bold mt-4 sm:mt-8 mb-2 text-green-600">95%</h2>
                <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">Satisfaction Rate</p>
              </div>
              <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-70 h-auto sm:h-35 flex flex-col items-center p-4 sm:p-0">
                <h2 className="text-2xl sm:text-[35px] font-bold mt-4 sm:mt-8 mb-2 text-orange-500">3 min</h2>
                <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">Average Setup Time</p>
              </div>
            </div>
          </div>
        </div>

        <CustomerReviews />

        <div className="mt-8 sm:mt-10 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-5">
            Why Choose Our Portfolio Builder?
          </h1>
          <p className="text-center text-base sm:text-lg text-gray-500 mb-8 sm:mb-10">
            Everything you need to stand out professionally
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-center gap-6">
            <ul className="list-disc text-base sm:text-lg text-gray-700 mx-4 sm:ml-20 mt-8 sm:mt-15 sm:mr-20 space-y-4">
              <li>
                <span className="font-bold">Professional Templates</span>
                <br />
                Choose from dozens of industry-specific, professionally designed templates.
              </li>
              <li>
                <span className="font-bold">Mobile Responsive</span>
                <br />
                Your portfolio looks perfect on all devices - desktop, tablet, and mobile.
              </li>
              <li>
                <span className="font-bold">Instant Download</span>
                <br />
                Get your portfolio as a high-quality PDF ready for applications and sharing.
              </li>
              <li>
                <span className="font-bold">Portfolio History (for Logged-in Users)</span>
                <br />
                Access the history of all portfolios you've created—view, edit, or download them anytime from your account.
              </li>
            </ul>
            <div className="w-250 h-99 mr-5 border-2 bg-gradient-to-br from-blue-600 to-purple-500 mt-4 sm:mt-1 border-gray-300 rounded-lg flex items-center justify-center shadow-md mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-20 w-20 text-white animate-pulse">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 ml-5 sm:mt-30 flex justify-center px-4 sm:px-0">
          <div className="bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl text-white border-1 shadow-xl w-full sm:w-331 h-auto sm:h-70 flex flex-col items-center p-6 sm:p-0">
            <h1 className="font-bold mt-6 sm:mt-8 text-2xl sm:text-4xl text-center">
              Ready to Build Your Portfolio?
            </h1>
            <p className="mt-4 sm:mt-4.5 text-base sm:text-[20px] font-sans text-center mx-4 sm:mr-80 sm:ml-80 mb-6 sm:mb-7">
              Join thousands of professionals who have created stunning portfolios and advanced their careers.
            </p>

            <button 
              onClick={handleStartForFree}
              className="group bg-white border-1 w-full sm:w-70 h-12 sm:h-15 rounded-2xl text-blue-600 text-base sm:text-lg font-bold cursor-pointer hover:scale-105 hover:text-blue-500 transition-transform duration-300 flex items-center justify-center gap-2 mb-6 sm:mb-0"
            >
              <span className="group-hover:text-red-500 transition-colors duration-300 text-2xl sm:text-3xl leading-none">♡</span> 
              <span>Start Creating Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;