export default function Footer({ actionLabel, onAction, total, onBack, disableAction }) {
  return (
    <div className="ry-footer" style={{ borderTop: "none" }}>
      <button className="ry-footer-back" onClick={onBack}>
        Back
      </button>
      <div className="flex items-center gap-6">
        {total !== undefined && (
          <span className="ry-footer-total">
            Total with card charge:{" "}
            <span className="ry-footer-total-amount">${total}</span>
          </span>
        )}
        <button
          disabled={disableAction}
          className="ry-footer-action"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
