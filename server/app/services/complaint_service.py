import datetime
import random
import string
from typing import List, Tuple, Optional
from uuid import UUID
from sqlalchemy.orm import Session
from app.repositories.complaint_repository import ComplaintRepository
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate
from app.models.complaint import Complaint
from app.core.exceptions import NotFoundError, ValidationError
from app.core.logging import logger

class ComplaintService:
    def __init__(self, db: Session):
        self.repo = ComplaintRepository(db)

    def _generate_complaint_number(self) -> str:
        """
        Generates a unique complaint number: CMP-YYYY-XXXXX
        In a real production system, this would use a database sequence.
        """
        year = datetime.datetime.now().year
        random_suffix = ''.join(random.choices(string.digits, k=5))
        return f"CMP-{year}-{random_suffix}"

    def create_complaint(self, complaint_in: ComplaintCreate) -> Complaint:
        complaint_number = self._generate_complaint_number()
        
        # Ensure it's truly unique
        while self.repo.get_by_complaint_number(complaint_number):
            complaint_number = self._generate_complaint_number()
            
        logger.info(f"Creating new complaint: {complaint_number}")
        
        # In future, if complaint_in.customer is provided, we would create/lookup the customer here
        
        created = self.repo.create(complaint_in=complaint_in, complaint_number=complaint_number)
        return created

    def get_complaint(self, complaint_id: UUID) -> Complaint:
        complaint = self.repo.get_by_id(complaint_id)
        if not complaint:
            raise NotFoundError(f"Complaint with id {complaint_id} not found")
        return complaint

    def get_complaint_by_number(self, complaint_number: str) -> Complaint:
        complaint = self.repo.get_by_complaint_number(complaint_number)
        if not complaint:
            raise NotFoundError(f"Complaint {complaint_number} not found")
        return complaint

    def list_complaints(
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
        
        return self.repo.get_multi(
            skip=skip,
            limit=limit,
            search=search,
            status=status,
            priority=priority,
            severity=severity,
            sort_by=sort_by,
            sort_desc=sort_desc
        )

    def update_complaint(self, complaint_id: UUID, obj_in: ComplaintUpdate) -> Complaint:
        complaint = self.get_complaint(complaint_id)
        
        # Example Business Logic: Prevent closed complaints from being easily updated
        if complaint.status == "Closed" and obj_in.status != "Reopened":
            raise ValidationError("Cannot update a closed complaint unless reopening it.")
            
        logger.info(f"Updating complaint: {complaint.complaint_number}")
        return self.repo.update(db_obj=complaint, obj_in=obj_in)

    def delete_complaint(self, complaint_id: UUID) -> Complaint:
        complaint = self.get_complaint(complaint_id)
        logger.info(f"Soft deleting complaint: {complaint.complaint_number}")
        return self.repo.soft_delete(db_obj=complaint)
