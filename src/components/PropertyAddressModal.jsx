import { useState } from "react";

export default function PropertyAddressModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    totalUnits: "",
    website: "",
    country: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
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
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-8 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-lg font-semibold mb-6">Property address</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs mb-1 font-medium">
                Property name as identifier<span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Total apartment unit<span className="text-red-500">*</span>
              </label>
              <input
                name="totalUnits"
                value={form.totalUnits}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Property website (optional)
              </label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="https://"
                type="url"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Country/Region<span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              >
                <option value="">Choose country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Street address<span className="text-red-500">*</span>
              </label>
              <input
                name="street"
                value={form.street}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Apt, suite, unit (if applicable)
              </label>
              <input
                name="apt"
                value={form.apt}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                City/Town<span className="text-red-500">*</span>
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                State/Territory<span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
                required
              >
                <option value="">Choose state</option>
                <option value="TX">Texas</option>
                <option value="CA">California</option>
                {/* Add more states as needed */}
              </select>
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Zip code<span className="text-red-500">*</span>
              </label>
              <input
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
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