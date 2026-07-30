# Known Limitations

This section transparently documents current limitations of the system (v1.0.0).

1. **OCR Support**: The AI pipeline currently assumes text-extractable PDFs. It does not perform Optical Character Recognition (OCR) on handwritten scanned images (e.g., Tesseract integration is required).
2. **Email Integration**: The system requires a user to manually upload an email or document. It does not yet automatically poll an IMAP server (e.g., `complaints@pharma.com`).
3. **Synchronous AI Processing**: If the Groq API experiences high latency, the HTTP request will remain open, potentially leading to timeouts on large documents.
4. **Limited Test Coverage**: While the testing architecture (Pytest/Vitest) is in place for the critical paths, exhaustive unit testing across all Edge Cases (e.g., malformed PDFs) is incomplete.
