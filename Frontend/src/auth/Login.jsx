import { useState } from "react";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  // Classes
  const containerClass = "w-[950px] h-[500px] bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex relative transition-all duration-700";
  const panelClass = "flex flex-col items-center justify-center h-full px-8 text-center w-1/2";
  const btnOutline = "border border-white text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider hover:bg-white hover:text-blue-700 transition-all duration-200 mt-6";

  // Overlay animation logic
  const overlayClass = `absolute top-0 left-0 w-1/2 h-full transition-all duration-700 z-20
    ${showSignUp ? 'translate-x-full' : 'translate-x-0'}
    bg-gradient-to-r from-blue-600 to-purple-500 text-white flex items-center justify-center`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-pink-100 to-blue-100 font-[Montserrat]">
      <div className={containerClass}>
        {/* Forms container */}
        <div className="flex w-full h-full relative z-10">
          {/* Sign In Form */}
          <div className={panelClass}>
            <div className="w-full max-w-xs">
              <h1 className="text-3xl font-bold text-blue-800 mb-4">Sign In</h1>
              <input type="email" placeholder="Email" className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input type="password" placeholder="Password" className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider shadow-md transition-all duration-200 mt-4 w-full">Sign In</button>
            </div>
          </div>
          {/* Sign Up Form */}
          <div className={panelClass}>
            <div className="w-full max-w-xs">
              <h1 className="text-3xl font-bold text-blue-800 mb-4">Create Account</h1>
              <input type="text" placeholder="Name" className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input type="email" placeholder="Email" className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input type="password" placeholder="Password" className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <button className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider shadow-md transition-all duration-200 mt-4 w-full">Sign Up</button>
            </div>
          </div>
        </div>
        {/* Overlay Panel */}
        <div className={overlayClass} style={{ borderRadius: showSignUp ? "0 150px 100px 0" : "150px 0 0 100px" }}>
          <div className="flex flex-col items-center justify-center h-full px-8 text-center w-full">
            {showSignUp ? (
              <>
                <h1 className="text-3xl font-bold mb-2">Join Us Today!</h1>
                <p className="my-4 text-sm leading-5">
                  Enter your details and start your journey with us.
                </p>
                <button className={btnOutline} onClick={() => setShowSignUp(false)}>
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                <p className="my-4 text-sm leading-5">
                  To keep connected with us, please log in with your personal info.
                </p>
                <button className={btnOutline} onClick={() => setShowSignUp(true)}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .w-[950px], .h-[500px] { width: 100vw !important; height: 100vh !important; border-radius: 0 !important; }
          .max-w-xs { max-width: 90vw !important; }
        }
      `}</style>
    </div>
  );
}