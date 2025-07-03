import { useState } from "react";

const PARKING_TIMES = ["1H", "2H", "3H", "4H", "6H", "12H", "24H", "No limit"];

export default function ParkingModal({ open, onClose, onAdd }) {
  const [guestTime, setGuestTime] = useState("2H");
  const [overview, setOverview] = useState("");
  const maxChars = 200;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ guestTime, overview });
    setGuestTime("2H");
    setOverview("");
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
        <h3 className="modal-field-header mb-6">Parking</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 mb-4  ">
            <label className="flex items-center gap-10 text-xs font-medium min-w-max border rounded-md px-3 py-2 ">
              Guest vehicle parking time  
              <select
                className="border rounded-md px-1 py-1  text-sm"
                value={guestTime}
                onChange={(e) => setGuestTime(e.target.value)}
              >
                {PARKING_TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            {/* <select
              className="border rounded-md px-3 py-2 text-sm"
              value={guestTime}
              onChange={(e) => setGuestTime(e.target.value)}
            >
              {PARKING_TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select> */}
          </div>
          <div className="relative">
            <textarea
              className="w-full border rounded-md px-3 py-2 text-sm min-h-[100px] resize-none"
              placeholder="Write parking overview"
              value={overview}
              maxLength={maxChars}
              onChange={(e) => setOverview(e.target.value)}
            />
            <span className="absolute bottom-2 right-4 text-xs text-gray-400">
              {overview.length},{maxChars}
            </span>
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