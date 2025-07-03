import { useState } from "react";

export default function AboutPropertyModal({ open, onClose, onAdd }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(message);
    setMessage("");
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
        <h3 className="modal-field-header mb-6">About Property</h3>
        <form onSubmit={handleSubmit}>
          <label className="modal-field-label mb-1">Description</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 text-sm min-h-[120px] resize-none"
            placeholder="Type message here"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
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