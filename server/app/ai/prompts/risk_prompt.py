from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel, Field

class RiskAssessmentOutput(BaseModel):
    patient_risk: str = Field(..., description="High, Medium, or Low")
    business_risk: str = Field(..., description="High, Medium, or Low")
    regulatory_risk: str = Field(..., description="High, Medium, or Low")
    overall_risk: str = Field(..., description="High, Medium, or Low")

RISK_PROMPT = PromptTemplate.from_template(
    """You are a Pharmaceutical Risk Assessor. 
Evaluate the risks associated with this complaint based on FDA and ICH guidelines.

COMPLAINT DESCRIPTION:
{description}

OBSERVED ISSUE:
{observed_issue}

INSTRUCTIONS:
Classify the Patient Risk, Business Risk, and Regulatory Risk as High, Medium, or Low.
Calculate the Overall Risk based on the highest individual risk.
Return the output strictly in the requested JSON format.
"""
)
