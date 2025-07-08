import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Transitions from "../components/Transitions";

export default Transitions(function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  // State for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // State for signup
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");

  const navigate = useNavigate();

  // Classes
  const containerClass = "w-[950px] h-[500px] bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex relative transition-all duration-700";
  const panelClass = "flex flex-col items-center justify-center h-full px-8 text-center w-1/2";
  const btnOutline = "border border-white text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider hover:bg-white hover:text-blue-700 transition-all duration-200 mt-6";

  // Overlay animation logic
  const overlayClass = `absolute top-0 left-0 w-1/2 h-full transition-all duration-700 z-20
    ${showSignUp ? 'translate-x-full' : 'translate-x-0'}
    bg-gradient-to-r from-blue-600 to-purple-500 text-white flex items-center justify-center`;

  // Handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMessage("");
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        credentials: "include"
      });
      const data = await res.json();
      if (res.ok) {
        setLoginMessage("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setLoginMessage(data.error || "Login failed");
      }
    } catch (err) {
      setLoginMessage("Network error");
    }
  };

  // Handle signup submit
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupMessage("");
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: signupName, email: signupEmail, password: signupPassword })
      });
      const data = await res.json();
      if (res.ok) {
        setSignupMessage("Registration successful! You can now sign in.");
        setShowSignUp(false);
      } else {
        setSignupMessage(data.error || "Registration failed");
      }
    } catch (err) {
      setSignupMessage("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-pink-100 to-blue-100 font-[Montserrat]">
      <div className={containerClass}>
        {/* Forms container */}
        <div className="flex w-full h-full relative z-10">
          {/* Sign In Form */}
          <div className={panelClass}>
            <form className="w-full max-w-xs" onSubmit={handleLogin}>
              <h1 className="text-3xl font-bold text-blue-800 mb-4">Sign In</h1>
              <input name="email" type="email" placeholder="Email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input name="password" type="password" placeholder="Password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider shadow-md transition-all duration-200 mt-4 w-full">Sign In</button>
              {loginMessage && <div className="mt-2 text-sm text-red-500">{loginMessage}</div>}
            </form>
          </div>
          {/* Sign Up Form */}
          <div className={panelClass}>
            <form className="w-full max-w-xs" onSubmit={handleSignup}>
              <h1 className="text-3xl font-bold text-blue-800 mb-4">Create Account</h1>
              <input name="name" type="text" placeholder="Name" value={signupName} onChange={e => setSignupName(e.target.value)} className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input name="email" type="email" placeholder="Email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <input type="password" placeholder="Password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} className="bg-gray-100 outline-none text-base py-2 px-4 rounded-lg w-full my-2 border border-blue-100 focus:ring-2 focus:ring-blue-300" />
              <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold py-2 px-12 rounded-lg uppercase tracking-wider shadow-md transition-all duration-200 mt-4 w-full">Sign Up</button>
              {signupMessage && <div className="mt-2 text-sm text-red-500">{signupMessage}</div>}
            </form>
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
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                <p className="my-4 text-sm leading-5">
                  To keep connected with us, please log in with your personal info.
                </p>
                <button className={btnOutline} onClick={() => setShowSignUp(true)}>
                  Sign In
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
});