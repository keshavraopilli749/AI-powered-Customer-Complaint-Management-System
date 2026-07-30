from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, JSONB
from .base import Base, UUIDMixin, TimestampMixin

class AuditLog(Base, UUIDMixin, TimestampMixin):
    __tablename__ = "audit_logs"

    entity_name = Column(String(100), nullable=False, index=True) # e.g. 'complaint'
    entity_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    
    action = Column(String(50), nullable=False) # 'CREATE', 'UPDATE', 'STATUS_CHANGE'
    changes = Column(JSONB) # Before / After delta
    
    # ID of user who made the change. Nullable for system/AI actions.
    user_id = Column(UUID(as_uuid=True), nullable=True)
