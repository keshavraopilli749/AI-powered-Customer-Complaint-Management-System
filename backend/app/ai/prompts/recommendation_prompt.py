from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel, Field

class CAPARecommendationOutput(BaseModel):
    root_cause_suggestion: str = Field(..., description="A likely technical root cause for the issue.")
    capa_suggestion: str = Field(..., description="Recommended Corrective and Preventive Actions.")

RECOMMENDATION_PROMPT = PromptTemplate.from_template(
    """You are a Pharmaceutical CAPA (Corrective and Preventive Action) Specialist.
Based on the complaint details and risk profile, suggest a potential root cause and a CAPA plan.

COMPLAINT ISSUE:
{observed_issue}

PRODUCT:
{product_name}

INSTRUCTIONS:
Provide a concise, professional suggestion for root cause investigation and immediate CAPA steps.
Return the output strictly in the requested JSON format.
"""
)
