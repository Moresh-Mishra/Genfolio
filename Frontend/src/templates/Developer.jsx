import Header from "../navbar/Header";
import Footer from "../navbar/Footer";
import {
  ComputerDesktopIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Transitions from "../components/Transitions";
import { API_BASE_URL } from "../config";

function Developer() {

    const location = useLocation();
    const { portfolioId } = useParams(); // Get portfolio ID from URL
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState(location.state || {});
  
    useEffect(() => {
      const share = searchParams.get('share');
      if ((!location.state || Object.keys(location.state).length === 0) && share) {
        fetch(`${API_BASE_URL}/api/portfolio-share/${share}`)
          .then(res => res.json())
          .then(data => {
            if (data && data.data) setUser(data.data);
          });
      } else if (portfolioId) {
        // If we have a portfolio ID in the URL, fetch that specific portfolio
        const fetchPortfolio = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/portfolio/${portfolioId}`);
            if (response.ok) {
              const data = await response.json();
              setUser(data);
              console.log("Fetched portfolio by ID:", portfolioId);
            } else {
              console.error("Portfolio not found");
            }
          } catch (error) {
            console.error("Error fetching portfolio by ID: ", error);
          }
        };
        fetchPortfolio();
      } else if (!location.state || Object.keys(location.state).length === 0) {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/user`);
            const data = await response.json();
            if (data && Object.keys(data).length > 0) {
              setUser(data);
              console.log("Fetching Done");
            }
          } catch (error) {
            console.error("Error fetching user Data: ", error);
          }
        };
        fetchUserData();
      }
    }, [location.state, searchParams, portfolioId]);

  return (
    <>
      <Header userData={user} templateName="Developer" />
      <div className="flex justify-center bg-slate-900 px-4 py-6 min-h-fit">
        <div className="flex flex-col items-start space-y-4">
          {/* Main Card */}
          <div className="flex items-center w-[840px] h-[274px] rounded-xl shadow-lg border border-emerald-300 animate-glow p-6 gap-6">
            <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-blue-300 p-1 overflow-hidden">
              <img
                src={user.profileImage}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <ComputerDesktopIcon className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  Developer Portfolio
                </span>
              </div>
              <h1 className="text-4xl font-bold text-emerald-500">
                {user.fullName}
              </h1>
              <h3 className="text-2xl text-gray-300">{user.title}</h3>

              <div className="flex items-center gap-2">
                <a href={user.linkedin}>
                  <svg
                    className="w-5 h-5 inline-block mr-2 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href={user.github}>
                  <svg
                    className="w-5 h-5 inline-block mr-2 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <p className="text-emerald-500">Available for Collaboration</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-10">
            {[
              {
                Icon: EnvelopeIcon,
                label: "Email",
                value: user.email,
              },
              { Icon: PhoneIcon, label: "Phone", value: user.phone },
              {
                Icon: MapPinIcon,
                label: "Location",
                value: user.location,
              },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex border border-emerald-300 rounded-lg px-4 py-2 shadow-lg bg-slate-800 w-[253px]"
              >
                <div className="flex flex-col gap-0.5 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-8 h-8 text-emerald-500" />
                    <h1 className="text-white text-lg">{label}</h1>
                  </div>
                  <h1 className="text-white">{value}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* About Me */}
          <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-4 w-[840px]">
            <div className="flex items-center gap-2">
              <UserIcon className="w-8 h-8 text-emerald-500" />
              <h1 className="text-emerald-500 text-2xl font-bold">About Me</h1>
            </div>
            <div className="text-gray-300 whitespace-pre-wrap">{user.aboutMe}</div>
          </div>

          {/* Skills */}
          <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-6 w-[840px]">
            <div className="flex items-center gap-2">
              <CodeBracketIcon className="w-8 h-8 text-emerald-500" />
              <h1 className="text-emerald-500 text-2xl font-bold">Skills</h1>
            </div>
            {/* border border-emerald-500 text-white text-lg px-2 py-2 rounded-md w-[225px] flex justify-between items-center */}
            <div className="p-5 w-200">
              {user.skills ? (
                <ul className="grid grid-cols-4 gap-4 list-disc list-inside">
                  {user.skills.split(",").map((skill, index) => (
                    <li
                      key={index}
                      className="border border-emerald-500 text-white text-lg px-2 py-2 rounded-md flex justify-center items-center"
                    >
                      {skill.trim()}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xl text-gray-500">No skills listed</span>
              )}
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-4 w-[840px]">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-8 h-8 text-emerald-500" />
              <h1 className="text-emerald-500 text-2xl font-bold">
                Experience
              </h1>
            </div>
            <div className="flex flex-col space-y-2 border-1 border-emerald-500 p-4 w-201">
              <h2 className="text-emerald-500">Professional journey</h2>
              <div className="text-gray-300 whitespace-pre-wrap">{user.workExperience}</div>
            </div>
          </div>

          {/* Projects and Education */}
          <div className="flex gap-8">
            {/* ---------------- Project card ---------------- */}
            <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-4 w-[405px]">
              <div className="flex items-center gap-2">
                <UserIcon className="w-8 h-8 text-emerald-500" />
                <h1 className="text-emerald-500 text-2xl font-bold">Project</h1>
              </div>

              <div className="flex flex-col items-baseline border border-emerald-500 p-2">
                <h2 className="text-emerald-500 p-1">Featured Work</h2>
                <div className="text-gray-300 w-[340px] whitespace-pre-wrap">{user.projects}</div>
              </div>
            </div>

            {/* ---------------- Education card ---------------- */}
            <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-4 w-[405px]">
              <div className="flex items-center gap-2">
                <UserIcon className="w-8 h-8 text-emerald-500" />
                <h1 className="text-emerald-500 text-2xl font-bold">
                  Education
                </h1>
              </div>

              <div className="flex flex-col items-baseline border border-emerald-500 p-2">
                <h2 className="text-emerald-500 p-1">Academic Background</h2>
                <div className="text-gray-300 w-[340px] whitespace-pre-wrap">{user.education}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const WrappedDeveloper = Transitions(Developer);
export default WrappedDeveloper;
