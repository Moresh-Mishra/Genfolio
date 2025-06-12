import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import user5 from "../assets/user5.png";  
import {
  UserIcon,
  IdentificationIcon,
  BriefcaseIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";

export default function UserForm() {
  const navigate = useNavigate();
  const [Drop, setDrop] = useState(false);
  const [Drop1, setDrop1] = useState(false);
  const [Drop2, setDrop2] = useState(false);
  const [Drop3, setDrop3] = useState(false);
  function handleDrop() {
    setDrop(!Drop);
  }
  function handleDrop1() {
    setDrop1(!Drop1);
  }
  function handleDrop2() {
    setDrop2(!Drop2);
  }
  function handleDrop3() {
    setDrop3(!Drop3);
  }
  const handlePreviousPage = () => {
    navigate('/');
  };

  const handleNextPage = () => {
    // Add your next page logic here
    console.log('Going to next page...');
  };

  return (
    <div>
      <header className="text-center flex flex-col items-center p-4">
        <img
                src={user5}
                alt="User"
                className="w-16 h-16 sm:w-24 border-2 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 sm:h-24 animate-bounce mb-2"
              />
        <h1 className="text-[40px] font-bold">Tell Us About Yourself</h1>
        <h3 className="text-[20px]">
          Share your professional story and background
        </h3>
      </header>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-xl p-5 w-[700px]">
          <div className="flex items-center mb-4 justify-between">
            <UserIcon className=" w-10 h-10" />
            <h1 className=" text-[25px] font-bold p-2 ">Basic Information</h1>
            <button onClick={handleDrop}>
              <span className=" hover:bg-amber-50 rounded-b-xl rounded-t-xl p-2">
                {Drop ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
          <div
            className={`transition-all duration-300 ${
              Drop ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <form className="space-y-4">
              <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
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
                <div className=" flex flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Email-Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="johndoe24@gmail.com"
                  />
                </div>
                <div className=" flex flex-col">
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
              <div className=" flex flex-col justify-center gap-1">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="New York, USA"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-50 font-bold py-2 px-4 rounded-md hover:bg-amber-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-xl p-6 w-[700px]">
          <div className="flex items-center justify-between mb-4">
            <IdentificationIcon className=" w-10 h-10" />
            <h1 className=" text-[25px] font-bold p-2">About & Skills</h1>
            <button onClick={handleDrop1}>
              <span className=" hover:bg-amber-50  rounded-b-xl rounded-t-xl p-2">
                {Drop1 ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
          <div
            className={`transition-all duration-300 ${
              Drop1 ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <form className="space-y-4">
              <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    About Me
                  </label>
                  <textarea
                    type="text"
                    className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 "
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Skills<span className="text-red-600">*</span>
                </label>
                <textarea
                  className="mt-1 block w-[652px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Software Engineer"
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-50 font-bold py-2 px-4 rounded-md hover:bg-amber-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-xl p-6 w-[700px]">
          <div className="flex items-center justify-between mb-4">
            <BriefcaseIcon className=" w-10 h-10" />
            <h1 className=" text-[25px] font-bold p-2">
              Professional Background
            </h1>
            <button onClick={handleDrop2}>
              <span className=" hover:bg-amber-50  rounded-b-xl rounded-t-xl p-2">
                {Drop2 ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
          <div
            className={`transition-all duration-300 ${
              Drop2 ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <form className="space-y-4">
              <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Work Experience
                  </label>
                  <textarea
                    type="text"
                    className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 "
                    placeholder="Describe your work expericence, roles and achievements"
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
              <button
                type="submit"
                className="w-full bg-amber-50 font-bold py-2 px-4 rounded-md hover:bg-amber-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-xl p-6 w-[700px]">
          <div className="flex items-center justify-between mb-4">
            <FolderIcon className=" w-10 h-10" />
            <h1 className=" text-[25px] font-bold p-2">
              Projects and Portfolio
            </h1>
            <button onClick={handleDrop3}>
              <span className=" hover:bg-amber-50  rounded-b-xl rounded-t-xl p-2">
                {Drop3 ? "▲" : "▼"}
              </span>
            </button>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
          <div
            className={`transition-all duration-300 ${
              Drop3 ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <form className="space-y-4">
              <div className=" flex items-center justify-between">
                <div className=" flex flex-col">
                  <label className="block text-sm font-medium text-gray-700">
                    Projects
                  </label>
                  <textarea
                    type="text"
                    className="mt-1 block w-[652px] h-[125px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 "
                    placeholder="List down your projects........"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-50 font-bold py-2 px-4 rounded-md hover:bg-amber-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
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
    </div>
  );
}
