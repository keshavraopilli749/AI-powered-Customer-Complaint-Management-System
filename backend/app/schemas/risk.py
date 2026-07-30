from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime

class RiskBase(BaseModel):
    patient_risk: Optional[str] = None
    business_risk: Optional[str] = None
    regulatory_risk: Optional[str] = None
    overall_risk: Optional[str] = None
    risk_score: Optional[int] = None
    ai_confidence: Optional[float] = None

class RiskCreate(RiskBase):
    complaint_id: UUID

class RiskUpdate(RiskBase):
    pass

class RiskResponse(RiskBase):
    id: UUID
    complaint_id: UUID
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}
