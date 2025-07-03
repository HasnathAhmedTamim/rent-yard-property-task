import { useState } from "react";

export default function ApplicationAgreementModal({ open, onClose, onAdd }) {
  const [file, setFile] = useState(null);
  const [acceptInternational, setAcceptInternational] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
    } else {
      setFile(null);
      alert("Only PDF files are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ file, acceptInternational });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="modal-field-header mb-6">Application Agreement</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="modal-field-label mb-1">Agreement Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mb-4"
              required
            />
            <label className="modal-field-label mb-1">Description</label>
            <textarea
              className="w-full border rounded-md p-2 mb-4"
              rows="3"
              required
            ></textarea>
            <label className="block text-xs mb-1 font-medium">
              Upload agreement
            </label>
            <label className="flex items-center border-2 border-dashed border-gray-300 rounded-md px-3 py-4 cursor-pointer text-gray-400 hover:border-blue-400 transition">
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path d="M12 16V4M12 16l-4-4m4 4l4-4" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="18" width="16" height="2" rx="1" fill="#888"/>
                </svg>
                {file ? file.name : "Click to upload"}
                <span className="ml-2 text-xs text-gray-400">(Pdf only)</span>
              </span>
            </label>
          </div>
          <div className="mt-4 flex items-center">
            <input
              id="accept-international"
              type="checkbox"
              checked={acceptInternational}
              onChange={e => setAcceptInternational(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="accept-international" className="text-sm">
              Accept immigrant & international student application
            </label>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}