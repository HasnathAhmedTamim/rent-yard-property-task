import { useState } from "react";

const AMENITIES = [
  "Air conditioning", "Cable ready", "Ceiling fan", "High ceilings", "Private balcony", "Refrigerator",
  "Wooded views", "W/D hookup", "Hardwood Floor (home)", "Hardwood Floor (home)", "Fireplace (home)",
  "First aid kit", "Carbon monoxide alarm", "Expanded patios (home)", "Free parking on premises", "Fire extinguisher"
];

export default function AmenitiesModal({ open, onClose, onAdd }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = AMENITIES.filter(a =>
    a.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAmenity = (amenity) => {
    setSelected((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(selected);
    setSelected([]);
    setSearch("");
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
        <h3 className="text-base font-semibold mb-4">Community's amenity/features</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search amenities"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm mb-4"
          />
          <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto mb-4">
            {filtered.map((amenity) => (
              <button
                type="button"
                key={amenity}
                className={`flex items-center border rounded-full px-3 py-1 text-sm transition
                  ${selected.includes(amenity)
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "bg-white border-gray-300 text-gray-700 hover:border-blue-400"
                  }`}
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity}
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-4">
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