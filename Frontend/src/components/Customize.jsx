import style from "../assets/style.png";

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
          <article className="bg-white border-1 border-gray-200 rounded-xl shadow-2xl w-300 mx-45 h-151 flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold mt-10">
              Choose Your Color Palette
            </h2>

            <section className="grid grid-cols-2 gap-17 mt-13">
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Ocean Blue</h3>
                <div className="flex gap-2 mt-3">
                  <span className="w-8 h-8 bg-sky-400 rounded-full"></span>
                  <span className="w-8 h-8 bg-sky-600 rounded-full"></span>
                  <span className="w-8 h-8 bg-amber-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Purple Dreams</h3>
                <div className="flex gap-2 mt-3">
                  <span className="w-8 h-8 bg-purple-400 rounded-full"></span>
                  <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
                  <span className="w-8 h-8 bg-pink-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Forest Green</h3>
                <div className="flex gap-2 mt-3">
                  <span className="w-8 h-8 bg-green-500 rounded-full"></span>
                  <span className="w-8 h-8 bg-green-700 rounded-full"></span>
                  <span className="w-8 h-8 bg-emerald-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg rounded-2xl transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Sunset Orange</h3>
                <div className="flex gap-2 mt-3">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type w-6 h-6 mr-2" data-lov-id="src/components/TextStyleSelector.tsx:55:10" data-lov-name="Type" data-component-path="src/components/TextStyleSelector.tsx" data-component-line="55" data-component-file="TextStyleSelector.tsx" data-component-name="Type" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20mr-2%22%7D"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>
              Choose Your Typography
            </h2>
            <section className="grid grid-cols-2 gap-17 mt-13">
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-sans mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">Modern Sans </span>
                  <span className="text-gray-600 text-md mb-3">Clean and professional sans-serif perfect for tech roles</span>
                  <span className="font-sans text-md">"This is how the font looks like."</span>                
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-serif mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">Classic Seriff</span>
                  <span className="text-gray-600 text-md mb-3">Elegant serif font for traditional professional roles</span>
                  <span className="font-serif text-md">"This is how the font looks like."</span>                
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-bold font-mono mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center">Monospace </span>
                  <span className="text-gray-600 text-md mb-3">Friendly rounded font perfect for creative professionals</span>
                  <span className="font-mono text-md">"This is how the font looks like."</span>                
                </div>
              </button>
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-4xl font-normal mb-2">Aa</h3>
                <div className="flex flex-col gap-2 mt-3">
                  <span className="text-center text-lg font-bold items-center"> Normal </span>
                  <span className="text-gray-600 text-md mb-3">Simple system font for a clean, minimalist look</span>
                  <span className="font-normal text-md">"This is how the font looks like."</span>                
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
