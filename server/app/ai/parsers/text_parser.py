def extract_text_from_file(file_content: bytes, content_type: str) -> str:
    """
    Mock function to parse text from various file formats.
    In a real implementation, you would use libraries like PyPDF2, pdfplumber, or pytesseract.
    """
    if "pdf" in content_type:
        # Mock PDF extraction
        return "Parsed PDF content placeholder: " + file_content.decode("utf-8", errors="ignore")
    elif "image" in content_type:
        # Mock OCR extraction
        return "Parsed Image OCR placeholder"
    else:
        # Assume plain text
        return file_content.decode("utf-8", errors="ignore")
