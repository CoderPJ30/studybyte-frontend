import { useEffect, useState } from "react";
import apiCall from "../api/api.js";
import PDFViewer from "../utils/PDFViewer.jsx";
import { useParams } from "react-router-dom";

const BookReader = () => {
  const { bookId } = useParams();
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await apiCall(`/books/${bookId}/read`);

        if (typeof response.data?.fileUrl === "string") {
          setPdfUrl(response.data.fileUrl);
        } else if (response.data instanceof Blob) {
          setPdfUrl(URL.createObjectURL(response.data));
        } else {
          setPdfUrl(null);
        }
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchBook();
  }, []);

  return pdfUrl ? <PDFViewer pdfUrl={pdfUrl} /> : <p>Loading...</p>;
};

export default BookReader;
