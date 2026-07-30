# 9. USER JOURNEY

This section maps the end-to-end journey of the primary user persona: the **QA Executive (Investigator)**, as they interact with the AI-powered system to resolve a critical product complaint.

## 1. Login & Dashboard (The Starting Point)
*   **Action:** The QA Executive navigates to the QMS web portal and logs in securely.
*   **Experience:** The user lands on a clean, professional dashboard. The AI has prioritized their "My Tasks" list. At the top is a bright red alert: **"1 New Critical Complaint - Batch #88-X29"**.
*   **AI Value:** Instead of sorting through a chronological inbox, the AI has already triaged incoming complaints overnight and pushed the highest-risk item to the top of the queue.

## 2. Reviewing the Automated Intake
*   **Action:** The user clicks on the critical complaint to open the record.
*   **Experience:** The Complaint Form is already 80% filled out. A customer sent a lengthy email complaining about a broken seal, attaching a blurry photo of the bottle.
*   **AI Value:** 
    *   The **AI Data Extraction** module parsed the email, populating the `Customer Name`, `Product`, and `Lot Number` fields automatically.
    *   The **AI Summarization** module reduced the 3-paragraph email into: *"Customer reports broken safety seal on Product X, Lot 88-X29. Potential tampering or manufacturing defect."*
    *   The **AI OCR** scanned the blurry photo, verifying the Lot Number printed on the bottle matches the text extraction.

## 3. Triage & Risk Assessment
*   **Action:** The user reviews the AI's initial risk assessment.
*   **Experience:** The system has pre-selected **"Critical Risk"**. An AI justification box explains: *"Broken seals pose a contamination/tampering risk, violating GMP sterile packaging guidelines."*
*   **Action:** The user agrees, clicks "Accept AI Assessment," and moves the status from `Draft` to `Investigation Initiated`.

## 4. The AI-Assisted Investigation
*   **Action:** The user begins the root cause analysis. They need to know if this Lot Number had any issues on the manufacturing line.
*   **Experience:** The user opens the **AI Copilot Chat** in the sidebar.
    *   *User:* "Did we have any packaging machine deviations for Lot #88-X29?"
    *   *AI Copilot:* "Yes. On [Date], Line 4 reported a temperature drop on the induction sealer for 15 minutes during the packaging of Lot #88-X29. A deviation (DEV-449) was logged but deemed acceptable at the time."
*   **AI Value:** The user just saved 2 hours of digging through external manufacturing databases and PDF batch records. The semantic search found the exact deviation instantly.

## 5. Formulating the Root Cause & CAPA
*   **Action:** The user moves to the Investigation tab to draft the report.
*   **Experience:** Based on the Copilot's findings, the user selects "Machine Calibration Failure" as the root cause.
*   **AI Value:** The **CAPA Recommendation** engine pops up: *"Historically, induction sealer temperature drops are fixed by replacing the thermal sensor. Would you like to draft a CAPA requesting Maintenance to replace the sensor on Line 4?"* The user clicks "Yes," and the CAPA draft is auto-generated.

## 6. Review, Sign, and Save (21 CFR Part 11)
*   **Action:** The user is finished and submits the investigation for QA Manager approval.
*   **Experience:** A modal appears demanding an Electronic Signature. The user must re-enter their password and select the meaning of the signature ("Authoring Investigation"). 
*   **Value:** This ensures strict compliance with FDA regulations. The system records the exact timestamp and writes an immutable entry to the Audit Log.

## 7. Generate Report
*   **Action:** The QA Manager approves the investigation, the CAPA is executed, and the complaint is closed.
*   **Experience:** The user clicks "Generate Customer Response Letter." The AI drafts a professional, compliant letter explaining that the issue was identified and resolved, which the user can quickly review and email directly from the platform.
