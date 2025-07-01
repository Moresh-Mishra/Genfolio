import { ArrowDownTrayIcon, ArrowLeftIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/solid';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import generatePDF from 'react-to-pdf';

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

  const handleDownloadPDF = () => {
    const options = {
      filename: fileName || 'portfolio.pdf',
      page: {
        margin: 10,
        format: 'a4',
        orientation: 'portrait'
      }
    };
    
    // Add CSS to convert oklch colors to standard colors for PDF generation
    const style = document.createElement('style');
    style.textContent = `
      /* Convert oklch colors to standard colors for PDF generation */
      * {
        color: inherit !important;
        background-color: inherit !important;
        border-color: inherit !important;
      }
      
      /* Override problematic oklch colors with standard alternatives */
      .bg-gradient-to-br { background: linear-gradient(to bottom right, #6366f1, #8b5cf6, #ec4899) !important; }
      .bg-gradient-to-bl { background: linear-gradient(to bottom left, #1e3a8a, #1e40af) !important; }
      .bg-gradient-to-r { background: linear-gradient(to right, #06b6d4, #3b82f6) !important; }
      .bg-gradient-to-tr { background: linear-gradient(to top right, #ec4899, #8b5cf6, #3b82f6) !important; }
      
      /* Text colors */
      .text-emerald-500 { color: #10b981 !important; }
      .text-blue-500 { color: #3b82f6 !important; }
      .text-green-500 { color: #22c55e !important; }
      .text-white { color: #ffffff !important; }
      .text-gray-300 { color: #d1d5db !important; }
      .text-gray-500 { color: #6b7280 !important; }
      .text-gray-600 { color: #4b5563 !important; }
      .text-gray-800 { color: #1f2937 !important; }
      .text-gray-900 { color: #111827 !important; }
      .text-black { color: #000000 !important; }
      
      /* Background colors */
      .bg-white { background-color: #ffffff !important; }
      .bg-gray-100 { background-color: #f3f4f6 !important; }
      .bg-blue-300 { background-color: #93c5fd !important; }
      .bg-blue-500 { background-color: #3b82f6 !important; }
      .bg-green-500 { background-color: #22c55e !important; }
      .bg-slate-800 { background-color: #1e293b !important; }
      .bg-slate-900 { background-color: #0f172a !important; }
      .bg-emerald-500 { background-color: #10b981 !important; }
      .bg-pink-400 { background-color: #f472b6 !important; }
      .bg-purple-400 { background-color: #c084fc !important; }
      .bg-cyan-400 { background-color: #22d3ee !important; }
      .bg-blue-400 { background-color: #60a5fa !important; }
      .bg-blue-600 { background-color: #2563eb !important; }
      .bg-blue-800 { background-color: #1e40af !important; }
      .bg-blue-900 { background-color: #1e3a8a !important; }
      .bg-purple-500 { background-color: #8b5cf6 !important; }
      .bg-purple-800 { background-color: #5b21b6 !important; }
      .bg-indigo-900 { background-color: #312e81 !important; }
      .bg-pink-500 { background-color: #ec4899 !important; }
      .bg-pink-600 { background-color: #db2777 !important; }
      .bg-violet-600 { background-color: #7c3aed !important; }
      .bg-cyan-300 { background-color: #67e8f9 !important; }
      .bg-blue-900 { background-color: #1e3a8a !important; }
      .bg-black { background-color: #000000 !important; }
      .bg-gray-700 { background-color: #374151 !important; }
      .bg-gray-900 { background-color: #111827 !important; }
      
      /* Border colors */
      .border-emerald-300 { border-color: #6ee7b7 !important; }
      .border-blue-300 { border-color: #93c5fd !important; }
      .border-gray-300 { border-color: #d1d5db !important; }
      .border-emerald-500 { border-color: #10b981 !important; }
      .border-white { border-color: #ffffff !important; }
      
      /* Specific color overrides for gradients */
      .from-\\[\\#5a2496\\] { background: linear-gradient(to bottom right, #5a2496, #1e267c, #1a3a8c) !important; }
      .via-\\[\\#1e267c\\] { background: linear-gradient(to bottom right, #5a2496, #1e267c, #1a3a8c) !important; }
      .to-\\[\\#1a3a8c\\] { background: linear-gradient(to bottom right, #5a2496, #1e267c, #1a3a8c) !important; }
      .from-\\[\\#f9fbfc\\] { background-color: #f9fbfc !important; }
    `;
    
    // Temporarily add the style to the document
    document.head.appendChild(style);
    
    // Generate PDF
    generatePDF(pdfRef, options).then(() => {
      // Remove the temporary style after PDF generation
      document.head.removeChild(style);
    }).catch((error) => {
      console.error('PDF generation error:', error);
      // Remove the temporary style even if there's an error
      document.head.removeChild(style);
    });
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
            onClick={window.print()}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
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
