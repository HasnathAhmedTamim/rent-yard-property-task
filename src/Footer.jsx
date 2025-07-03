export default function Footer({ actionLabel, onAction, total, onBack, disableAction }) {
  return (
    <div
      className="flex justify-between items-center mx-auto border-t"
      style={{
        width: "1440px",
        height: "96px",
        padding: "24px 80px",
        background: "#fff",
        borderTop: "2px solid #E0E0E0",
      }}
    >
      <button
        className="text-sm"
        style={{
          fontWeight: 600,
          fontSize: "16px",
          textDecoration: "underline",
          color: "#2E2D74",
          background: "none",
          border: "none",
        }}
        onClick={onBack}
      >
        Back
      </button>
      <div className="flex items-center gap-6">
        {total !== undefined && (
          <span
            className="text-gray-500"
            style={{ fontSize: "16px", fontWeight: 400 }}
          >
            Total with card charge:{" "}
            <span className="font-semibold text-lg text-gray-900">${total}</span>
          </span>
        )}
        <button
          disabled={disableAction}
          className={`text-white font-semibold transition ${
            !disableAction
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-blue-600 opacity-50"
          }`}
          style={{
            width: "128px",
            height: "47px",
            borderRadius: "12px",
            backgroundColor: "#316EED",
            fontSize: "18px",
            opacity: !disableAction ? 1 : 0.32,
          }}
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
