// Download.jsx
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
    /* ① pick what to capture */
    const element = targetRef?.current || document.body;

    /* ② rasterise the DOM to a crisp canvas */
    const canvas = await html2canvas(element, {
      scale: 2,          // 2× = sharper text
      useCORS: true,
      backgroundColor:
        getComputedStyle(document.body).backgroundColor || '#ffffff',
    });

    /* ③ create a jsPDF and work out page sizes */
    const pdf = new jsPDF('p', 'mm');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // px → mm   (96 dpi ⇒ 1 px = 0.264583 mm)
    const pxToMm = (px) => px * 0.264583;
    const imgWidthMm = pxToMm(canvas.width);
    const imgHeightMm = pxToMm(canvas.height);
    const imgData = canvas.toDataURL('image/png');

    /* ④ add as many PDF pages as needed */
    let heightLeft = imgHeightMm;
    let position = 0;

    while (heightLeft > 0) {
      pdf.addImage(imgData, 'PNG', 0, position, pageWidth, imgHeightMm);
      heightLeft -= pageHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        position -= pageHeight; // shift image up for the next slice
      }
    }

    /* ⑤ trigger browser download */
    pdf.save(fileName);
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
