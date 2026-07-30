from pydantic import BaseModel
from app.ai.graph.state import DocumentState
from app.ai.llm.groq_client import get_structured_llm
from app.ai.prompts.summary_prompt import SUMMARY_PROMPT
from app.core.config import settings

class SummaryOutput(BaseModel):
    summary: str

def summary_node(state: DocumentState) -> DocumentState:
    """
    Generates an executive summary based on the raw text and extracted data.
    """
    if state.get("status") == "failed" or not state.get("extracted_data"):
        return state
        
    if not settings.GROQ_API_KEY or settings.GROQ_API_KEY == "placeholder":
        state["summary"] = "Mock Executive Summary: The patient reported a minor issue with the product batch."
        return state
        
    llm = get_structured_llm(schema=SummaryOutput)
    prompt = SUMMARY_PROMPT.format(
        raw_text=state.get("cleaned_text"),
        extracted_data=state["extracted_data"].model_dump_json()
    )
    
    try:
        result = llm.invoke(prompt)
        state["summary"] = result.summary
    except Exception as e:
        state["validation_errors"].append(f"Summary generation failed: {str(e)}")
        
    return state
