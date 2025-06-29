import { ArrowDownTrayIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import  Download  from './Download';

function Header({pdfRef, fileName}) {
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
        <Download targetRef={pdfRef} fileName={fileName}/>
      </div>
    </div>
  );
}

export default Header;
