from app.ai.graph.state import DocumentState
from app.ai.llm.groq_client import get_structured_llm
from app.ai.prompts.risk_prompt import RISK_PROMPT, RiskAssessmentOutput
from app.core.config import settings

def risk_node(state: DocumentState) -> DocumentState:
    """
    Assesses patient, business, and regulatory risk.
    """
    if state.get("status") == "failed" or not state.get("extracted_data"):
        return state
        
    if not settings.GROQ_API_KEY or settings.GROQ_API_KEY == "placeholder":
        state["patient_risk"] = "Low"
        state["business_risk"] = "Low"
        state["regulatory_risk"] = "Low"
        state["overall_risk"] = "Low"
        return state
        
    data = state["extracted_data"]
    llm = get_structured_llm(schema=RiskAssessmentOutput)
    
    prompt = RISK_PROMPT.format(
        description=data.description or "No description",
        observed_issue=data.observed_issue or "Unknown"
    )
    
    try:
        result: RiskAssessmentOutput = llm.invoke(prompt)
        state["patient_risk"] = result.patient_risk
        state["business_risk"] = result.business_risk
        state["regulatory_risk"] = result.regulatory_risk
        state["overall_risk"] = result.overall_risk
    except Exception as e:
        state["validation_errors"].append(f"Risk assessment failed: {str(e)}")
        
    return state
