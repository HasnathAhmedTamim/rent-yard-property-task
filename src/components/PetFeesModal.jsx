import { useState } from "react";

export default function PetFeesModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    petType: "",
    maxWeight: "",
    oneTimeFee: "",
    securityDeposit: "",
    monthlyRent: "",
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
        <h3 className="text-base font-semibold mb-6">Pet fees</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1 font-medium">
                Pet type<span className="text-red-500">*</span>
              </label>
              <select
                name="petType"
                value={form.petType}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              >
                <option value="">Select</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Max weight(LB)<span className="text-red-500">*</span>
              </label>
              <input
                name="maxWeight"
                value={form.maxWeight}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
                type="number"
                min="0"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs mb-1 font-medium">
                One time pet fee<span className="text-red-500">*</span>
              </label>
              <input
                name="oneTimeFee"
                value={form.oneTimeFee}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
                type="number"
                min="0"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Pet Security Deposit<span className="text-red-500">*</span>
              </label>
              <input
                name="securityDeposit"
                value={form.securityDeposit}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
                type="number"
                min="0"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Monthly pet rent<span className="text-red-500">*</span>
              </label>
              <input
                name="monthlyRent"
                value={form.monthlyRent}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
                type="number"
                min="0"
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