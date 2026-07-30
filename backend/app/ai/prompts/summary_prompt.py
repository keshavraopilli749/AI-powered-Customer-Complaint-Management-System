from langchain_core.prompts import PromptTemplate

SUMMARY_PROMPT = PromptTemplate.from_template(
    """You are a Pharmaceutical QA Manager. 
Write a concise, professional executive summary of the following complaint data.

RAW TEXT:
{raw_text}

EXTRACTED DATA:
{extracted_data}

INSTRUCTIONS:
Provide a 2-3 sentence executive summary focusing on the core issue, the product involved, and the immediate impact. Do not include boilerplate text.
"""
)
