# 6. USER ROLES

An enterprise QMS relies on strict Role-Based Access Control (RBAC).

| Role | Responsibilities | Data Access Level |
| :--- | :--- | :--- |
| **Customer / Patient** | Submits complaints via a public-facing portal or email. Provides samples or evidence. | **Minimal**: Can only view the status of their own submitted complaints (e.g., "Received", "Investigating", "Closed"). |
| **Customer Care Rep** | Acts as the frontline. Receives complaints, performs initial data entry, communicates with customers, and requests sample returns. | **Low**: Can create and edit draft complaints. Cannot approve investigations or see deep manufacturing data. |
| **QA Executive (Investigator)** | Evaluates complaints, performs risk assessments, leads Root Cause Analysis, reviews batch records, and drafts investigation reports. | **Medium**: Can view all complaints, edit investigation fields, and propose CAPAs. |
| **QA Manager** | Approves risk classifications, reviews investigation reports, approves Root Causes, and oversees CAPA execution. | **High**: Can approve/reject investigations using 21 CFR Part 11 compliant e-signatures. |
| **Production/Engineering Manager** | Collaborates on investigations related to manufacturing equipment or processes. Executes CAPA tasks (e.g., fixing a machine). | **Medium**: Can view assigned CAPA tasks and related investigation data. |
| **Regulatory Team** | Monitors for Adverse Events (AE) and Field Alerts. Generates regulatory reports for health authorities (e.g., FDA, EMA). | **High**: Read-only access to all records, but can export data for external reporting. |
| **System Admin** | Manages user accounts, configures workflows, manages dropdown lists (e.g., adding a new Product to the system), and handles system integrations. | **Admin**: Cannot approve quality records, but has full control over system configuration. |

---

# 7. FUNCTIONAL REQUIREMENTS (Software Requirements Specification)

The following features must be built into the software:

*   **Authentication & Authorization:** Secure login with SSO (Single Sign-On) and Role-Based Access Control.
*   **Complaint Dashboard:** A customized landing page for QA users showing KPIs, open complaints, overdue investigations, and assigned tasks.
*   **Complaint Intake Form:** A digital form to capture all mandatory customer and product data.
*   **Omnichannel Upload:** Ability to ingest complaints via direct form entry, PDF uploads, or forwarded emails.
*   **AI Data Extraction:** NLP module that automatically extracts fields (Lot Number, Product, Date) from unstructured uploads.
*   **AI Complaint Summary:** Auto-generates a brief synopsis of long-winded complaint narratives.
*   **AI Chat (Copilot):** An embedded assistant to query complaint histories using natural language.
*   **Risk Assessment Matrix:** A built-in grid (Severity vs. Probability) to calculate a Risk Score (Low, Medium, High, Critical).
*   **Status Workflow Engine:** System to move complaints through defined states (Draft -> In Review -> Investigating -> Pending Approval -> Closed).
*   **Duplicate Detection:** AI-driven alert if a similar complaint exists for the same Lot Number.
*   **Search & Filter:** Advanced querying by Lot Number, Date Range, Product, Status, or Risk Level.
*   **Audit Trails (21 CFR Part 11):** An un-editable, computer-generated, time-stamped log of every action taken in the system (Who, What, When, Why).
*   **Electronic Signatures:** Prompts requiring users to re-enter their password (and an optional justification code) before approving a stage.
*   **Reporting & Analytics:** Exportable reports for Annual Product Quality Reviews (APQR) and management meetings.
*   **Notifications:** Email and in-app alerts for assigned tasks or overdue investigations.

---

# 8. NON-FUNCTIONAL REQUIREMENTS

Enterprise expectations for a pharmaceutical QMS.

*   **Security & Compliance:** 
    *   Must comply fully with **FDA 21 CFR Part 11** and EU Annex 11.
    *   Data must be encrypted at rest (AES-256) and in transit (TLS 1.3).
*   **Performance:** 
    *   The UI must render within 2 seconds.
    *   AI extraction tasks must process within 5 seconds to prevent user workflow blocking.
*   **Scalability:** The database must handle millions of records (structured and unstructured text) and support concurrent access by hundreds of global employees without performance degradation.
*   **Availability:** 99.9% uptime SLA. Manufacturing never sleeps; the QMS must be available 24/7/365.
*   **Reliability & Data Integrity:** Absolute guarantee of no data loss. Automated daily backups and multi-region database replication.
*   **Accessibility:** WCAG 2.1 AA compliance to ensure usability for all employees.

---

# 10. BUSINESS RULES

*   **Mandatory Fields:** A complaint cannot be moved from 'Draft' to 'Under Review' without a Product Name, Defect Description, and Reporter Contact Info.
*   **Unique IDs:** The system must auto-generate sequential, non-editable Complaint IDs (e.g., `CMP-2026-0001`).
*   **Duplicate Prevention:** If a user attempts to log a complaint with the exact same Reporter Email and Lot Number within 48 hours, the system blocks creation and suggests updating the existing record.
*   **Justification for No Investigation:** If a QA Executive decides *not* to investigate a complaint, a mandatory text field requires a detailed justification (per FDA regulations).
*   **Status Transitions:** Only a user with the `QA Manager` role can transition a complaint from 'Pending Approval' to 'Closed'.
*   **Data Immutability:** Once a record is officially closed, it is locked. Any changes require a formal "Re-open" procedure which is heavily audited.

---

# 11. COMPLAINT FORM DESIGN

The core data structure of a complaint record.

### 1. Customer / Reporter Details
*   **Reporter Name** (String) - Required.
*   **Reporter Type** (Dropdown: Patient, Physician, Pharmacist, Distributor) - Required.
*   **Contact Info** (Email/Phone) - Required.
*   **Country of Origin** (Dropdown) - Required (crucial for regulatory reporting).

### 2. Product Details
*   **Product Name** (Dropdown/Searchable List) - Required.
*   **Lot / Batch Number** (String) - Required (Most important field for traceability).
*   **Expiry Date** (Date) - Optional (Often extracted by AI).
*   **Dosage Strength** (String) - Required.

### 3. Complaint Details
*   **Date Received** (Date/Time) - Auto-generated.
*   **Complaint Category** (Dropdown: Packaging, Efficacy, Contamination, Adverse Event) - AI Suggested.
*   **Complaint Description** (Long Text) - Required.
*   **AI Summary** (Long Text) - Auto-generated, read-only.
*   **Sample Available for Return?** (Boolean/Checkbox) - Required.

### 4. Risk Assessment
*   **Severity** (Dropdown: Minor, Major, Critical) - AI Suggested.
*   **Probability** (Dropdown: Rare, Occasional, Frequent) - AI Suggested.
*   **Risk Score** (Calculated Integer) - Auto-calculated based on matrix.

### 5. Investigation Details (Hidden until triage)
*   **Investigation Required?** (Boolean) - Required.
*   **Investigation Summary** (Long Text) - Required if Yes.
*   **Root Cause Category** (Dropdown: Machine Failure, Human Error, Material Defect) - AI Suggested.
*   **CAPA Required?** (Boolean) - Required.

### 6. Audit Information (System Generated, Read-Only)
*   **Created By** (User ID)
*   **Creation Timestamp** (DateTime)
*   **Last Modified By** (User ID)
*   **Current Status** (String: e.g., 'Investigation Approved')
