import Header from "../navbar/Header";
import user5 from "../assets/user5.png"
import Footer from "../navbar/Footer";
import { AcademicCapIcon, BriefcaseIcon, FolderIcon } from "@heroicons/react/24/solid";

function Creative()
{
    return(
        <>
        <Header />
        <div className="bg-gradient-to-br w-full min-h-screen from-purple-600 via-blue-900 to-blue-600">
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 mt-15 mb-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 via-blue-500 to-pink-500 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden"></div>
                </div>
                <h1 className="text-white text-5xl font-mono mt-5">Your Name</h1>
                <div className="w-48 mt-1 rounded-full h-1 bg-gradient-to-br from-pink-200 via-pink-400 to-violet-600"></div>
                <div className="mt-10 w-95 px-8 py-6 rounded-full bg-gradient-to-r from-cyan-300/90 to-blue-900/90 backdrop-blur-sm backdrop-filter backdrop-saturate-150 shadow-lg flex items-center justify-center border border-white/20">
                    <span className="text-white text-3xl">Profession</span>
                </div>

                <div className="flex flex-row items-center justify-center gap-7 mt-15 ml-20">
                    {/* Github  */}
                    <div className="group flex flex-row items-center justify-center border-1 rounded-2xl min-w-50 h-20 bg-black/5 hover:bg-black/10 transition-all duration-300 cursor-pointer px-6 backdrop-blur-md">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-gray-700 via-gray-900 to-black shadow-lg mr-4 group-hover:animate-float">
                            <svg className="w-6 h-6 group-hover:animate-spin" viewBox="0 0 24 24" fill="url(#github-gradient)">
                                <defs>
                                    <linearGradient id="github-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#9ca3af" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg">Github</h1>
                    </div>

                    {/* LinkedIn  */}
                    <div className="group flex flex-row items-center justify-center border-1 rounded-2xl min-w-50 h-20 bg-[#0077B5]/5 hover:bg-[#0077B5]/10 transition-all duration-300 cursor-pointer px-6 backdrop-blur-md">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-lg mr-4 group-hover:animate-bounce">
                            <svg className="w-6 h-6 group-hover:animate-pulse-glow" viewBox="0 0 24 24" fill="url(#linkedin-gradient)">
                                <defs>
                                    <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#60a5fa" />
                                    </linearGradient>
                                </defs>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg">LinkedIn</h1>
                    </div>

                    {/* Email  */}
                    <div className="group flex flex-row items-center justify-center border-1 rounded-2xl min-w-50 h-20 bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:from-pink-500/10 hover:to-purple-500/10 transition-all duration-300 cursor-pointer px-6 backdrop-blur-md">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-400 via-purple-400 to-pink-600 shadow-lg mr-4">
                            <svg className="w-6 h-6 group-hover:animate-spin" viewBox="0 0 24 24" fill="none" stroke="url(#email-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                    <linearGradient id="email-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>
                                <rect x="2" y="4" width="20" height="16" rx="4"/>
                                <path d="M22 6 12 13 2 6"/>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg">Email</h1>
                    </div>

                    {/* Phone  */}
                    <div className="group flex flex-row items-center justify-center border-1 rounded-2xl min-w-50 h-20 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300 cursor-pointer px-6 backdrop-blur-md">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-600 shadow-lg mr-4 group-hover:animate-bounce">
                            <svg className="w-6 h-6 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="url(#phone-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                    <linearGradient id="phone-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#22d3ee" />
                                    </linearGradient>
                                </defs>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 8.63 19.86 19.86 0 0 1 2 2.18 2 2 0 0 1 4 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg">Phone</h1>
                    </div>

                    {/* Location  */}
                    <div className="group flex flex-row items-center justify-center border-1 rounded-2xl min-w-50 h-20 bg-gradient-to-r from-green-500/5 to-emerald-500/5 hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 cursor-pointer px-6 backdrop-blur-md">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-orange-400 to-orange-600 shadow-lg mr-4">
                            <svg className="w-6 h-6 group-hover:animate-spin" viewBox="0 0 24 24" fill="none" stroke="url(#location-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                    <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                            </svg>
                        </div>
                        <h1 className="text-white text-lg">Location</h1>
                    </div>
                </div>
                
                {/* Start here  */}
                <div className="flex flex-col rounded-lg text-card-foreground bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group hover:shadow-purple-500/25 transition-all duration-700 mt-30 w-325 min-h-80 mb-25 p-7 relative">
                    <div className="ml-5 mt-5 flex flex-row items-center gap-10">
                        <div className="relative group">
                            {/* Small Lightning Icon */}
                            <div className="absolute -top-6 -right-6 group-hover:animate-pulse">
                                <svg 
                                    className="w-11 h-10 text-yellow-400 filter drop-shadow-[0_0_12px_rgba(250,204,21,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.9)] transition-all duration-300" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path d="M11 21h-1l1-7h-2.5l7-12h1l-1 7h2.5l-7 12z"/>
                                </svg>
                            </div>
                            <img 
                                src={user5} 
                                alt="" 
                                className="w-20 border-1 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-600/10 transform rotate-12 transition-transform duration-500 group-hover:rotate-0"
                            />
                        </div>
                        <h1 className="text-5xl font-extrabold font-mono text-pink-100 tracking-tight">About Me</h1>
                    </div>
                    <p className="mt-7 p-7 text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis doloremque sapiente libero nemo fuga quas consequuntur autem pariatur ut, ullam explicabo nihil? Voluptas, reiciendis aliquam, quasi distinctio ratione voluptatem omnis, accusamus esse aperiam facilis consectetur dolorem numquam. Illum delectus laboriosam necessitatibus blanditiis, voluptatibus ad doloribus impedit vel ut quidem.</p>
                </div>
            </div>
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-400 text-center w-full mb-16 mt-10">
                Creative Skills
            </h1>
            <div className="flex flex-row gap-15 ml-12 mt-2">
                {/* Skill Card 1 */}
                <div className="group bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl shadow-2xl w-[320px] h-[100px] flex items-center transition-transform duration-500 hover:-rotate-6">
                    <div className="group/button bg-pink-200/30 rounded-full px-10 py-4 mx-auto transition-all duration-500 hover:bg-blue-500 group-hover:rotate-0 hover:rotate-0">
                        <span className="text-white font-bold text-2xl transition-colors duration-300">Hello</span>
                    </div>
                </div>
                {/* Skill Card 2 */}
                <div className="group bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl shadow-2xl w-[320px] h-[100px] flex items-center transition-transform duration-500 hover:-rotate-6">
                    <div className="group/button bg-pink-200/30 rounded-full px-10 py-4 mx-auto transition-all duration-500 hover:bg-blue-500 group-hover:rotate-0 hover:rotate-0">
                        <span className="text-white font-bold text-2xl transition-colors duration-300">Lorem, ipsum.</span>
                    </div>
                </div>
            </div>

            {/* --------------------------------------------------- */}
            <div className="flex flex-row gap-4 mt-30">
            <div className="group flex flex-col rounded-2xl text-card-foreground bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden transition-all duration-500 w-230 ml-10 min-h-101 mb-10 p-3 relative
              hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(255,200,40,0.25)] hover:border-yellow-300/60
              hover:bg-gradient-to-br hover:from-yellow-50/60 hover:via-orange-100/40 hover:to-orange-200/60
              before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-yellow-200/30 before:via-orange-200/20 before:to-orange-400/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
                <div className="flex flex-row items-center gap-4 mt-2 mb-2">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 transition-transform duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_24px_0_rgba(255,200,40,0.5)]">
                        <FolderIcon className="w-8 h-8 text-white drop-shadow-[0_0_6px_rgba(255,200,40,0.7)] transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(255,200,40,0.9)]" />
                    </div>
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-transparent bg-clip-text drop-shadow-lg">Projects</h1>
                </div>
                <span className="text-white/90 text-lg mt-2 ml-2 drop-shadow">Quae maiores consequ</span>
            </div>
            <div className="flex flex-col gap-10 mb-10 ">
            <div className="flex flex-col rounded-lg text-card-foreground bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group hover:shadow-purple-500/25 transition-all duration-700 w-115 ml-10 min-h-40 p-3 relative">
                <div className="flex flex-row items-center gap-4 mt-2 mb-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-300 group-hover:animate-bounce">
                        <AcademicCapIcon className="w-8 h-8 text-white"/>
                    </div>
                    <h1 className="text-white text-3xl font-bold">Education</h1>
                </div>
                <span className="text-white/80 text-lg mt-2 ml-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius molestias molestiae ut facere quisquam? Facilis, laborum perferendis ad veniam, nam rerum aliquid distinctio sed ipsum quo error id ex sint.</span>
            </div>
            
            <div className="flex flex-col rounded-lg text-card-foreground bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group hover:shadow-purple-500/25 transition-all duration-700 w-115 ml-10 min-h-40 p-3 relative">
                <div className="flex flex-row items-center gap-4 mt-2 mb-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 transition-all duration-300 group-hover:animate-pulse">
                        <BriefcaseIcon className="w-8 h-8 text-white"/>
                    </div>
                    <h1 className="text-3xl font-bold text-white bg-clip-text">Experience</h1>
                </div>
                <span className="text-white/80 text-lg mt-2 ml-2">Lorem ipsum dolor sit amet.</span>
            </div>
            </div>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Creative