import { useState } from "react";

const DISTANCE_UNITS = ["Mile", "Km"];

export default function LandmarkModal({ open, onClose, onAdd }) {
  const [type, setType] = useState("");
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("Mile");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ type, distance, unit, name });
    setType("");
    setDistance("");
    setUnit("Mile");
    setName("");
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
        <h3 className="text-base font-semibold mb-6">Add landmark</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs mb-1 font-medium">
                Landmark type<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder="e.g. Museum"
                value={type}
                onChange={e => setType(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-medium">
                Distance from property<span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <input
                  type="number"
                  min="0"
                  step="any"
                  className="w-2/3 border rounded-l-md px-3 py-2 text-sm border-r-0"
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                  required
                />
                <select
                  className="w-1/3 border rounded-r-md px-3 py-2 text-sm"
                  value={unit}
                  onChange={e => setUnit(e.target.value)}
                  required
                >
                  {DISTANCE_UNITS.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1 font-medium">
              Landmark name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
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