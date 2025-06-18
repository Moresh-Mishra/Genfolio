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

function Developer() {
  return (
    <>
      <Header />
      <div className="flex justify-center bg-slate-900 px-4 py-12 min-h-screen">
        <div className="flex flex-col items-start space-y-8">
          {/* Main Card */}
          <div className="flex items-center w-[840px] h-[274px] rounded-xl shadow-lg border border-emerald-300 animate-glow">
            <img
              src=""
              alt="Corporate.png"
              className="w-40 h-40 rounded-full bg-emerald-500 ring-4 ring-emerald-500 shadow-[0_0_30px_5px_#10B981] mr-6 ml-6"
            />
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <ComputerDesktopIcon className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  Developer Portfolio
                </span>
              </div>
              <h1 className="text-4xl font-bold text-emerald-500">
                Shubhu 
              </h1>
              <h3 className="text-2xl text-gray-300">Developer</h3>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>

                <svg
                  className="w-5 h-5 inline-block mr-2 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>

              <p className="text-emerald-500">Available for Collaboration</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-5">
            {[
              {
                Icon: EnvelopeIcon,
                label: "Email",
                value: "m.moresh@gmail.com",
              },
              { Icon: PhoneIcon, label: "Phone", value: "+1 (234) 567-8901" },
              {
                Icon: MapPinIcon,
                label: "Location",
                value: "San Francisco, CA",
              },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center border border-emerald-300 rounded-lg px-4 py-2 shadow-lg bg-slate-800 space-x-2 max-w-[300px]"
              >
                <Icon className="w-8 h-8 text-emerald-500" />
                <div className="flex flex-col items-baseline gap-0.5 mb-2">
                  <h1 className="text-white text-lg">{label}</h1>
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
            <p className="text-gray-300">
              I am a passionate developer with experience in building web
              applications using modern technologies. I love collaborating with
              others and continuously learning new skills.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-6 w-[840px]">
            <div className="flex items-center gap-2">
              <CodeBracketIcon className="w-8 h-8 text-emerald-500" />
              <h1 className="text-emerald-500 text-2xl font-bold">Skills</h1>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-2">
              {[
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Java",
                "AWS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="border border-emerald-500 text-white text-lg px-2 py-2 rounded-md w-[225px] flex justify-between items-center"
                >
                  {skill}
                  <span className="text-white p-2 w-fit rounded-2xl bg-emerald-500 text-sm">
                    Pro
                  </span>
                </div>
              ))}
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
            <div className="flex flex-col space-y-2 border-1 border-emerald-500 p-4">
              <h2 className="text-emerald-500">Professional journey</h2>
              <p className="text-gray-300">
                I have worked on various projects using modern technologies,
                including React.js, Node.js, and AWS. My experience includes
                building responsive web applications, RESTful APIs, and
                cloud-based solutions.
              </p>
            </div>
          </div>

          {/* Projects and Education */}
          <div className="flex gap-8">
            {["Project", "Education"].map((title) => (
              <div
                key={title}
                className="flex flex-col items-start space-y-4 rounded-xl shadow-lg border border-emerald-300 p-4 w-[405px]"
              >
                <div className="flex items-center gap-2">
                  <UserIcon className="w-8 h-8 text-emerald-500" />
                  <h1 className="text-emerald-500 text-2xl font-bold">
                    {title}
                  </h1>
                </div>
                <div className="flex flex-col items-baseline border-1 border-emerald-500 p-2">
                  <h1 className="text-emerald-500">
                    {title === "Project" ? "Featured Work" : "Learning Path"}
                  </h1>
                  <p className="text-gray-300">
                    I am a passionate developer with experience in building web
                    applications using modern technologies. I love collaborating
                    with others and continuously learning new skills.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Developer;
