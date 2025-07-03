// Import property type icons
import houseIcon from "./assets/home.png";
import apartmentIcon from "./assets/house.png";
import condoIcon from "./assets/building.png";

// Import role icons
import landlordIcon from "./assets/key.png";
import realtorIcon from "./assets/manager.png";
import managerIcon from "./assets/permanentJob.png";
import ProofOfOwnership from "./components/ProofOfOwnership";
import ProofManagementCompany from "./components/ProofManagementCompany";
import RealtorVerification from "./components/RealtorVerification";


const propertyTypes = [
  {
    title: "Single House Property",
    description: "Single unit house for single family",
    icon: houseIcon,
  },
  {
    title: "Apartments complex",
    description: "Multiple unit house for families",
    icon: apartmentIcon,
  },
  {
    title: "Condominiums",
    description: "Multiple unit house for families",
    icon: condoIcon,
  },
];

const roles = [
  {
    title: "Landlord",
    description: "Owner of the property",
    icon: landlordIcon,
  },
  {
    title: "Realtor",
    description: "Manage property on behalf of owner",
    icon: realtorIcon,
  },
  {
    title: "Property management company",
    description: "For management company",
    icon: managerIcon,
  },
];

export default function PropertySelection({
  selectedProperty,
  setSelectedProperty,
  selectedRole,
  setSelectedRole,
}) {
  return (
    <section className="pt-[119px] px-[80px]">
      <div className="max-w-[1280px] space-y-[40px] mx-auto">
        {/* Section 1: Property Type */}
        <div className="space-y-[32px]">
          <h2 className="text-xl font-semibold custom-heading">
            Property type
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {propertyTypes.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedProperty(index)}
                className={`cursor-pointer rounded-lg border p-6 transition duration-200 ${
                  selectedProperty === index
                    ? "border-blue-600 bg-blue-50"
                    : "border-[#E0E0E0] hover:border-blue-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[28px] h-[28px]"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold custom-item-title">
                      {item.title}
                    </h3>
                    <p className="text-sm custom-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Select Role */}
        <div className="max-w-[1280px] space-y-[40px] mx-auto ">
          <h2 className="text-xl font-semibold custom-heading">
            Select your role
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {roles.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedRole(index)}
                className={`cursor-pointer rounded-lg border p-6 transition duration-200 ${
                  selectedRole === index
                    ? "border-blue-600 bg-blue-50"
                    : "border-[#E0E0E0] hover:border-blue-400"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[28px] h-[28px]"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold custom-item-title">
                      {item.title}
                    </h3>
                    <p className="text-sm custom-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof of Ownership for Landlord */}
        {selectedRole === 0 && (
          <div>
            <ProofOfOwnership />
          </div>
        )}

        {/* Realtor Verification for Realtor */}
        {selectedRole === 1 && (
          <div>
            <RealtorVerification />
          </div>
        )}

        {/* Proof for Property Management Company */}
        {selectedRole === 2 && (
          <div>
            <ProofManagementCompany />
          </div>
        )}
      </div>
    </section>
  );
}