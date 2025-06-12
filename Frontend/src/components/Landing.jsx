import React from "react";
import { useNavigate } from 'react-router-dom';
import user5 from "../assets/user5.png";
import pen from "../assets/pen.png";
import download from "../assets/download.png";
import CustomerReviews from "./CustomerReviews.jsx";

const Landing = () => {
  const navigate = useNavigate();

  const handleStartForFree = () => navigate('/form');

  const renderFeatureCard = (icon, title, description) => (
    <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-100 h-auto sm:h-64 flex flex-col items-center p-4 sm:p-0">
      <img
        src={icon}
        alt=""
        className="mt-4 sm:mt-5 w-12 sm:w-15 border-1 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 rounded-xl"
      />
      <h2 className="text-xl sm:text-2xl font-bold m-2 sm:m-3">{title}</h2>
      <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">
        {description}
      </p>
    </div>
  );

  const renderStatCard = (value, label, color) => (
    <div className="bg-white rounded-xl border-1 shadow-2xl w-full sm:w-70 h-auto sm:h-35 flex flex-col items-center p-4 sm:p-0">
      <h2 className={`text-2xl sm:text-[35px] font-bold mt-4 sm:mt-8 mb-2 ${color}`}>
        {value}
      </h2>
      <p className="text-center text-base sm:text-lg text-gray-700 mx-4 sm:mx-5">
        {label}
      </p>
    </div>
  );

  return (
    <div>
      <div className="barba-wrapper">
        <div className="barba-container" data-barba="container" data-barba-namespace="landing">
          <div className="bg-gradient-to-bl from-pink-100 to-blue-100 min-h-[155px] p-4 sm:p-6">
            <div className="flex flex-col items-center pt-8 sm:pt-16">
              <img
                src={user5}
                alt="User"
                className="w-16 h-16 sm:w-24 border-2 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 sm:h-24 animate-bounce mb-2"
              />

              <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
                Portfolio Generator
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
          {renderFeatureCard(
            user5,
            "Share your Info",
            "Tell us about your background, skills, and experience. Our intelligent form guides you through each step."
          )}
          {renderFeatureCard(
            pen,
            "Choose Your Style",
            "Select from professionally designed themes and customize colors, fonts, and layouts to match your brand."
          )}
          {renderFeatureCard(
            download,
            "Download & Share",
            "Get your beautiful, responsive portfolio instantly. Download as PDF or share your unique link."
          )}
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
              {renderStatCard("1,000+", "Portfolios Created", "text-blue-600")}
              {renderStatCard("95%", "Satisfaction Rate", "text-green-600")}
              {renderStatCard("3 min", "Average Setup Time", "text-orange-500")}
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
            </ul>
            <div className="w-full sm:w-155 h-40 sm:h-75 border-2 bg-gradient-to-br from-blue-600 to-purple-500 mt-4 sm:mt-1 border-gray-300 rounded-lg flex items-center justify-center bg-white shadow-md">
              <p className="text-2xl">⁜</p>
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