import { useState } from "react";

export default function RentFrequencyModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    frequency: "Monthly",
    reminderDate: "",
    dueDate: "",
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
        <h3 className="modal-field-header mb-6">Rent Frequency</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="modal-field-label mb-1">
                Rent payment frequency<span className="text-red-500">*</span>
              </label>
              <select
                name="frequency"
                value={form.frequency}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div>
              <label className="modal-field-label mb-1">
                Rent Reminder/Statement date<span className="text-red-500">*</span>
              </label>
              <input
                name="reminderDate"
                value={form.reminderDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="e.g. 25th Every month"
                required
              />
            </div>
            <div>
              <label className="modal-field-label mb-1">
                Rent due date<span className="text-red-500">*</span>
              </label>
              <input
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="e.g. 5th Every month"
                required
              />
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