from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime

class AttachmentBase(BaseModel):
    file_name: str
    storage_path: str
    content_type: Optional[str] = None
    file_size_bytes: Optional[int] = None

class AttachmentCreate(AttachmentBase):
    complaint_id: UUID

class AttachmentResponse(AttachmentBase):
    id: UUID
    complaint_id: UUID
    uploaded_by_id: Optional[UUID] = None
    created_at: datetime

    model_config = {"from_attributes": True}
