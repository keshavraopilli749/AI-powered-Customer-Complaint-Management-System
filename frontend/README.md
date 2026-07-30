# Frontend Architecture: AI-powered QMS

This document outlines the foundation of our enterprise-grade React (Vite) frontend application.

## 1. Folder Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/         # Enterprise Layout Architecture
│   │   ├── common/
│   │   ├── ui/
│   │   ├── dashboard/
│   │   ├── complaint/      # Complaint Form Module (Section 4)
│   │   │   ├── ComplaintForm/
│   │   │   ├── sections/   # Form cards (Customer, Product, etc.)
│   │   │   ├── fields/     # Reusable inputs (TextInput, SelectInput, etc.)
│   │   │   ├── constants/  # Dropdown options
│   │   │   └── validation/ # Schema placeholders
│   │   └── ai/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .prettierrc
├── package.json
└── vite.config.js
```

## 2. Layout Architecture (Section 3)

We have implemented a classic enterprise SaaS layout shell (resembling platforms like Salesforce or Jira):
- **Sidebar (`Sidebar.jsx`)**: A responsive, collapsible left navigation menu using `lucide-react` icons. On mobile, this transforms into a fixed overlay drawer.
- **Navbar (`Navbar.jsx`)**: A fixed top bar housing global search, notifications, theme toggle, and the user profile dropdown.
- **PageLayout (`Layout.jsx`)**: The master wrapper that coordinates the Sidebar and Navbar, dynamically adjusting the `Content` area.
- **PageHeader (`PageHeader.jsx`)**: A highly reusable component placed at the top of every page route to display the breadcrumb, title, subtitle, and primary actions.

## 3. Complaint Form Architecture (Section 4)

The core feature of the QMS is the Customer Complaint Intake Form. To ensure scalability and maintainability, the form is decoupled into distinct architectural layers:

1.  **Field Primitives (`src/components/complaint/fields/`)**: Reusable inputs (`TextInput`, `SelectInput`, `TextArea`, `DateInput`, `FileUpload`) that standardize styling, focus states, and validation error rendering.
2.  **Section Cards (`src/components/complaint/sections/`)**: The form is broken down into logical pharmaceutical groupings (e.g., `ProductInformation`, `RiskAssessment`). Each section renders as an elevated card containing a grid of Field Primitives.
3.  **Master Form (`ComplaintForm.jsx`)**: Orchestrates the section cards and houses the global form actions (Save Draft, Submit).

This approach prevents massive, monolithic form files and makes it trivial to swap out field primitives for robust validation libraries (like `react-hook-form` + `zod`) in the future.

## 4. Global Styling & CSS Modules
We use strict CSS Modules for all components to prevent global namespace collisions. Design tokens (colors, spacing, typography) are governed by `src/assets/styles/variables.css`.

## 5. Installation & Initialization
```bash
npm install
npm run dev
```
