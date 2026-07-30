from pydantic import BaseModel, Field
from typing import Optional, List
from uuid import UUID
from datetime import date, datetime
from .customer import CustomerResponse

class ComplaintBase(BaseModel):
    product_name: str
    generic_name: Optional[str] = None
    strength: Optional[str] = None
    batch_number: Optional[str] = None
    manufacturing_date: Optional[date] = None
    expiry_date: Optional[date] = None
    
    complaint_category: Optional[str] = None
    complaint_type: Optional[str] = None
    complaint_description: str
    observed_issue: Optional[str] = None
    
    severity: str = "Minor"
    priority: str = "Medium"
    status: str = "New"

class ComplaintCreate(ComplaintBase):
    customer_id: Optional[UUID] = None
    # For creating customer along with complaint
    customer: Optional[dict] = None

class ComplaintUpdate(ComplaintBase):
    product_name: Optional[str] = None
    complaint_description: Optional[str] = None

class ComplaintResponse(ComplaintBase):
    id: UUID
    complaint_number: str
    customer_id: Optional[UUID] = None
    
    assigned_to_id: Optional[UUID] = None
    created_by_id: Optional[UUID] = None
    updated_by_id: Optional[UUID] = None
    
    created_at: datetime
    updated_at: datetime
    
    customer: Optional[CustomerResponse] = None

    model_config = {"from_attributes": True}
