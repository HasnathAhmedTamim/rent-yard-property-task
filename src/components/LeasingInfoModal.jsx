import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function LeasingInfoModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    managerName: "",
    managerPhone: "",
    managerEmail: "",
    sameAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="modal-field-header mb-6">Leasing Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="modal-field-label mb-1">
                Manager Name<span className="text-red-500">*</span>
              </label>
              <input
                name="managerName"
                value={form.managerName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="modal-field-label mb-1">
                Contact Number<span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"bd"}
                value={form.managerPhone}
                onChange={(phone) =>
                  setForm((prev) => ({ ...prev, managerPhone: phone }))
                }
                inputClass="w-full border rounded-md px-3 py-2 text-sm"
                containerClass="w-full"
                required
              />
            </div>
            <div>
              <label className="modal-field-label mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                name="managerEmail"
                type="email"
                value={form.managerEmail}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div className="flex items-center mt-6">
              <input
                id="same-address"
                name="sameAddress"
                type="checkbox"
                checked={form.sameAddress}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="same-address" className="text-sm">
                Address (same as property)
              </label>
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