import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import PropertyAddressModal from "./PropertyAddressModal";
import LeasingInfoModal from "./LeasingInfoModal";
import ChargesModal from "./ChargesModal";
import RentFrequencyModal from "./RentFrequencyModal";
import ApplicationAgreementModal from "./ApplicationAgreementModal";
import AboutPropertyModal from "./AboutPropertyModal";
import AmenitiesModal from "./AmenitiesModal";
import PetFeesModal from "./PetFeesModal";
import ParkingModal from "./ParkingModal";
import EducationalInstitutionModal from "./EducationalInstitutionModal";
import NearestStationModal from "./NearestStationModal";
import LandmarkModal from "./LandmarkModal";
import UtilitiesProviderModal from "./UtilitiesProviderModal";

const fields = [
  // Left column
  { label: "Property address", required: true, modal: "property", col: "left" },
  { label: "Leasing info", required: true, modal: "leasing", col: "left" },
  { label: "Charges", required: true, modal: "charges", col: "left" }, // <-- Add modal here
  {
    label: "Rent frequency & payment reminder",
    required: true,
    modal: "rent",
    col: "left",
  },
  {
    label: "Application agreement",
    required: false,
    modal: "agreement",
    col: "left",
  },
  { label: "About the property", required: false, modal: "about", col: "left" },
  {
    label: "Community's amenity/features",
    required: false,
    modal: "amenities",
    col: "left",
  },

  // Right column
  {
    label: "Pet fees (Optional, add fees if you allow pet)",
    required: false,
    modal: "petfees",
    col: "right",
  },
  { label: "Parking", required: false, modal: "parking", col: "right" },
  {
    label: "Nearest educational institution (Optional but recommended)",
    required: false,
    modal: "education",
    col: "right",
  },
  {
    label: "Nearest stations (Optional but recommended)",
    required: false,
    modal: "station",
    col: "right",
  },
  {
    label: "Nearest landmark (Optional but recommended)",
    required: false,
    modal: "landmark",
    col: "right",
  },
  {
    label: "Utilities provider (Optional but recommended)",
    required: false,
    modal: "utilities",
    col: "right",
  },
];

function getRows(fields) {
  // Pair left and right fields into rows
  const left = fields.filter((f) => f.col === "left");
  const right = fields.filter((f) => f.col === "right");
  const rows = [];
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    rows.push([left[i], right[i]]);
  }
  return rows;
}

