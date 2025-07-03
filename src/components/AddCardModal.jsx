import { useState } from "react";

export default function AddCardModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <div
        className="bg-white rounded-xl shadow-xl"
        style={{ width: 520, padding: "32px 32px 24px 32px" }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="font-medium text-lg">Add new card</div>
          <button
            className="text-gray-400 hover:text-gray-700 text-2xl"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSave(form);
          }}
        >
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Name on card</label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-base"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Alex Jones"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Card number</label>
              <div className="relative">
                <input
                  className="w-full border rounded-lg px-3 py-2 text-base pr-10"
                  value={form.number}
                  onChange={e => setForm(f => ({ ...f, number: e.target.value }))}
                  placeholder="0000 0000 0000 0000"
                  required
                  maxLength={19}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm mb-1">Expire date</label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-base"
                value={form.expiry}
                onChange={e => setForm(f => ({ ...f, expiry: e.target.value }))}
                placeholder="MM/YY"
                required
                maxLength={5}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">CVC</label>
              <div className="relative">
                <input
                  className="w-full border rounded-lg px-3 py-2 text-base pr-10"
                  value={form.cvc}
                  onChange={e => setForm(f => ({ ...f, cvc: e.target.value }))}
                  placeholder="123"
                  required
                  maxLength={4}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="20" height="20" fill="none"><rect width="20" height="20" rx="10" fill="#F3F4F6"/><path d="M7 10h6M7 13h6" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round"/><rect x="7" y="7" width="6" height="2" rx="1" fill="#A3A3A3"/></svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-7 py-2 rounded-lg font-semibold text-base"
              style={{ minWidth: 90 }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}