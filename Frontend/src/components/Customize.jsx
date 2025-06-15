import style from "../assets/style.png";
import {
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  BuildingOfficeIcon,
  CodeBracketIcon
} from "@heroicons/react/24/solid";
function Customize() {
  return (
    <main className="barba-wrapper">
      <section
        className="barba-container"
        data-barba="container"
        data-barba-namespace="customize"
      >
        <header className="bg-gradient-to-bl from-pink-100 to-blue-100 h-65">
          <div className="flex flex-col items-center sm:pt-16">
            <img
              className="border-1 w-18 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 animate-bounce mb-1 p-2"
              src={style}
              alt="Style icon"
            />
            <h1 className="text-[40px] font-bold text-center text-gray-800 mb-2">
              Choose Your Style
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Customize your portfolio in 3 steps
            </p>
          </div>
        </header>

        <section className="bg-gray-50 h-full pt-17 mb-5">
          <article className="bg-white border-1 border-gray-200 rounded-xl shadow-2xl w-300 mx-45 h-180 flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold mt-10">
              Choose Your Color Palette
            </h2>

            <section className="grid grid-cols-2 gap-17 mt-13">
  {/* Ocean Blue */}
  <button className="flex flex-col items-center border-2 border-gray-200 shadow-2xl cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow p-4">
    <div
      className="w-full h-24 rounded-xl mb-3"
      style={{
        background:
          "linear-gradient(to bottom right, #38bdf8 0%, #0ea5e9 33%, #fef3c6 66%, #e5e7eb 100%)",
      }}
    ></div>
    <h3 className="text-2xl font-serif mb-2">Ocean Blue</h3>
    <div className="flex gap-2 mt-2">
      <span className="w-8 h-8 bg-sky-400 rounded-full"></span>
      <span className="w-8 h-8 bg-sky-600 rounded-full"></span>
      <span className="w-8 h-8 bg-amber-100 rounded-full"></span>
      <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
    </div>
  </button>

  {/* Purple Dreams */}
  <button className="flex flex-col items-center border-2 border-gray-200 shadow-2xl cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow p-4">
    <div
      className="w-full h-24 rounded-xl mb-3"
      style={{
        background:
          "linear-gradient(to bottom right, #c084fc 0%, #9333ea 33%, #f472b6 66%, #f3f4f6 100%)",
      }}
    ></div>
    <h3 className="text-2xl font-serif mb-2">Purple Dreams</h3>
    <div className="flex gap-2 mt-2">
      <span className="w-8 h-8 bg-purple-400 rounded-full"></span>
      <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
      <span className="w-8 h-8 bg-pink-300 rounded-full"></span>
      <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
    </div>
  </button>

  {/* Forest Green */}
  <button className="flex flex-col items-center border-2 border-gray-200 shadow-2xl cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow p-4">
    <div
      className="w-full h-24 rounded-xl mb-3"
      style={{
        background:
          "linear-gradient(to bottom right, #22c55e 0%, #15803d 33%, #86efac 66%, #f3f4f6 100%)",
      }}
    ></div>
    <h3 className="text-2xl font-serif mb-2">Forest Green</h3>
    <div className="flex gap-2 mt-2">
      <span className="w-8 h-8 bg-green-500 rounded-full"></span>
      <span className="w-8 h-8 bg-green-700 rounded-full"></span>
      <span className="w-8 h-8 bg-emerald-300 rounded-full"></span>
      <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
    </div>
  </button>

  {/* Sunset Orange */}
  <button className="flex flex-col items-center border-2 border-gray-200 shadow-2xl cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow p-4">
    <div
      className="w-full h-24 rounded-xl mb-3"
      style={{
        background:
          "linear-gradient(to bottom right, #fb923c 0%, #ea580c 33%, #fecaca 66%, #f3f4f6 100%)",
      }}
    ></div>
    <h3 className="text-2xl font-serif mb-2">Sunset Orange</h3>
    <div className="flex gap-2 mt-2">
      <span className="w-8 h-8 bg-orange-400 rounded-full"></span>
      <span className="w-8 h-8 bg-orange-600 rounded-full"></span>
      <span className="w-8 h-8 bg-red-300 rounded-full"></span>
      <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
    </div>
  </button>
</section>

          </article>
          <article className="bg-white border-1 border-gray-200 rounded-xl shadow-2xl w-300 mx-45 mt-18 h-200 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-3 flex items-center justify-center mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-type w-6 h-6 mr-2"
                data-lov-id="src/components/TextStyleSelector.tsx:55:10"
                data-lov-name="Type"
                data-component-path="src/components/TextStyleSelector.tsx"
                data-component-line="55"
                data-component-file="TextStyleSelector.tsx"
                data-component-name="Type"
                data-component-content="%7B%22className%22%3A%22w-6%20h-6%20mr-2%22%7D"
              >
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" x2="15" y1="20" y2="20"></line>
                <line x1="12" x2="12" y1="4" y2="20"></line>
              </svg>
              Choose Your Typography
            </h2>
            <section className="grid grid-cols-2 gap-17 mt-13">
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-sans mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">
                    Modern Sans{" "}
                  </span>
                  <span className="text-gray-600 text-md mb-3">
                    Clean and professional sans-serif perfect for tech roles
                  </span>
                  <span className="font-sans text-md">
                    "This is how the font looks like."
                  </span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-serif mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">
                    Classic Seriff
                  </span>
                  <span className="text-gray-600 text-md mb-3">
                    Elegant serif font for traditional professional roles
                  </span>
                  <span className="font-serif text-md">
                    "This is how the font looks like."
                  </span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-mono mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">
                    Monospace{" "}
                  </span>
                  <span className="text-gray-600 text-md mb-3">
                    Friendly rounded font perfect for creative professionals
                  </span>
                  <span className="font-mono text-md">
                    "This is how the font looks like."
                  </span>
                </div>
              </button>
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-normal mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">
                    {" "}
                    Normal{" "}
                  </span>
                  <span className="text-gray-600 text-md mb-3">
                    Simple system font for a clean, minimalist look
                  </span>
                  <span className="font-normal text-md">
                    "This is how the font looks like."
                  </span>
                </div>
              </button>
            </section>
          </article>
          <article className="bg-white border-1 mt-20 border-gray-200 rounded-xl shadow-2xl w-300 mx-45 h-200 flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold mt-10">
              Choose Your Template Stlye
            </h2>
            <section className="grid grid-cols-2 gap-17 mt-13">
              <button className="flex flex-col items-center border-2 p-10 bg-pink-100 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <SparklesIcon className=" w-10 h-10"/>
                <h3 className="text-2xl font-bold font-sans mb-2">Creative</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-md font-bold">
                    Bold, artistic layout with unique sections
                  </span>
                  <ul>
                    Features:
                    <li>Asymmetric layouts</li>
                    <li>Creative animations</li>
                    <li>Artistic elements</li>
                  </ul>
                </div>
              </button>

              <button className="flex flex-col items-center border-2 p-10 cursor-pointer w-100 bg-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
                <AdjustmentsHorizontalIcon className=" w-10 h-10"/>
                <h3 className="text-2xl font-bold font-sans mb-2">Minimalist</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-md font-bold">
                    Clean, simple design focused on content
                  </span>
                  <ul>
                    Features:
                    <li>Lots of white space</li>
                    <li>Clean lines</li>
                    <li>Subtle animations</li>
                  </ul>
                </div>
              </button>

              <button className="flex flex-col items-center border-2 p-10 cursor-pointer w-100 rounded-2xl bg-sky-100 hover:shadow-lg transition-shadow">
                <BuildingOfficeIcon className=" w-10 h-10"/>
                <h3 className="text-2xl font-bold font-sans mb-2">Corporate</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-md font-bold">
                    Professional business-oriented layout
                  </span>
                  <ul>
                    Features:
                    <li>Structured layout</li>
                    <li>Formal sections</li>
                    <li>Business-focused</li>
                  </ul>
                </div>
              </button>

              <button className="flex flex-col items-center border-2 p-10 cursor-pointer w-100 rounded-2xl bg-green-100 hover:shadow-lg transition-shadow">
                <CodeBracketIcon className=" w-10 h-10"/>
                <h3 className="text-2xl font-bold font-sans mb-2">Developer</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-md font-bold">
                    Tech-focused with code elements
                  </span>
                  <ul>
                    Features:
                    <li>Code snippets</li>
                    <li>Tech icons</li>
                    <li>GitHub integration</li>
                  </ul>
                </div>
              </button>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Customize;
