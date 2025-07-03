import { useState } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PropertySelection from "./PropertySelection";
import Footer from "./Footer";
import CondoInfoForm from "./components/CondoInfoForm";
import PlanPaymentPage from "./components/PlanPaymentPage";

export default function AppLayout() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isCondoInfo = location.pathname === "/condo-info";
  const isPlanPayment = location.pathname === "/plan-payment";
  const isLanding = location.pathname === "/"; // or your landing route

  // Show "Save & Exit" on every page except landing (Get started)
  const rightButtonLabel = isLanding ? "Exit" : "Save & Exit";

  const handleBack = () => {
    // Your back logic
  };

  const handleGetStarted = () => {
    if (location.pathname === "/condo-info") {
      navigate("/plan-payment");
    } else if (selectedProperty === 2 && selectedRole === 0) {
      navigate("/condo-info");
    } else {
      // Your other logic here
    }
  };

  // Handler for the footer action button
  const handlePayAndAddProperty = () => setShowAddCardModal(true);

  const disableGetStarted =
    isLanding &&
    (selectedProperty === undefined ||
      selectedProperty === null ||
      selectedRole === undefined ||
      selectedRole === null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar rightButtonLabel={rightButtonLabel} />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <PropertySelection
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            }
          />
          <Route path="/condo-info" element={<CondoInfoForm />} />
          <Route
            path="/plan-payment"
            element={
              <PlanPaymentPage
                showAddCardModal={showAddCardModal}
                setShowAddCardModal={setShowAddCardModal}
              />
            }
          />
        </Routes>
      </div>
      <Footer
        actionLabel={
          isPlanPayment
            ? "Pay & add property"
            : isCondoInfo
            ? "Next"
            : "Get started"
        }
        total={isPlanPayment ? 970 : undefined} // Only pass total on plan-payment page
        onAction={isPlanPayment ? handlePayAndAddProperty : handleGetStarted}
        disableAction={disableGetStarted}
        onBack={handleBack}
      />
    </div>
  );
}