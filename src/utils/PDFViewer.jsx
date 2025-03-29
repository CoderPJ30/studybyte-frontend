import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { faChevronUp, faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        alert("Printing is disabled!");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const clearClipboard = async () => {
      try {
        await navigator.clipboard.writeText(""); // Clears the clipboard
      } catch (err) {
        console.error("Clipboard clearing failed:", err);
      }
    };
    document.addEventListener("keyup", clearClipboard);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keyup", clearClipboard);
    }

  }, []);



  return (
    <div className="flex flex-col items-center w-full h-screen p-2 bg-neutral-700 relative">
      <div className="flex justify-start absolute top-2 right-12">
        <FontAwesomeIcon icon={faClose} className="text-white text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>

      {/* PDF Container */}
      <div className="w-fit max-w-4xl h-full shadow-lg rounded-lg bg-white p-4 flex justify-center items-center overflow-auto">
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="w-full flex justify-center"
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} width={600} scale={0.8} />
        </Document>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col gap-4 items-center absolute bottom-5 right-5 text-white bg-zinc-900 rounded-lg p-2">
        <button
          className="px-4 py-2 bg-zinc-500 text-white rounded-lg hover:bg-zinc-600 disabled:bg-gray-600"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <div className="flex flex-col items-center gap-2 text-lg text-white">
          <input
            type="number"
            value={pageNumber}
            onChange={(e) => setPageNumber(Number(e.target.value))}
            onFocus={(e) => e.target.select()}
            className="w-12 py-1 text-center bg-transparent border border-gray-300 rounded-md outline-none 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               [&::-webkit-inner-spin-button]:appearance-none 
               [&::-webkit-outer-spin-button]:appearance-none 
               [&::-moz-inner-spin-button]:appearance-none"
          />
          <span className="mx-2">of</span>
          <div>
            <span>{numPages}</span>
          </div>
        </div>

        <button
          className="px-4 py-2 bg-zinc-500 text-white rounded-lg hover:bg-zinc-600 disabled:bg-gray-600"
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
