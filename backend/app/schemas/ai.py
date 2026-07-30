from pydantic import BaseModel
from typing import Optional, Dict, Any
from uuid import UUID
from datetime import datetime

class AIBase(BaseModel):
    summary: Optional[str] = None
    extracted_fields: Optional[Dict[str, Any]] = None
    confidence_score: Optional[float] = None
    risk_classification: Optional[str] = None
    root_cause_suggestion: Optional[str] = None
    capa_suggestion: Optional[str] = None
    prompt_version: Optional[str] = None
    model_used: Optional[str] = None
    processing_time_ms: Optional[int] = None

class AICreate(AIBase):
    complaint_id: UUID

class AIResponseSchema(AIBase):
    id: UUID
    complaint_id: UUID
    created_at: datetime

    model_config = {"from_attributes": True}
