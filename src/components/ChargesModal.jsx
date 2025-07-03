import { useState } from "react";

export default function ChargesModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    applicationFee: "",
    applicantType: "All 18+ applicant",
    adminFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
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
        <h3 className="modal-field-header mb-6">Charges</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 flex gap-4">
              <div className="flex-1">
                <label className="modal-field-label mb-1">
                  Application fee(one-time)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="applicationFee"
                  value={form.applicationFee}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs mb-1 font-medium invisible">
                  Applicant type
                </label>
                <select
                  name="applicantType"
                  value={form.applicantType}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option>All 18+ applicant</option>
                  <option>Primary applicant only</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Admin fee(one-time)<span className="text-red-500">*</span>
              </label>
              <input
                name="adminFee"
                value={form.adminFee}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-500 text-xs">
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#888"
                  strokeWidth="2"
                />
                <rect
                  x="11"
                  y="10"
                  width="2"
                  height="5"
                  rx="1"
                  fill="#888"
                />
                <rect
                  x="11"
                  y="7"
                  width="2"
                  height="2"
                  rx="1"
                  fill="#888"
                />
              </svg>
            </span>
            Type 0 if charges not applicable
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