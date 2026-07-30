from langchain_core.prompts import PromptTemplate

EXTRACTION_PROMPT = PromptTemplate.from_template(
    """You are an expert Pharmaceutical Quality Assurance (QA) data extraction AI.
Your job is to read the raw text of a customer complaint or adverse event report and extract structured data.

RAW TEXT:
{raw_text}

INSTRUCTIONS:
1. Carefully extract the pharmaceutical product details (Product Name, Batch/Lot, Expiry).
2. Extract customer/reporter details.
3. Identify the core complaint category and issue.
4. If a field is not found in the text, leave it as null/None. DO NOT hallucinate.
5. Provide a confidence score (0.0 to 1.0) on how accurately you believe you extracted the data.
6. List any critical missing fields (e.g., if Batch Number or Product Name is missing).

Return the data STRICTLY in the requested JSON format.
"""
)