export default function CondoInfoForm() {
  const [openModalField, setOpenModalField] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // for editing array fields
  const [values, setValues] = useState({});

  const rows = getRows(fields);

  // Helper to handle add/edit for each field
  const handleFieldAdd = (modal, value, idx = null) => {
    setValues((prev) => {
      // For array fields (like stations, amenities, etc)
      if (["station", "landmark", "education", "amenities"].includes(modal)) {
        const arr = Array.isArray(prev[modal]) ? [...prev[modal]] : [];
        if (idx !== null) arr[idx] = value;
        else arr.push(value);
        return { ...prev, [modal]: arr };
      }
      return { ...prev, [modal]: value };
    });
    setOpenModalField(null);
    setEditIndex(null);
  };

  // Helper to handle delete for array fields
  const handleFieldDelete = (modal, idx) => {
    setValues((prev) => {
      const arr = [...(prev[modal] || [])];
      arr.splice(idx, 1);
      return { ...prev, [modal]: arr };
    });
  };

  // Helper to handle delete for single fields
  const handleSingleDelete = (modal) => {
    setValues((prev) => ({ ...prev, [modal]: undefined }));
  };

  return (
    <div className="condo-info-container">
      {/* Section Title */}
      <h2 className="fustat-heading mb-6">Condominiums information</h2>

      {/* Info Fields */}
      <div className="condo-info-fields-container">
        {rows.map(([left, right], idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            {/* Left field */}
            {left && (
              <div className="infofield-container">
                <div className="flex justify-between items-center">
                  <span className="infofield-headline">
                    {left.label}
                    {left.required ? (
                      <span className="infofield-required">(Required)</span>
                    ) : (
                      <span className="infofield-optional">(Optional)</span>
                    )}
                  </span>
                  {values[left.modal] ? (
                    <button
                      className="ml-2 p-1 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 transition"
                      title="Edit"
                      onClick={() => {
                        setOpenModalField(left.modal);
                        setEditIndex(null);
                      }}
                    >
                      <FiEdit size={18} />
                    </button>
                  ) : (
                    <button
                      className="ml-2 infofield-add-btn"
                      onClick={() => {
                        setOpenModalField(left.modal);
                        setEditIndex(null);
                      }}
                    >
                      + Add
                    </button>
                  )}
                </div>
                {/* Show value(s) if present */}
                {values[left.modal] && (
                  <>
                    <hr className="my-2 border-gray-200" />
                    <div className="text-sm text-gray-900 leading-relaxed">
                      {/* If value is an object with manager/phone */}
                      {typeof values[left.modal] === "object" &&
                      values[left.modal] !== null ? (
                        <>
                          {values[left.modal].manager && (
                            <div>
                              Leasing manager: {values[left.modal].manager},{" "}
                              {values[left.modal].email}
                            </div>
                          )}
                          {values[left.modal].phone && (
                            <div>
                              <span className="font-semibold">
                                {values[left.modal].phone}
                              </span>{" "}
                              Address(same as property)
                            </div>
                          )}
                          {/* Add more fields as needed */}
                        </>
                      ) : (
                        // Fallback for string or other formats
                        <div>{values[left.modal]}</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
            {/* Right field */}
            {right && (
              <div className="infofield-container">
                <div className="flex justify-between items-center">
                  <span className="infofield-headline">
                    {right.label}
                    {right.required ? (
                      <span className="infofield-required">(Required)</span>
                    ) : (
                      <span className="infofield-optional">(Optional)</span>
                    )}
                  </span>
                  {values[right.modal] ? (
                    <button
                      className="ml-2 p-1 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 transition"
                      title="Edit"
                      onClick={() => {
                        setOpenModalField(right.modal);
                        setEditIndex(null);
                      }}
                    >
                      <FiEdit size={18} />
                    </button>
                  ) : (
                    <button
                      className="ml-2 infofield-add-btn"
                      onClick={() => {
                        setOpenModalField(right.modal);
                        setEditIndex(null);
                      }}
                    >
                      + Add
                    </button>
                  )}
                </div>
                {/* Show value(s) if present */}
                {values[right.modal] && (
                  <div className="mt-2 text-sm text-gray-700">
                    {/* Handle array fields */}
                    {Array.isArray(values[right.modal]) ? (
                      values[right.modal].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b py-1"
                        >
                          <span>
                            {item.name || item.type || JSON.stringify(item)}
                          </span>
                          <div className="flex items-center">
                            <button
                              className="text-blue-500 mr-2"
                              title="Edit"
                              onClick={() => {
                                setOpenModalField(right.modal);
                                setEditIndex(i);
                              }}
                            >
                              <FiEdit size={18} />
                            </button>
                            <button
                              className="text-red-500"
                              title="Delete"
                              onClick={() => handleFieldDelete(right.modal, i)}
                            >
                              <FiTrash size={18} />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-between">
                        <span>
                          {typeof values[right.modal] === "string"
                            ? values[right.modal]
                            : JSON.stringify(values[right.modal])}
                        </span>
                        <button
                          className="text-red-500"
                          title="Delete"
                          onClick={() => handleSingleDelete(right.modal)}
                        >
                          <FiTrash size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Property Gallery */}
      <div className="condo-gallery-container ">
        <div className="mb-2 videos-section-custom">
          <span className="property-gallery-headline">Property gallery</span>
          <span className="property-gallery-note">(Its not unit photo)</span>
          <span
            className="property-gallery-headline"
            style={{ color: "#272B35" }}
          >
            *
          </span>
        </div>
        <div className="flex gap-6 mb-4 items-center">
          {/* Upload cover photo */}
          <div className="flex flex-col items-start" style={{ width: 220 }}>
            <label className="gallery-featured-label custom-gallery-label mb-2">
              Featured photos<span style={{ color: "#F00" }}>*</span>
            </label>
            <div className="gallery-featured-upload">
              <img
                src="/src/assets/upload.png"
                alt="Upload"
                className="gallery-upload-icon"
                style={{ width: 40, height: 40 }}
              />
              <div className="gallery-featured-upload-text">
                Upload cover photo
              </div>
              <div className="gallery-featured-upload-subtext">
                (.jpg, .png only)
              </div>
            </div>
          </div>
          {/* 2x2 grid for more featured photos */}
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-7">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="gallery-more-upload">
                  <img
                    src="/src/assets/upload.png"
                    alt="Upload"
                    className="gallery-upload-icon"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* More photos section */}
          <div className="flex flex-col justify-center flex-1">
            <label className="gallery-more-label custom-gallery-label mb-2">
              More photos<span className="text-gray-400"> (optional)</span>
            </label>
            <div
              className="gallery-more-grid"
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="gallery-more-upload">
                  <img
                    src="/src/assets/upload.png"
                    alt="Upload"
                    className="gallery-upload-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* videos */}
        <div className=" videos-section-custom">
          <span className="property-gallery-headline"> Videos (optional)</span>
        </div>
      </div>

      {/* Modals */}
      <PropertyAddressModal
        open={openModalField === "property"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("property", data)}
        initialValue={values.property}
      />
      <LeasingInfoModal
        open={openModalField === "leasing"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("leasing", data)}
        initialValue={values.leasing}
      />
      <ChargesModal
        open={openModalField === "charges"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("charges", data)}
        initialValue={values.charges}
      />
      <RentFrequencyModal
        open={openModalField === "rent"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("rent", data)}
        initialValue={values.rent}
      />
      <ApplicationAgreementModal
        open={openModalField === "agreement"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("agreement", data)}
        initialValue={values.agreement}
      />
      <AboutPropertyModal
        open={openModalField === "about"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("about", data)}
        initialValue={values.about}
      />
      <AmenitiesModal
        open={openModalField === "amenities"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("amenities", data)}
        initialValue={values.amenities}
      />
      <PetFeesModal
        open={openModalField === "petfees"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("petfees", data)}
        initialValue={values.petfees}
      />
      <ParkingModal
        open={openModalField === "parking"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("parking", data)}
        initialValue={values.parking}
      />
      <EducationalInstitutionModal
        open={openModalField === "education"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("education", data, editIndex)}
        initialValue={
          editIndex !== null ? values.education?.[editIndex] : undefined
        }
      />
      <NearestStationModal
        open={openModalField === "station"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("station", data, editIndex)}
        initialValue={
          editIndex !== null ? values.station?.[editIndex] : undefined
        }
      />
      <LandmarkModal
        open={openModalField === "landmark"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("landmark", data, editIndex)}
        initialValue={
          editIndex !== null ? values.landmark?.[editIndex] : undefined
        }
      />
      <UtilitiesProviderModal
        open={openModalField === "utilities"}
        onClose={() => setOpenModalField(null)}
        onAdd={(data) => handleFieldAdd("utilities", data, editIndex)}
        initialValue={
          editIndex !== null ? values.utilities?.[editIndex] : undefined
        }
      />
      {/* Add more modals for other fields as needed */}
    </div>
  );
}
