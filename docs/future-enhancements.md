# Future Enhancements Roadmap (v2.0)

This roadmap outlines the planned features for the next major version of the QMS.

## 1. Single Sign-On (SSO) Integration
Implement OAuth2 / OIDC to allow QA Managers to log in using their corporate Microsoft Entra ID or Okta credentials, completely bypassing the local `users` table passwords.

## 2. Multi-Modal AI (Image & Video)
Extend the Groq integration (or swap to a native multi-modal model like GPT-4o Vision) to allow the LangGraph pipeline to analyze photos of damaged pharmaceutical vials or packaging and automatically extract defect classifications.

## 3. Optical Character Recognition (OCR)
Integrate an OCR engine (e.g., AWS Textract or Tesseract) as a preliminary node in the LangGraph pipeline to handle scanned, handwritten doctor's notes before passing the text to the LLM.

## 4. Webhook Integrations
Build outgoing webhooks so that when an AI assesses a complaint as "High Regulatory Risk", it instantly triggers a Slack/Teams alert or opens a ticket in Jira/ServiceNow.
