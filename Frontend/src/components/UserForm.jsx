import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user5 from "../assets/user5.png";
import {
  UserIcon,
  IdentificationIcon,
  BriefcaseIcon,
  FolderIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/solid";

export default function UserForm() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    basic: false,
    about: false,
    professional: false,
    projects: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePreviousPage = () => navigate("/");
  const handleNextPage = () => navigate("/style");

  const renderFormSection = (icon, title, section, children) => (
    <div className="flex justify-center mt-8">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[700px]">
        <div className="flex items-center justify-between mb-4">
          {icon}
          <h1 className="text-[25px] font-bold p-2">{title}</h1>
          <button onClick={() => toggleSection(section)}>
            <span className="hover:bg-amber-50 rounded-b-xl rounded-t-xl p-2">
              {expandedSections[section] ? "▲" : "▼"}
            </span>
          </button>
        </div>
        <div
          className={`transition-all duration-300 ${
            expandedSections[section]
              ? "max-h-screen"
              : "max-h-0 overflow-hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <header className="text-center flex flex-col items-center p-4">
        <img
          src={user5}
          alt="User"
          className="w-16 h-16 sm:w-24 border-2 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 sm:h-24 mt-7 animate-bounce mb-2"
        />
        <h1 className="text-[40px] font-bold">Tell Us About Yourself</h1>
        <h3 className="text-[20px]">
          Share your professional story and background
        </h3>
      </header>
      {renderFormSection(
        <UserIcon className="w-10 h-10" />,
        "Basic Information",
        "basic",
        <form className="space-y-4 ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 max-w-[300px]"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Professional Title<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Software Engineer"
                required={true}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Email-Address
              </label>
              <input
                type="email"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="johndoe24@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="+91 1234567890"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="New York, USA"
            />
          </div>
        </form>
      )}

      {renderFormSection(
        <IdentificationIcon className="w-10 h-10" />,
        "About & Skills",
        "about",
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                About Me
              </label>
              <textarea
                className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Skills<span className="text-red-600">*</span>
            </label>
            <textarea
              className="mt-1 block w-[652px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="List your skills..."
              required={true}
            />
          </div>
        </form>
      )}

      {renderFormSection(
        <BriefcaseIcon className="w-10 h-10" />,
        "Professional Background",
        "professional",
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Work Experience
              </label>
              <textarea
                className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Describe your work experience, roles and achievements"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700">
              Education<span className="text-red-600">*</span>
            </label>
            <textarea
              className="mt-1 block w-[652px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your education, certifications, and relevant courses"
              required={true}
            />
          </div>
        </form>
      )}

      {renderFormSection(
        <FolderIcon className="w-10 h-10" />,
        "Projects and Portfolio",
        "projects",
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Projects
              </label>
              <textarea
                className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="List down your projects..."
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="resume-upload"
              className="flex items-center gap-2 w-[652px] border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100"
            >
              <ArrowUpTrayIcon className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                Upload Resume (PDF)
              </span>
              <input
                id="resume-upload"
                type="file"
                name="myFile"
                accept=".pdf"
                className="hidden"
              />
            </label>
          </div>
        </form>
      )}
      <div className="flex justify-center items-center mt-8">
        <div className="bg-transparent rounded-xl p-4 w-[900px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-xl p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              <button onClick={handlePreviousPage} className="cursor-pointer">
                Previous Page
              </button>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-xl p-6">
              <button onClick={handleNextPage} className="cursor-pointer">
                Next Page
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      cxv
    </div>
  );
}
