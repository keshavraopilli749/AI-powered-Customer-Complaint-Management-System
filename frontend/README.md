# Frontend Architecture: AI-powered QMS

This document outlines the foundation of our enterprise-grade React (Vite) frontend application.

## 1. Folder Structure

```
frontend/
├── public/                 # Static assets that don't need module processing
├── src/
│   ├── assets/             # Icons, images, and global CSS styles
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Structural components (Sidebar, Navbar, GlobalLayout)
│   │   ├── common/         # Domain-agnostic components (e.g., specific wrappers)
│   │   ├── ui/             # Reusable UI kit (Buttons, Inputs, Modals)
│   │   ├── dashboard/      # Dashboard-specific widgets
│   │   ├── complaint/      # Complaint-specific components
│   │   └── ai/             # AI Copilot components
│   ├── constants/          # Application-wide magic strings and enums
│   ├── hooks/              # Custom React hooks (useDebounce, useModal)
│   ├── pages/              # Route-level container components (Dashboard, Complaint, Settings)
│   ├── redux/              # Global state management (store, slices)
│   ├── routes/             # React Router configuration
│   ├── services/           # Axios API instances and interceptors
│   ├── utils/              # Pure functions, formatters, and validators
│   ├── App.jsx             # Main application wrapper (Providers)
│   └── main.jsx            # React mounting point
├── .env                    # Environment variables
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc             # Prettier configuration
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite configuration
```

## 2. File Structure & Purpose

- **`vite.config.js`**: Configures the dev server, aliases (using `@` for `src/`), and build pipeline.
- **`src/assets/styles/variables.css`**: The core design token system (colors, typography, spacing).
- **`src/routes/AppRoutes.jsx`**: Centralized routing using `react-router-dom` with lazy loading for code splitting.
- **`src/redux/store.js`**: Combines all RTK slices into a single global store.
- **`src/services/api.js`**: The base Axios client pre-configured with headers and base URLs.

## 3. Dependencies

*   **React 19 & Vite**: Fast, modern UI development.
*   **React Router DOM**: Client-side routing.
*   **Redux Toolkit (RTK) & React-Redux**: Standardized, predictable global state management.
*   **Axios**: Promise-based HTTP client for API requests.
*   **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
*   **ESLint & Prettier**: Code quality and automatic formatting.

## 4. Installation & Initialization

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 5. Best Practices & Naming Conventions

*   **Components**: PascalCase (e.g., `ComplaintForm.jsx`).
*   **Hooks**: camelCase starting with `use` (e.g., `useDebounce.js`).
*   **Utilities**: camelCase (e.g., `validation.js`).
*   **Imports**: Use the `@/` alias for absolute imports from the `src/` directory to prevent `../../` hell.
*   **CSS**: Use CSS Modules (`Component.module.css`) to scope styles locally and prevent global namespace clashes.

## 6. Future Scalability Recommendations

*   **Data Fetching**: As the application grows, consider migrating standard API calls to **RTK Query** or **React Query** for built-in caching, polling, and invalidation.
*   **Testing**: Implement Jest and React Testing Library. Add a `__tests__` folder inside each feature directory.
*   **Storybook**: For the `components/ui/` kit, introduce Storybook to independently develop and document UI components.
