import Header from "../navbar/Header"
import Footer from "../navbar/Footer"
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";

export default function Corporate() {
  return (
    <>
      <Header />
    <div>
      <div className="flex items-center justify-between bg-blue-700 p-12">
        {/* ---------------------------------------------------------------- */}
        <div className="flex items-center text-white">
          <img
            src=""
            alt="Corporate.png"
            className="w-40 h-40 rounded-full bg-white"
          />
          <div className="flex flex-col p-4">
            <h1 className="font-bold text-3xl">Moresh Mishra</h1>
            <h3>Developer</h3>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        <div className="bg-blue-500 text-white rounded-xl shadow-lg p-6 w-80">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <ol className="space-y-2 text-sm">
            <li className="flex items-center">
              <EnvelopeIcon className="inline-block w-5 h-5 mr-2 " />
              m@gmail.com
            </li>
            <li className="flex items-center">
              <PhoneIcon className="inline-block w-5 h-5 mr-2" />
              +91 9876543210
            </li>
            <li className="flex items-center">
              <MapPinIcon className="inline-block w-5 h-5 mr-2" />
              Mumbai, India
            </li>
          </ol>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      
      {/* ------------------------------------------------------------ */}
        <div>
          <div className="flex flex-col p-4  mt-8 shadow-lg ml-8 mr-8 rounded-2xl">
          <div className="flex p-4 items-center">
          <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2"/>
        <h1 className=" text-2xl p-2">Executive Summary</h1>
        </div>
        <h3 className="p-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quam incidunt blanditiis debitis recusandae doloribus architecto in enim facere eaque! Iure expedita harum explicabo labore. Quis repellendus incidunt laudantium id!</h3>
        </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div className="flex flex-col p-4  mt-8 shadow-lg ml-8 mr-8 rounded-2xl">
          <div className="flex p-4 items-center">
          <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2"/>
        <h1 className=" text-2xl p-2">Core Competencies</h1>
        </div>
          <ol className="flex flex-col w-auto list-disc ml-8 [&>li::marker]:text-blue-300">
          <li className=" p-3 rounded-2xl">Java</li>
          <li className=" p-3 rounded-2xl">C++</li>
          <li className=" p-3 rounded-2xl">C</li>
          <li className=" p-3 rounded-2xl">HTML5</li>
          <li className=" p-3 rounded-2xl">CSS3</li>
        </ol>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div>
          <div className="flex flex-col p-4  mt-8 shadow-lg ml-8 mr-8 rounded-2xl">
          <div className="flex p-4 items-center">
          <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2"/>
        <h1 className=" text-2xl p-2">Professional Experience</h1>
        </div>
        <h3 className="p-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quam incidunt blanditiis debitis recusandae doloribus architecto in enim facere eaque! Iure expedita harum explicabo labore. Quis repellendus incidunt laudantium id!</h3>
        </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div>
          <div className="flex flex-col p-4  mt-8 shadow-lg ml-8 mr-8 rounded-2xl">
          <div className="flex p-4 items-center">
          <UserIcon className=" w-10 h-10 bg-blue-300 rounded-xl p-2"/>
        <h1 className=" text-2xl p-2">Key Projects</h1>
        </div>
        <h3 className="p-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quam incidunt blanditiis debitis recusandae doloribus architecto in enim facere eaque! Iure expedita harum explicabo labore. Quis repellendus incidunt laudantium id!</h3>
        </div>
        </div>
    </div>

    <Footer/>
    </>
  );
}
