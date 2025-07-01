import {ArrowLeftIcon, CalendarIcon} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import user5 from '../assets/user5.png';

function History() {
  const navigate = useNavigate();
  const home = () => navigate('/');
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

      <div className="ml-20 mt-10  font-bold">
        <h1 className=" text-4xl p-2">Your Portfolio History</h1>
        <h3 className=" text-gray-4 p-2 text-xl">View and manage all the Portfolios you have created</h3>
      </div>
      <div className="flex flex-col items-center  mt-10 bg-blue-200 p-4 w-[860px] h-[337px] ml-80 rounded-2xl">
        <img src={user5} alt="" className=" bg-blue-400  rounded-full w-20 h-20 p-2 mt-4" />
        <h1 className=" font-bold text-2xl">No portfolios Yet</h1>
      </div>
    </div>
  );
}

export default History;
