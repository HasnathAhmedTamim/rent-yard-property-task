# RentYard UI

This project is a modern, responsive React-based user interface for the RentYard property management platform. It is designed to guide property owners, realtors, and property managers through a multi-step onboarding and property listing process.

## Features

- **Multi-step Onboarding:**  
  Users select their property type and role, then complete tailored verification and property information steps.

- **Role-based Forms:**  
  - **Landlord:** Proof of ownership upload and agreement.
  - **Realtor:** License and agreement upload.
  - **Property Management Company:** Company info, agreement, and contact details.

- **Dynamic Modals:**  
  All property details (address, leasing info, charges, amenities, etc.) are managed via modals for a clean, focused experience.

- **Plan & Payment Selection:**  
  After property info, users choose a subscription plan and payment method, with a summary and card management modal.

- **Reusable Components:**  
  Includes modals for uploading documents, adding amenities, fees, agreements, and more.

- **Responsive Layout:**  
  Uses Tailwind CSS and custom styles for a professional, accessible look.

- **Navigation & State Management:**  
  Uses React Router for navigation and React state for step and form management.

## Project Structure

- `AppLayout.jsx` — Main layout, handles navigation, state, and conditional rendering of Navbar, Footer, and page content.
- `Navbar.jsx` — Top navigation bar with dynamic "Save & Exit" or "Exit" button.
- `Footer.jsx` — Bottom action bar with context-aware button and total summary.
- `PropertySelection.jsx` — First step: property type and role selection.
- `CondoInfoForm.jsx` — Main property info step, with dynamic fields and modals.
- `PlanPaymentPage.jsx` — Subscription plan and payment selection.
- `components/` — All modal and form components for each step and field.

## How it Works

1. **Landing Page:**  
   User selects property type and role. "Get started" is enabled only after both are selected.

2. **Verification Step:**  
   Depending on role, user uploads required documents and agrees to terms.

3. **Property Info Step:**  
   User fills out property details via a grid of addable/editable fields, each opening a modal.

4. **Plan & Payment:**  
   User selects a subscription plan, adds/selects a payment card, and reviews the total before confirming.

5. **Modals:**  
   All add/edit actions are handled in modals for a focused, step-by-step experience.

## Customization

- **Add/Remove Fields:**  
  Edit the `fields` array in `CondoInfoForm.jsx` to change which property details are collected.
- **Plans & Pricing:**  
  Update the `plans` array in `PlanPaymentPage.jsx` to change available subscription options.
- **Styling:**  
  Uses Tailwind CSS and custom classes in `index.css` for easy theming.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm start
   ```

3. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Notes

- This UI is designed for integration with a backend API for saving property, user, and payment data.
- All form state is managed locally for demo purposes; connect to your backend as needed.
- The UI is fully responsive and accessible.

---


