from sqlalchemy import Column, String, BigInteger, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin

class ComplaintAttachment(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "complaint_attachments"

    complaint_id = Column(UUID(as_uuid=True), ForeignKey("complaints.id", ondelete="CASCADE"), nullable=False, index=True)
    file_name = Column(String(255), nullable=False)
    storage_path = Column(String(1024), nullable=False)
    content_type = Column(String(100))
    file_size_bytes = Column(BigInteger)
    
    # Placeholder for user who uploaded
    uploaded_by_id = Column(UUID(as_uuid=True), nullable=True)

    # Relationships
    complaint = relationship("Complaint", back_populates="attachments")
