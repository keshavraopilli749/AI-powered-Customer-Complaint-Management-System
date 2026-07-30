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
│   │   │   ├── Sidebar/    # Collapsible left navigation
│   │   │   ├── Navbar/     # Top navigation with search & profile
│   │   │   ├── PageLayout/ # Main wrapper (Layout, PageHeader, Content)
│   │   │   ├── Breadcrumb/
│   │   │   └── Footer/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── dashboard/
│   │   ├── complaint/
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
- **Sidebar (`Sidebar.jsx`)**: A responsive, collapsible left navigation menu using `lucide-react` icons. On mobile, this converts into a fixed overlay drawer.
- **Navbar (`Navbar.jsx`)**: A fixed top bar housing global search, notifications, theme toggle, and the user profile dropdown.
- **PageLayout (`Layout.jsx`)**: The master wrapper that coordinates the Sidebar and Navbar, dynamically adjusting the `Content` area based on the Sidebar's collapsed state.
- **PageHeader (`PageHeader.jsx`)**: A highly reusable component placed at the top of every page route to display the breadcrumb, title, subtitle, and primary actions (e.g., "Save Draft").

## 3. Global Styling & CSS Modules
We use strict CSS Modules for all components to prevent global namespace collisions. Design tokens (colors, spacing, typography) are governed by `src/assets/styles/variables.css`.

## 4. Installation & Initialization
```bash
npm install
npm run dev
```
