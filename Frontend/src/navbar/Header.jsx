import { ArrowDownTrayIcon, ArrowLeftIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/solid';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Header({pdfRef, fileName}) {
  const navigate = useNavigate();
  const { portfolioId } = useParams();
  const location = useLocation();
  const [shareUrl, setShareUrl] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Generate share URL if we have a portfolio ID
    if (portfolioId) {
      const currentUrl = window.location.href;
      setShareUrl(currentUrl);
    }
  }, [portfolioId]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const home = () => navigate('/');

  const copyToClipboard = async () => {
    if (shareUrl) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert('URL copied to clipboard!');
        setShowDropdown(false);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-row bg-white p-5 border-1 border-gray-300">
      <div className="flex items-center justify-between w-full">
        {/* Back to Home - Left side */}
        <button onClick={home} className="flex cursor-pointer items-center gap-2 ml-10">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </button>

        {/* Download and Share Buttons - Right side */}
        <div className="flex items-center gap-3 mr-10">
          {/* Download PDF Button */}
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download PDF
          </button>

          {/* Share Button */}
          {shareUrl && (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ShareIcon className="w-5 h-5" />
                Share
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Share your portfolio</h3>
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md mb-3">
                      <input 
                        type="text" 
                        value={shareUrl} 
                        readOnly 
                        className="flex-1 text-sm bg-transparent border-none outline-none"
                      />
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <LinkIcon className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Share this link with others to show them your portfolio
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
