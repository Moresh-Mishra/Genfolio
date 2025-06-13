import style from "../assets/style.png";

function Customize() {
  return (
    <main className="barba-wrapper">
      <section className="barba-container" data-barba="container" data-barba-namespace="customize">
        <header className="bg-gradient-to-bl from-pink-100 to-blue-100 h-70 p-3">
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

        <section className="bg-gray-50 h-auto pt-12 mb-5">
          <article className="bg-white border-1 border-gray-200 rounded-xl shadow-2xl w-300 mx-45 h-200 flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold mt-7">
              Choose Your Color Palette
            </h2>
            
            <section className="grid grid-cols-2 gap-12 mt-12">
              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Ocean Blue</h3>
                <div className="flex gap-2 mt-2">
                  <span className="w-8 h-8 bg-sky-400 rounded-full"></span>
                  <span className="w-8 h-8 bg-sky-600 rounded-full"></span>
                  <span className="w-8 h-8 bg-amber-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Purple Dreams</h3>
                <div className="flex gap-2 mt-2">
                  <span className="w-8 h-8 bg-purple-400 rounded-full"></span>
                  <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
                  <span className="w-8 h-8 bg-pink-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-serif mb-2">Forest Green</h3>
                <div className="flex gap-2 mt-2">
                  <span className="w-8 h-8 bg-green-500 rounded-full"></span>
                  <span className="w-8 h-8 bg-green-700 rounded-full"></span>
                  <span className="w-8 h-8 bg-emerald-300 rounded-full"></span>
                  <span className="w-8 h-8 bg-gray-200 rounded-full"></span>
                </div>
              </button>

              <button className="flex flex-col border-2 p-10 cursor-pointer w-100 hover:shadow-lg transition-shadow">
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
        </section>
      </section>
    </main>
  );
}

export default Customize;
