from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import date, datetime

class InvestigationBase(BaseModel):
    department: Optional[str] = None
    status: str = "Pending"
    findings: Optional[str] = None
    corrective_action: Optional[str] = None
    preventive_action: Optional[str] = None
    completion_date: Optional[date] = None

class InvestigationCreate(InvestigationBase):
    complaint_id: UUID
    investigator_id: Optional[UUID] = None

class InvestigationUpdate(InvestigationBase):
    pass

class InvestigationResponse(InvestigationBase):
    id: UUID
    complaint_id: UUID
    investigator_id: Optional[UUID] = None
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}
