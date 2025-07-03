import { useState } from "react";
import AddCardModal from "./AddCardModal";

const plans = [
	{
		name: "Regular",
		price: 99.99,
		unitRange: "1-50 unit",
		autoPay: true,
	},
	{
		name: "Platinum",
		price: 129.99,
		unitRange: "1-50 unit",
		autoPay: false,
	},
	{
		name: "Enterprize",
		price: 199.99,
		unitRange: "1-50 unit",
		autoPay: false,
	},
];

const initialCards = [
	{ id: 1, name: "Alex jones(Amex card)", last4: "8565" },
	{ id: 2, name: "Alex jones(Amex card)", last4: "8565" },
	{ id: 3, name: "Alex jones(Amex card)", last4: "8565" },
];

export default function PlanPaymentPage({ showAddCardModal, setShowAddCardModal }) {
	const [selectedPlan, setSelectedPlan] = useState(plans[0]);
	const [cards, setCards] = useState(initialCards);
	const [selectedCard, setSelectedCard] = useState(initialCards[0]);

	// Add new card handler
	const handleAddCard = (card) => {
		const newCard = {
			id: cards.length + 1,
			name: card.name + " (Amex card)",
			last4: card.number.slice(-4),
		};
		setCards([...cards, newCard]);
		setSelectedCard(newCard);
		setShowAddCardModal(false);
	};

	return (
    <div className="plan-payment-container">
      <div
        className="w-full"
        style={{
          maxWidth: "1440px",
          // Remove or reduce top padding for better vertical centering
          padding: "0px 80px",
        }}
      >
        {/* Plan selection */}
        <div
          className="rounded-xl"
          style={{
            background: "#FFFFFF",
          }}
        >
          <div className="choose-plan-container">
            <div className="plan-selection-header mb-6">
              Chose a plan for after 30-days free trial
            </div>
            <div className="flex gap-2 mb-8">
              <button
                className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-200"
                style={{ fontSize: "16px" }}
              >
                Monthly
              </button>
              <button
                className="px-4 py-1 rounded-full text-gray-500 border border-gray-200"
                style={{ fontSize: "16px" }}
              >
                Annually (save 57%)
              </button>
            </div>
            <div className="flex gap-6 mb-10">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex-1 border rounded-xl p-7 cursor-pointer transition-all duration-150 ${
                    selectedPlan.name === plan.name
                      ? "border-blue-500 shadow-[0_2px_16px_0px_rgba(49,110,237,0.08)] bg-blue-50/10"
                      : "border-[#E0E0E0] bg-white"
                  }`}
                  style={{
                    minWidth: "260px",
                    position: "relative",
                    borderWidth: selectedPlan.name === plan.name ? 2 : 1,
                  }}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-semibold text-lg"
                      style={{
                        background:
                          selectedPlan.name === plan.name
                            ? "#F6FAFF"
                            : "transparent",
                        borderRadius: "6px",
                        padding: "2px 10px",
                      }}
                    >
                      {plan.name}
                    </span>
                    {plan.autoPay && selectedPlan.name === plan.name && (
                      <span className="flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded font-medium border border-blue-200">
                        <svg width="16" height="16" fill="none">
                          <rect width="16" height="16" rx="8" fill="#316EED" />
                          <path
                            d="M5.5 8.5l2 2 3-3"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Auto Pay
                      </span>
                    )}
                  </div>
                  <div className="mb-1">
                    <span className="plan-card-price-main">
                      ${plan.price.toFixed(2)}
                    </span>
                    <span className="plan-card-price-unit">/mo</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Price for {plan.unitRange}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment options */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium" style={{ fontSize: "18px" }}>
                Payment option
              </div>
              <button
                className="text-blue-600 text-sm font-medium hover:underline"
                style={{ fontSize: "16px" }}
                onClick={() => setShowAddCardModal(true)}
              >
                Add new card
              </button>
            </div>
            <div className="payment-option-container rounded-lg">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between border-b last:border-b-0 py-4 px-6"
                  style={{
                    borderColor: "#E0E0E0",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="none">
                        <rect
                          width="18"
                          height="12"
                          y="3"
                          rx="2"
                          fill="#E5E7EB"
                        />
                        <rect
                          x="2"
                          y="5"
                          width="14"
                          height="8"
                          rx="1"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                    <span className="payment-card-name">{card.name}</span>
                    <span className="payment-card-last4">
                      ********{card.last4}
                    </span>
                  </div>
                  <button
                    className={`px-6 py-2 rounded-lg border font-medium text-base transition ${
                      selectedCard.id === card.id
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-blue-200 text-blue-600 hover:bg-blue-50"
                    }`}
                    style={{
                      minWidth: "90px",
                      fontWeight: 600,
                    }}
                    onClick={() => setSelectedCard(card)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <AddCardModal
        open={showAddCardModal}
        onClose={() => setShowAddCardModal(false)}
        onSave={handleAddCard}
      />
    </div>
  );
}