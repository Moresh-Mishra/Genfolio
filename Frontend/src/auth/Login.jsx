
import { useState } from "react";
export default function Login(){
     const [showSignUp, setShowSignUp] = useState(false);

  /* --- Tailwind utility strings that mimic the original CSS selectors ---- */
   const container =
    `relative overflow-hidden w-[768px] max-w-full min-h-[480px] bg-white
     rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]
     transition-all duration-700 ease-in-out
     ${showSignUp ? "active" : ""}`;

  const signIn =
    `absolute inset-y-0 left-0 flex w-1/2 flex-col items-center justify-center
     px-10 transition-transform duration-700 z-[2]
     ${showSignUp ? "translate-x-full" : ""}`;

  const signUp =
    `absolute inset-y-0 left-0 flex w-1/2 flex-col items-center justify-center
     px-10 opacity-0 transition-all duration-700
     ${showSignUp ? "translate-x-full opacity-100 z-[5]" : "z-[1]"}`;

  const toggleWrap =
    `absolute top-0 left-1/2 h-full w-1/2 overflow-hidden
     transition-all duration-700 ease-in-out rounded-[150px_0_0_100px] z-[1000]
     ${showSignUp ? "-translate-x-full rounded-[0_150px_100px_0]" : ""}`;

  const toggle =
    `absolute -left-full flex h-full w-[200%] items-center justify-center
     bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white
     transition-transform duration-700 ease-in-out
     ${showSignUp ? "translate-x-1/2" : ""}`;

  const panelBase =
    "flex h-full w-1/2 flex-col items-center justify-center px-8 text-center";

  /* shorthand utility groups */
  const inputClasses =
    "bg-gray-200 outline-none text-sm py-2 px-4 rounded-lg w-full my-2";

  const btnPrimary =
    "bg-[#512da8] text-white text-xs font-semibold py-2 px-12 rounded-lg uppercase tracking-wider";

  const btnOutline =
    "border border-white text-white text-xs font-semibold py-2 px-12 rounded-lg uppercase tracking-wider";

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-[Montserrat]">
      <div className={container}>
        {/* ----------------------- Sign‑Up form --------------------------- */}
        <div className={signUp}>
          <h1 className="text-3xl font-bold">Create Account</h1>

          <div className="my-5 flex space-x-2">
            {["google-plus-g", "facebook-f", "github", "linkedin-in"].map(i => (
              <a
                key={i}
                href="#/"
                className="border border-[#ccc] rounded-[20%] inline-flex h-10 w-10 items-center justify-center"
              >
                <i className={`fa-brands fa-${i}`}></i>
              </a>
            ))}
          </div>

          <span className="text-xs">or use your email for registration</span>

          <input type="text" placeholder="Name" className={inputClasses} />
          <input type="email" placeholder="Email" className={inputClasses} />
          <input type="password" placeholder="Password" className={inputClasses} />

          <button className={`${btnPrimary} mt-3`}>Sign Up</button>
        </div>

        {/* ----------------------- Sign‑In form --------------------------- */}
        <div className={signIn}>
          <h1 className="text-3xl font-bold">Sign In</h1>

          <div className="my-5 flex space-x-2">
            {["google-plus-g", "facebook-f", "github", "linkedin-in"].map(i => (
              <a
                key={i}
                href="#/"
                className="border border-[#ccc] rounded-[20%] inline-flex h-10 w-10 items-center justify-center"
              >
                <i className={`fa-brands fa-${i}`}></i>
              </a>
            ))}
          </div>

          <span className="text-xs">or use your email password</span>

          <input type="email" placeholder="Email" className={inputClasses} />
          <input type="password" placeholder="Password" className={inputClasses} />

          <a href="#/" className="text-xs mt-2">
            Forgot your password?
          </a>

          <button className={`${btnPrimary} mt-3`}>Sign In</button>
        </div>

        {/* --------------------- Toggle overlay panels -------------------- */}
        <div className={toggleWrap}>
          <div className={toggle}>
            {/* Welcome Back (left) */}
            <div className={`${panelBase} -translate-x-full`}>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="my-4 text-sm leading-5">
                Enter your personal details to use all of site features
              </p>
              <button className={btnOutline} onClick={() => setShowSignUp(false)}>
                Sign In
              </button>
            </div>

            {/* Hello, Friend (right) */}
            <div className={panelBase}>
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="my-4 text-sm leading-5">
                Register with your personal details to use all of site features
              </p>
              <button className={btnOutline} onClick={() => setShowSignUp(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}