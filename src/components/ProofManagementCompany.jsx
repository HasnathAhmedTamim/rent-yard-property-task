import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../index.css";
import uploadIcon from "../assets/upload.png";

export default function ProofManagementCompany() {
  const [form, setForm] = useState({
    companyName: "Runyan trade center ",
    companyId: "",
    country: "",
    street: "",
    email: "",
    city: "",
    jobTitle: "",
    apt: "",
    phone: "",
    state: "",
    zip: "",
    accept: false,
  });
  const [agreementFile, setAgreementFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <div className="pm-company-layout ">
        <div className="pm-header">Company & office info</div>
        <div>
          <form className="pm-form">
            {/* field div */}
            <div className="">
              {/* 1st row */}
              <div className="pm-grid">
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Company name<span>*</span>
                  </label>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Company identifier(EN/TN)<span>*</span>
                  </label>
                  <input
                    name="companyId"
                    value={form.companyId}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Your job title<span>*</span>
                  </label>
                  <input
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Agreement with landlord/owner<span>*</span>
                  </label>
                  <label
                    htmlFor="agreement-upload"
                    className="pm-field-two flex items-center border-dashed border-gray-300 cursor-pointer hover:border-blue-400 transition"
                  >
                    <span className="pdf-only-label ">
                      {" "}
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
                      className="hidden "
                      onChange={(e) => setAgreementFile(e.target.files[0])}
                      required
                    />
                    {agreementFile && (
                      <span className="ml-2 text-xs text-green-600">
                        {agreementFile.name}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              {/* 2nd row */}
              <div className="pm-grid">
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Country/Region<span>*</span>
                  </label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  >
                    <option value="">Choose country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Street address<span>*</span>
                  </label>
                  <input
                    name="street"
                    value={form.street}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Apt, suite, unit (if applicable)
                  </label>
                  <input
                    name="apt"
                    value={form.apt}
                    onChange={handleChange}
                    className="pm-field"
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1 ">
                    Phone number<span>*</span>
                  </label>
                  <PhoneInput
                    country={"us"}
                    value={form.phone}
                    onChange={(phone) =>
                      setForm((prev) => ({ ...prev, phone }))
                    }
                    inputClass="pm-field"
                    buttonClass="pm-phone-flag"
                    containerClass="pm-phone-container"
                    required
                  />
                </div>
              </div>

              {/* 3rd row */}
              <div className="pm-grid">
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Contact email<span>*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    City/Town<span>*</span>
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    State/Territory<span>*</span>
                  </label>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  >
                    <option value="">Select state</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                  </select>
                </div>
                <div className="pm-grid-col">
                  <label className="pm-label-title mb-1">
                    Zip code<span>*</span>
                  </label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    className="pm-field"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Checkbox */}
      <div className="ownership-checkbox-row mt-2">
        <input
          id="accept-terms"
          type="checkbox"
          checked={form.accept}
          onChange={handleChange}
          name="accept"
          className="checkbox-dark w-4 h-4"
        />
        <label htmlFor="accept-terms" className="checkbox-label select-none">
          Accept RentYard property adding terms &amp; condition
        </label>
      </div>
    </div>
  );
}
