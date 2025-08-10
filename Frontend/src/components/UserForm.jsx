import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
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
import Transitions from "./Transitions";
import { API_BASE_URL } from "../config";

export default Transitions(UserForm);

function UserForm() {
  const navigate = useNavigate();
  // Alert and previous profile
  const [showAlert, setShowAlert] = useState(false);
  const [previousProfile, setPreviousProfile] = useState(null);
  // Loading and AI generation
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [originalInput, setOriginalInput] = useState("");
  // Form state
  const emptyForm = {
    profileImage: null,
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    aboutMe: "",
    workExperience: "",
    education: "",
    projects: "",
    resume: null,
    github: "",
    linkedin: "",
    twitter: "",
    skills: "",
  };
  const [formData, setFormData] = useState(emptyForm);
  // Section expansion
  const [expandedSections, setExpandedSections] = useState({
    basic: false,
    about: false,
    professional: false,
    projects: false,
    social: false,
  });

  // On mount, fetch previous profile but do not set formData
  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => setShowAlert(false), 7000);
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) return;
        const response = await fetch(`${API_BASE_URL}/api/profile`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (data.success && data.profile) {
          setPreviousProfile({
            profileImage: data.profile.profileImage || null,
            fullName: data.profile.fullName || "",
            title: data.profile.title || "",
            email: data.profile.email || "",
            phone: data.profile.phone || "",
            location: data.profile.location || "",
            aboutMe: data.profile.aboutMe || "",
            workExperience: data.profile.workExperience || "",
            education: data.profile.education || "",
            projects: data.profile.projects || "",
            resume: data.profile.resume || null,
            github: data.profile.github || "",
            linkedin: data.profile.linkedin || "",
            twitter: data.profile.twitter || "",
            skills: data.profile.skills || "",
          });
        }
      } catch (error) {
        setPreviousProfile(null);
      }
    };
    fetchProfile();
    return () => clearTimeout(timer);
  }, []);

  // Handler for Yes button in alert
  const handleApplyPrevious = () => {
    if (previousProfile) {
      setFormData(previousProfile);
    }
    setShowAlert(false);
  };

  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'aboutMe' && hasGenerated) {
      setHasGenerated(false);
      setOriginalInput("");
    }
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          [name]: event.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // About Me AI generation
  const handleGenerate = async () => {
    if (!formData.aboutMe.trim()) {
      alert("Please enter some information about yourself first.");
      return;
    }
    setLoading(true);
    setOriginalInput(formData.aboutMe);
    try {
      const response = await fetch(
        `${API_BASE_URL}/generate-about`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: formData.aboutMe }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate About Me');
      }
      const data = await response.json();
      if (data.output) {
        setFormData((prev) => ({ ...prev, aboutMe: data.output }));
        setHasGenerated(true);
      }
    } catch (error) {
      console.error("Error generating About Me:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleTryAgain = async () => {
    if (!originalInput) {
      alert("No original input available. Please generate first.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/generate-about`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: originalInput }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate About Me');
      }
      const data = await response.json();
      if (data.output) {
        setFormData((prev) => ({ ...prev, aboutMe: data.output }));
      }
    } catch (error) {
      console.error("Error regenerating About Me:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('Not authenticated');
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success && data.profile) {
        navigate('/style', { state: { ...formData, profileId: data.profile._id } });
      } else {
        throw new Error('Failed to create profile');
      }
    } catch (error) {
      alert('Failed to save your information. Please try again.');
    }
  };

  // Section toggler
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Render form sections
  const renderFormSection = (icon, title, section, children) => (
    <div className="flex justify-center mt-8">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[700px]">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer hover:bg-amber-50 rounded-xl transition"
          onClick={() => toggleSection(section)}
          tabIndex={0}
          role="button"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleSection(section); }}
        >
          {icon}
          <h1 className="text-[25px] font-bold p-2">{title}</h1>
          <span className="rounded-b-xl rounded-t-xl p-2 select-none">
            {expandedSections[section] ? "▲" : "▼"}
          </span>
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
      {/* Alert Sidebar */}
      <div
        className={`fixed top-8 right-0 z-50 transition-transform duration-500 ${showAlert ? 'translate-x-0' : 'translate-x-full'} w-64 bg-amber-100 text-black shadow-lg rounded-l-xl p-4 flex flex-col items-center`}
        style={{ minHeight: '60px' }}
      >
        <span className="text-md font-semibold">Do you want to apply previous inputs</span>
        <button onClick={handleApplyPrevious} className="border-2 p-3 rounded-2xl mt-5 bg-blue-500 text-white w-30 hover:bg-blue-600 cursor-pointer">Yes</button>
      </div>
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
      <form onSubmit={handleSubmit} noValidate>
        {renderFormSection(
          <UserIcon className="w-10 h-10" />, "Basic Information", "basic",
          <>
            {/* Profile Image */}
            <div className="flex flex-col items-center justify-between gap-4">
              <h1 className="text-center font-bold text-lg text-gray-600">
                Profile photo
              </h1>
              <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-dashed mb-5 border-gray-300 flex items-center justify-center overflow-hidden">
                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>
                )}
              </div>
              <label htmlFor="profileImage" className="flex items-center cursor-pointer">
                <span className="border border-gray-300 rounded-2xl p-5 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <ArrowUpTrayIcon className="w-5 h-5 text-white" />
                  Upload Image
                </span>
                <input
                  id="profileImage"
                  name="profileImage"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <span className="ml-5 text-gray-500 text-sm">JPG, PNG</span>
            </div>
            {/* Full Name, Title, Email, Phone, Location */}
            <div className="flex items-center mt-8 justify-between">
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Professional Title
                </label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2"
                  placeholder="Software Engineer"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Email-Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2"
                  placeholder="johndoe24@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <PhoneInput
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="mt-1 block w-[250px] border border-gray-300 rounded-md p-2"
                  defaultCountry="IN"
                  international
                  countryCallingCodeEditable={false}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="New York, USA"
              />
            </div>
          </>
        )}

        {/* About & Skills */}
        {renderFormSection(
          <IdentificationIcon className="w-10 h-10" />, "About & Skills", "about",
          <>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                About Me
              </label>
              <textarea
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                placeholder="Write about yourself or click 'Generate with AI'"
                rows={6}
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={loading || hasGenerated}
                  className="px-4 py-2 bg-amber-500 cursor-pointer text-white rounded hover:bg-amber-600 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {loading ? "Generating..." : hasGenerated ? "Generated" : "Generate with AI"}
                </button>
                {originalInput && (
                  <button
                    type="button"
                    onClick={handleTryAgain}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Generating..." : "Try Again"}
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                placeholder="List your skills, technologies, and expertise"
                rows={4}
              />
            </div>
          </>
        )}

        {/* Professional Background */}
        {renderFormSection(
          <BriefcaseIcon className="w-10 h-10" />, "Professional Background", "professional",
          <>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Work Experience
              </label>
              <textarea
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Describe your work experience, roles and achievements"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Education
              </label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Your education, certifications, and relevant courses"
              />
            </div>
          </>
        )}

        {/* Projects and Portfolio */}
        {renderFormSection(
          <FolderIcon className="w-10 h-10" />, "Projects and Portfolio", "projects",
          <>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Projects
              </label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="List down your projects..."
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="resume"
                className="flex items-center gap-2 border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100"
              >
                <ArrowUpTrayIcon className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Upload Resume (PDF)
                </span>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </>
        )}

        {/* Social Links */}
        {renderFormSection(
          <HashtagIcon className="w-10 h-10" />, "Social Links", "social",
          <>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Github Link
              </label>
              <input
                name="github"
                type="text"
                value={formData.github}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="https://github.com/username"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn Link
              </label>
              <input
                name="linkedin"
                type="text"
                value={formData.linkedin}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                X (Twitter) Link
              </label>
              <input
                name="twitter"
                type="text"
                value={formData.twitter}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="https://twitter.com/username"
              />
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8">
          <div className="bg-transparent rounded-xl p-4 w-[900px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 bg-white shadow-lg rounded-xl p-6">
                <button type="button" onClick={() => navigate("/")} className="cursor-pointer">
                  Previous Page
                </button>
              </div>
              <div className="flex items-center gap-2 bg-white shadow-lg rounded-xl p-6">
                <button type="submit" className="cursor-pointer">
                  Save & Next Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
