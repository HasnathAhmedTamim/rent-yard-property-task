import { useState } from "react";

const UTILITY_TYPES = [
  "Electricity",
  "Water",
  "Gas",
  "Internet",
  "Trash",
  "Other",
];

export default function UtilitiesProviderModal({ open, onClose, onAdd }) {
  const [utilityType, setUtilityType] = useState("");
  const [providerName, setProviderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ utilityType, providerName });
    setUtilityType("");
    setProviderName("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-8 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="modal-field-header mb-6">Utilities Provider</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="modal-field-label mb-1">
                Provider Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="Enter name"
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="modal-field-label mb-1">
                Type<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border rounded-md px-3 py-2 text-sm"
                value={utilityType}
                onChange={(e) => setUtilityType(e.target.value)}
                required
              >
                <option value="">Select</option>
                {UTILITY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
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