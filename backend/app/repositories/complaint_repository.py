from typing import List, Optional, Tuple
from uuid import UUID
from sqlalchemy.orm import Session
from sqlalchemy import or_, desc, asc
from app.models.complaint import Complaint
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate

class ComplaintRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, complaint_id: UUID) -> Optional[Complaint]:
        return self.db.query(Complaint).filter(Complaint.id == complaint_id, Complaint.deleted_at.is_(None)).first()

    def get_by_complaint_number(self, complaint_number: str) -> Optional[Complaint]:
        return self.db.query(Complaint).filter(Complaint.complaint_number == complaint_number, Complaint.deleted_at.is_(None)).first()

    def get_multi(
        self,
        skip: int = 0,
        limit: int = 10,
        search: Optional[str] = None,
        status: Optional[str] = None,
        priority: Optional[str] = None,
        severity: Optional[str] = None,
        sort_by: str = "created_at",
        sort_desc: bool = True
    ) -> Tuple[List[Complaint], int]:
        
        query = self.db.query(Complaint).filter(Complaint.deleted_at.is_(None))
        
        if search:
            search_filter = f"%{search}%"
            query = query.filter(
                or_(
                    Complaint.complaint_number.ilike(search_filter),
                    Complaint.product_name.ilike(search_filter),
                    Complaint.batch_number.ilike(search_filter)
                )
            )
            
        if status:
            query = query.filter(Complaint.status == status)
        if priority:
            query = query.filter(Complaint.priority == priority)
        if severity:
            query = query.filter(Complaint.severity == severity)
            
        total = query.count()
        
        # Sorting
        sort_column = getattr(Complaint, sort_by, Complaint.created_at)
        if sort_desc:
            query = query.order_by(desc(sort_column))
        else:
            query = query.order_by(asc(sort_column))
            
        complaints = query.offset(skip).limit(limit).all()
        return complaints, total

    def create(self, complaint_in: ComplaintCreate, complaint_number: str) -> Complaint:
        db_obj = Complaint(
            **complaint_in.model_dump(exclude_unset=True, exclude={"customer"}),
            complaint_number=complaint_number
        )
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def update(self, db_obj: Complaint, obj_in: ComplaintUpdate) -> Complaint:
        update_data = obj_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_obj, field, value)
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def soft_delete(self, db_obj: Complaint) -> Complaint:
        from datetime import datetime, timezone
        db_obj.deleted_at = datetime.now(timezone.utc)
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj
