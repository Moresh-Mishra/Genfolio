import {ArrowLeftIcon, CalendarIcon} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import user5 from '../assets/user5.png';
import Transitions from "./Transitions";

function History() {
  const navigate = useNavigate();
  const home = () => navigate('/');
  const userform = () => navigate('/form');
  return (
    <div>
      <div className="flex flex-row items-center gap-3 h-15 border-1 border-gray-300">
        <button onClick={home} className="ml-5 flex items-center gap-1 cursor-pointer px-3 py-1.5 hover:text-blue-500  font-semibold">
        <ArrowLeftIcon className="w-6 h-6 mr-1" />
        <h1>Back to home</h1>
        </button>

        <div className="flex flex-row items-center gap-1 ml-auto mr-25">
        <CalendarIcon className="w-6 h-6 mr-1 text-blue-500" />
        <h1 className="text-xl font-semibold">Portfolio History</h1>
        </div>
      </div>

      <div className="ml-20 mt-10">
        <h1 className=" text-4xl p-2 font-semibold">Your Portfolio History</h1>
        <h3 className=" text-gray-4 p-2 text-xl text-gray-600">View and manage all the Portfolios you have created</h3>
      </div>
      <div className="flex flex-col items-center  mt-10 border-1 border-gray-500 shadow-2xl p-4 w-[1360px] h-auto ml-23 rounded-2xl">
        <img src={user5} alt="" className=" bg-blue-400  rounded-full w-20 h-20 p-2 mt-4" />
        <h1 className=" font-bold text-2xl">No portfolios Yet</h1>
        <h1 className="text-gray-600 mt-4 text-md text-center">You haven't created any portfolios yet. Start building your first one!</h1>
      </div>
      <div className="ml-25 mt-15">
        <button onClick={userform} className="flex flex-row border-1 p-5 rounded-lg bg-blue-500 cursor-pointer hover:bg-blue-700">
        <img src={user5} alt="" className="w-7"/>
          <h1 className="text-lg text-white">Create New Portfolio</h1>
          </button>
      </div>
    </div>
  );
}

const WrappedHistory = Transitions(History);
export default WrappedHistory;
