import { useState } from "react";
import uploadIcon from "../assets/upload.png";

export default function RealtorVerification() {
  const [form, setForm] = useState({
    licenseNumber: "",
    additionalDocs: "",
    agreement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="realtor-verification-header">Realtor verification</h2>
      <div
        className="mx-auto rounded-lg border"
        style={{
          width: "1280px",
          height: "167px",
          boxSizing: "border-box",

          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <form>
          <div
            className="grid grid-cols-1 md:grid-cols-3 justify-center items-center"
            style={{
              width: "1280px",
              height: "81px",
              gap: "16px",
              paddingRight: "16px",
              paddingLeft: "16px",
              boxSizing: "border-box",
            }}
          >
            {/* License number */}
            <div>
              <label className="realtor-verification-label mb-1">
                License number<span>*</span>
              </label>
              <input
                type="text"
                name="licenseNumber"
                value={form.licenseNumber}
                onChange={handleChange}
                placeholder="0000000000000000"
                className="realtor-licence-input mt-1 block"
                maxLength={16}
                required
              />
            </div>
            {/* Additional documents for realtor */}
            <div>
              <label className="realtor-verification-label mb-1">
                Additional documents for realtor
              </label>
              <label
                htmlFor="additional-docs-upload"
                className="realtor-pdf-upload mt-1 hover:border-indigo-500 transition"
              >
                <span className="text-gray-500 text-sm flex-1 text-center">
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    className="h-5 w-5 mr-2"
                    style={{ display: "inline-block" }}
                  />{" "}
                  (PDF only)
                </span>
                <input
                  id="additional-docs-upload"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      additionalDocs: e.target.files[0],
                    }))
                  }
                />
                {form.additionalDocs &&
                  typeof form.additionalDocs === "object" && (
                    <span className="ml-2 text-xs text-green-600">
                      {form.additionalDocs.name}
                    </span>
                  )}
              </label>
            </div>
            {/* Agreement with landlord */}
            <div>
              <label className="realtor-verification-label mb-1">
                Agreement with landlord
              </label>
              <label
                htmlFor="agreement-upload"
                className="realtor-pdf-upload mt-1 hover:border-indigo-500 transition"
              >
                <span className="text-gray-500 text-sm flex-1 text-center">
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    className="h-5 w-5 mr-2"
                    style={{ display: "inline-block" }}
                  />{" "}
                  (PDF only)
                </span>
                <input
                  id="agreement-upload"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      agreement: e.target.files[0],
                    }))
                  }
                />
                {form.agreement && typeof form.agreement === "object" && (
                  <span className="ml-2 text-xs text-green-600">
                    {form.agreement.name}
                  </span>
                )}
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
