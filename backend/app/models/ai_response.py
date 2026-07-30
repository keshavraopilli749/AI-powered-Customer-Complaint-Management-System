from sqlalchemy import Column, String, Text, Numeric, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from .base import Base, UUIDMixin, TimestampMixin

class AIResponse(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "ai_responses"

    complaint_id = Column(UUID(as_uuid=True), ForeignKey("complaints.id", ondelete="CASCADE"), nullable=False, unique=True)
    
    summary = Column(Text)
    extracted_fields = Column(JSONB)
    confidence_score = Column(Numeric(5, 2))
    
    risk_classification = Column(String(50))
    root_cause_suggestion = Column(Text)
    capa_suggestion = Column(Text)
    
    prompt_version = Column(String(50))
    model_used = Column(String(50))
    processing_time_ms = Column(Integer)

    # Relationships
    complaint = relationship("Complaint", back_populates="ai_response")
