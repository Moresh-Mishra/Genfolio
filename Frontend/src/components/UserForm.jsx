import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user5 from "../assets/user5.png";
import {
  UserIcon,
  IdentificationIcon,
  BriefcaseIcon,
  FolderIcon,
  ArrowUpTrayIcon,
  HashtagIcon,
} from "@heroicons/react/24/solid";

export default function UserForm() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    basic: false,
    about: false,
    professional: false,
    projects: false,
  });
  const [profileImage, setProfileImage] = useState(null);
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  setLoading(true);
  try {
    const response = await fetch(
      "https://moresh-shubhu.app.n8n.cloud/webhook-test/040f44f2-faaf-4faf-8807-960065d4acc6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          input: aboutMe 
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch response from server");
    }

    const data = await response.json();
    console.log("Generated About Me:", data.output);
    if (data.output) {
      setAboutMe(data.output); // Replaces textarea content
    }
  } catch (error) {
    console.error("Error generating About Me:", error);
  } finally {
    setLoading(false);
  }
};


  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePreviousPage = () => navigate("/");
  const handleNextPage = () => navigate("/style");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

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
          <div className="flex flex-col items-center justify-between gap-4">
            <h1 className="text-center font-bold text-lg text-gray-600">
              Profile photo
            </h1>
            <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-dashed mb-5 border-gray-300 flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
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
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              )}
            </div>
            <label
              htmlFor="profile-pic"
              className="flex items-center cursor-pointer"
            >
              <span className="border border-gray-300 rounded-2xl p-5 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors flex items-center gap-2">
                <ArrowUpTrayIcon className="w-5 h-5 text-white" />
                Upload Image
              </span>
              <input
                id="profile-pic"
                type="file"
                name="myFile"
                accept=".jpg,.jpeg,.png"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            <span className="ml-5 text-gray-500 text-sm">JPG, PNG</span>
          </div>

          <div className="flex items-center mt-8 justify-between">
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
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Me
            </label>
            <textarea
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              placeholder="Write about yourself or click 'Generate with AI'"
              rows={6}
            />

            <button
              type="button"
              onClick={handleGenerate}
              className="mt-2 self-start px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
            >
              {loading ? "Generating..." : "Generate with AI"}
            </button>
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
      {renderFormSection(
        <HashtagIcon className="w-10 h-10" />,
        "Social Links",
        "basic",
        <form className="space-y-4 ">
          <div className="flex items-center mt-8 justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Github Link
              </label>
              <input
                type="text"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 max-w-[300px]"
                placeholder="https://github.com/username"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 ">
                LinkedIn Link
              </label>
              <input
                type="text"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                X (Twitter) Link
              </label>
              <input
                type="text"
                className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="https://twitter.com/username"
              />
            </div>
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
    </div>
  );
}
