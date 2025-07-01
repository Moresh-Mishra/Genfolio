import {ArrowLeftIcon, CalendarIcon} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

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

      <div className="ml-20 mt-10 text-4xl font-bold">
        <h1>Your Portfolio History</h1>
      </div>
    </div>
  );
}

export default History;
