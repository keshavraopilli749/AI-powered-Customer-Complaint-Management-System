from app.ai.graph.state import DocumentState
from app.ai.llm.groq_client import get_structured_llm
from app.ai.prompts.recommendation_prompt import RECOMMENDATION_PROMPT, CAPARecommendationOutput
from app.core.config import settings

def recommendation_node(state: DocumentState) -> DocumentState:
    """
    Generates root cause and CAPA recommendations.
    """
    if state.get("status") == "failed" or not state.get("extracted_data"):
        return state
        
    if not settings.GROQ_API_KEY or settings.GROQ_API_KEY == "placeholder":
        state["root_cause_suggestion"] = "Mock Root Cause: Potential manufacturing anomaly."
        state["capa_suggestion"] = "Mock CAPA: Review batch records and perform line clearance."
        return state
        
    data = state["extracted_data"]
    llm = get_structured_llm(schema=CAPARecommendationOutput)
    
    prompt = RECOMMENDATION_PROMPT.format(
        observed_issue=data.observed_issue or "Unknown",
        product_name=data.product_name or "Unknown"
    )
    
    try:
        result: CAPARecommendationOutput = llm.invoke(prompt)
        state["root_cause_suggestion"] = result.root_cause_suggestion
        state["capa_suggestion"] = result.capa_suggestion
    except Exception as e:
        state["validation_errors"].append(f"Recommendation generation failed: {str(e)}")
        
    return state
