// Download.jsx
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

/**
 * Props
 * ─────────────────────────────────────────────
 * • targetRef? – React ref whose .current is the DOM
 *               node you want in the PDF.
 *               If omitted, the entire document.body is captured.
 * • fileName?  – Name of the downloaded file (default: "MyPortfolio.pdf")
 */
export default function Download({ targetRef, fileName = 'MyPortfolio.pdf' }) {
  /* ------------------------------------------------------------ */
  const handleDownloadPdf = async () => {
    try {
      // ① Hide the Footer temporarily
      const footer = document.querySelector('footer, [class*="footer"], .footer, div.flex.flex-col.items-center.text-lg.p-5.border-1.border-gray-300.rounded-lg.shadow-lg');
      let prevDisplay = null;
      if (footer) {
        prevDisplay = footer.style.display;
        footer.style.display = 'none';
      }

      /* ② pick what to capture */
      const element = targetRef?.current || document.body;
      
      /* ③ get the HTML content and exclude header */
      let htmlContent = element.outerHTML;
      
      // If we're capturing the whole body, exclude the header
      if (!targetRef?.current) {
        const headerElement = document.querySelector('div.flex.flex-row.bg-white.p-5.border-1.border-gray-300, header, [class*="header"], .header');
        if (headerElement) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlContent;
          const headerInTemp = tempDiv.querySelector('div.flex.flex-row.bg-white.p-5.border-1.border-gray-300, header, [class*="header"], .header');
          if (headerInTemp) {
            headerInTemp.remove();
            htmlContent = tempDiv.innerHTML;
          }
        }
      }
      
      /* ④ create a complete HTML document with styles */
      const completeHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio</title>
          <style>
            /* Include all styles from the current page */
            ${Array.from(document.styleSheets)
              .map(sheet => {
                try {
                  return Array.from(sheet.cssRules)
                    .map(rule => rule.cssText)
                    .join('\n');
                } catch (e) {
                  return '';
                }
              })
              .join('\n')}
            
            /* Additional print styles */
            @media print {
              body { margin: 0; }
              * { box-sizing: border-box; }
            }
            
            /* Ensure proper rendering */
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            
            /* Fix any potential layout issues */
            img { max-width: 100%; height: auto; }
            .container { max-width: 100%; }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
        </html>
      `;

      /* ⑤ send to backend for PDF generation */
      const response = await fetch('http://localhost:5000/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          html: completeHtml,
          fileName: fileName
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      /* ⑥ get the PDF blob and trigger download */
      const pdfBlob = await response.blob();
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // ⑦ Show the Footer again
      if (footer) {
        footer.style.display = prevDisplay || '';
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };
  /* ------------------------------------------------------------ */

  return (
    <button
      type="button"
      onClick={handleDownloadPdf}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <ArrowDownTrayIcon className="w-5 h-5" />
      Download
    </button>
  );
}
