import { Link } from "react-router-dom";
import logo from "./assets/RentYardLogo.png";

export default function Navbar({ rightButtonLabel = "Exit" }) {
  return (
    <div
      className="w-full border-b bg-white shadow-sm"
      style={{
        borderBottomWidth: "1px",
        borderColor: "#E0E0E0",
        minHeight: "79px",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          width: "1440px",
          height: "79px",
          padding: "16px 80px",
        }}
      >
        {/* Logo Image */}
        <div
          style={{
            width: "147px",
            height: "39px",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="RentYard Logo"
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        <button
          className="text-sm font-medium border border-gray-300 rounded-[12px] bg-white hover:bg-gray-100 transition"
          style={{
            width: "110px",
            height: "47px",
            padding: "0 24px",
            fontSize: "16px",
            color: "#2E2D74",
            boxShadow: "0 1px 2px rgba(16,30,54,0.04)",
          }}
        >
          {rightButtonLabel}
        </button>
      </div>
    </div>
  );
}