import { useState } from "react";
import "../index.css";
import uploadIcon from "../assets/upload.png";

export default function ProofOfOwnership() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div
      style={{
        width: "1280px",
        height: "177px",
        paddingBottom: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        borderRadius: "14px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#E0E0E0",
        background: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div className="proof-header">
        <span className="f">Proof of ownership</span>
      </div>
      {/* Content */}
      <div className="ownership-doc-layout">
        <div className="mb-2">
          <span className="ownership-doc-label">
            Ownership doc<span>*</span>
          </span>
        </div>
        {/* PDF Upload Area */}
        <label
          htmlFor="pdf-upload"
          className="ownership-pdf-upload mb-4 hover:border-blue-400 transition"
        >
          <span className="pdf-only-label">
            {" "}
            <img
              src={uploadIcon}
              alt="Upload"
              className="h-5 w-5 mr-2"
              style={{ display: "inline-block" }}
            />{" "}
            (Pdf only)
          </span>
          <input
            id="pdf-upload"
            type="file"
            accept="application/pdf"
            className="hidden"
          />
        </label>
        {/* Checkbox */}
        <div className="ownership-checkbox-row mt-2">
          <input
            id="accept-terms"
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted((v) => !v)}
            className="checkbox-dark w-4 h-4"
          />
          <label htmlFor="accept-terms" className="checkbox-label select-none">
            Accept RentYard property adding terms &amp; condition
          </label>
        </div>
      </div>
    </div>
  );
}
