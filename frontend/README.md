# Frontend Architecture: AI-powered QMS

This document outlines the foundation of our enterprise-grade React (Vite) frontend application.

## 1. Folder Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/         
│   │   ├── common/
│   │   ├── ui/
│   │   ├── dashboard/
│   │   ├── complaint/      # Complaint Form Module (Section 4)
│   │   └── ai/             # AI Copilot Module (Section 5)
│   │       ├── AssistantPanel/
│   │       ├── Copilot/    # AI Chat Interface
│   │       ├── Extraction/ # OCR & NER Data Cards
│   │       ├── Insights/   # Risk & Recommendations
│   │       ├── Timeline/   # Processing Steps
│   │       ├── Upload/
│   │       └── EmptyState/
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
We have implemented a classic enterprise SaaS layout shell (resembling platforms like Salesforce or Jira), utilizing `Sidebar`, `Navbar`, and a responsive `PageLayout`.

## 3. Complaint Form Architecture (Section 4)
The Customer Complaint Intake Form is built with decoupled Field Primitives (`src/components/complaint/fields/`) and Section Cards (`src/components/complaint/sections/`), orchestrated by a master `ComplaintForm.jsx`.

## 4. AI Copilot Interface (Section 5)
The `/copilot` route renders a specialized split-screen assistant for Quality Assurance teams. It features:
- **Left Column**: Document upload handling, real-time processing timelines, and AI extraction confidence scores.
- **Right Column**: An interactive chat interface, executive summaries, automated risk scoring, and CAPA (Corrective and Preventive Action) recommendations.

## 5. Global Styling & CSS Modules
We use strict CSS Modules for all components to prevent global namespace collisions. Design tokens (colors, spacing, typography) are governed by `src/assets/styles/variables.css`.

## 6. Installation & Initialization
```bash
npm install
npm run dev
```
