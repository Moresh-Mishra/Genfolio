import { ArrowDownTrayIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const home = () => navigate('/');
  
  return (
    <div className="flex flex-row bg-white p-5 border-1 border-gray-300">
      <div className="flex items-center justify-between w-full">
        {/* Back to Home - Left side */}
        <button onClick={home} className="flex cursor-pointer items-center gap-2 ml-10">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </button>

        {/* Share - Right side */}
        <button className="flex cursor-pointer  items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download
        </button>
      </div>
    </div>
  );
}

export default Header;
