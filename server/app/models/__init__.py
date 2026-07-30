from .base import Base, UUIDMixin, TimestampMixin, SoftDeleteMixin
from .customer import Customer
from .complaint import Complaint
from .attachment import ComplaintAttachment
from .investigation import Investigation
from .risk_assessment import RiskAssessment
from .ai_response import AIResponse
from .audit_log import AuditLog

# Expose all models so Alembic can discover them
__all__ = [
    "Base",
    "Customer",
    "Complaint",
    "ComplaintAttachment",
    "Investigation",
    "RiskAssessment",
    "AIResponse",
    "AuditLog"
]
