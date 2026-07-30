import logging
from app.ai.graph.state import DocumentState
from app.ai.llm.groq_client import get_structured_llm
from app.ai.schemas.extracted_data import ComplaintExtractedData
from app.ai.prompts.extraction_prompt import EXTRACTION_PROMPT
from app.core.config import settings

logger = logging.getLogger("qms_api")

def extraction_node(state: DocumentState) -> DocumentState:
    """
    Calls the LLM to extract structured data from the cleaned text.
    """
    if state.get("status") == "failed":
        return state
        
    cleaned_text = state.get("cleaned_text", "")
    
    # If no real API key, return mock data to prevent crashes
    if not settings.GROQ_API_KEY or settings.GROQ_API_KEY == "placeholder":
        logger.warning("Using mock extraction data since Groq API is not configured.")
        state["extracted_data"] = ComplaintExtractedData(
            product_name="Mock Product API-01",
            batch_number="B-12345",
            description=cleaned_text,
            confidence_score=0.99
        )
        return state
        
    llm = get_structured_llm(schema=ComplaintExtractedData, model_name="gemma2-9b-it")
    prompt = EXTRACTION_PROMPT.format(raw_text=cleaned_text)
    
    try:
        result: ComplaintExtractedData = llm.invoke(prompt)
        state["extracted_data"] = result
    except Exception as e:
        logger.error(f"Extraction failed: {str(e)}")
        state["error_message"] = f"LLM Extraction failed: {str(e)}"
        state["status"] = "failed"
        
    return state
