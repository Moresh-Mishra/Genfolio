import Header from "../navbar/Header";
import Footer from "../navbar/Footer";
import { useRef } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Corporate() {
  const location = useLocation();
  const [user, setUser] = useState(location.state || {});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!location.state || Object.keys(location.state).length === 0) {
        try {
          const response = await fetch("https://localhost:5000/user");
          const data = await response.json();
          if (data && Object.keys(data).length > 0) {
            setUser(data);
            console.log("Fetching Done");
          }
        } catch (error) {
          console.error("Error fetching user Data: ", error);
        }
      }
    };

    fetchUserData();
  }, [location.state]);

  return (
    <>
      <Header />
      <div>
        <div className="flex items-center justify-between bg-gradient-to-bl from-blue-900 to-blue-800 p-12">
          {/* ---------------------------------------------------------------- */}
          <div className="flex items-center text-white">
            <div className="w-35 h-35 rounded-full bg-gray-100 border-4 border-blue-300 flex items-center justify-center overflow-hidden mb-2">
              <img
                src={user.profileImage}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <h1 className="font-bold text-3xl">{user.fullName}</h1>
              <h3>{user.title}</h3>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          <div className="bg-blue-500 text-white rounded-xl shadow-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <ol className="space-y-2 text-sm">
              <li className="flex items-center">
                <EnvelopeIcon className="inline-block w-5 h-5 mr-2 " />
                <h2 className=" text-lg">{user.email}</h2>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="inline-block w-5 h-5 mr-2" />
                <h2 className=" text-lg">{user.phone}</h2>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="inline-block w-5 h-5 mr-2" />
                <h2 className=" text-lg">{user.location}</h2>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a className=" text-lg" href={user.linkedin}>
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  className=" text-lg"
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <div>
              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl w-[950px]">
                <div className="flex p-4 items-center">
                  <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2" />
                  <h1 className=" text-2xl p-2">Executive Summary</h1>
                </div>
                <h3 className="p-4 text-lg">{user.aboutMe}</h3>
              </div>
            </div>

            <div>
              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl">
                <div className="flex p-4 items-center">
                  <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2" />
                  <h1 className=" text-2xl p-2">Professional Experience</h1>
                </div>
                <h3 className="p-4 text-lg">{user.workExperience}</h3>
              </div>
            </div>

            <div>
              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl">
                <div className="flex p-4 items-center">
                  <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2" />
                  <h1 className=" text-2xl p-2">Key Projects</h1>
                </div>
                <h3 className="p-4 text-lg">{user.projects}</h3>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex flex-col w-[500px]">
              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl ">
                <div className="flex p-4 items-center">
                  <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2" />
                  <h1 className=" text-2xl p-2">Core Competencies</h1>
                </div>
                <ol className="flex flex-col w-auto list-disc ml-8 [&>li::marker]:text-blue-300">
                  {user.skills ? (
              <div className="p-5">
                <ul className="list-disc list-inside space-y-2">
                  {user.skills.split(",").map((skill, index) => (
                    <li key={index} className="text-lg text-gray-800">
                      {skill.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <span className="text-xl p-5 text-gray-500">
                No skills listed
              </span>
            )}
                </ol>
              </div>

              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl">
                <div className="flex p-4 items-center">
                  <FolderIcon className="w-10 h-10 rounded-xl p-2  bg-blue-300" />
                  <h1 className=" text-2xl p-2">
                    Education and Qualifications
                  </h1>
                </div>
                {user.education}
              </div>
              <div className="flex flex-col p-4  mt-4 shadow-lg ml-8 mr-8 rounded-2xl bg-blue-100">
                <div className="flex p-4 items-center">
                  <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2" />
                  <h1 className=" text-2xl p-2">Professional Attributes</h1>
                </div>
                <ol className="flex flex-col w-auto list-disc ml-8 [&>li::marker]:text-blue-300">
                  <li className=" p-3 rounded-2xl">Leadership</li>
                  <li className=" p-3 rounded-2xl">Strategic Thinking</li>
                  <li className=" p-3 rounded-2xl">Problem Solving</li>
                  <li className=" p-3 rounded-2xl">Team Collaboration</li>
                  <li className=" p-3 rounded-2xl">Communication</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
}
