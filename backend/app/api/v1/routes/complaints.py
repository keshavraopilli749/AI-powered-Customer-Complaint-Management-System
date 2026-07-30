from fastapi import APIRouter, Depends, Query, Path
from sqlalchemy.orm import Session
from typing import Optional, List
from uuid import UUID
from app.api.dependencies import get_db
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate, ComplaintResponse
from app.schemas.response import SuccessResponse, PaginatedResponse
from app.services.complaint_service import ComplaintService

router = APIRouter()

def get_complaint_service(db: Session = Depends(get_db)) -> ComplaintService:
    return ComplaintService(db)

@router.post("/", response_model=SuccessResponse[ComplaintResponse], status_code=201)
async def create_complaint(
    complaint_in: ComplaintCreate,
    service: ComplaintService = Depends(get_complaint_service)
):
    """Create a new customer complaint."""
    complaint = service.create_complaint(complaint_in)
    return SuccessResponse(
        data=complaint,
        message="Complaint created successfully"
    )

@router.get("/", response_model=SuccessResponse[PaginatedResponse[ComplaintResponse]])
async def list_complaints(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Items per page"),
    search: Optional[str] = Query(None, description="Search by complaint number, product, or batch"),
    status: Optional[str] = Query(None, description="Filter by status"),
    priority: Optional[str] = Query(None, description="Filter by priority"),
    severity: Optional[str] = Query(None, description="Filter by severity"),
    sort_by: str = Query("created_at", description="Field to sort by"),
    sort_desc: bool = Query(True, description="Sort descending"),
    service: ComplaintService = Depends(get_complaint_service)
):
    """Retrieve a paginated and filtered list of complaints."""
    skip = (page - 1) * page_size
    complaints, total = service.list_complaints(
        skip=skip,
        limit=page_size,
        search=search,
        status=status,
        priority=priority,
        severity=severity,
        sort_by=sort_by,
        sort_desc=sort_desc
    )
    
    total_pages = (total + page_size - 1) // page_size
    
    return SuccessResponse(
        data=PaginatedResponse(
            items=complaints,
            total=total,
            page=page,
            size=page_size,
            pages=total_pages
        )
    )

@router.get("/{complaint_id}", response_model=SuccessResponse[ComplaintResponse])
async def get_complaint(
    complaint_id: UUID = Path(..., description="The UUID of the complaint"),
    service: ComplaintService = Depends(get_complaint_service)
):
    """Get a complaint by its ID."""
    complaint = service.get_complaint(complaint_id)
    return SuccessResponse(data=complaint)

@router.get("/number/{complaint_number}", response_model=SuccessResponse[ComplaintResponse])
async def get_complaint_by_number(
    complaint_number: str = Path(..., description="The Complaint Number (e.g. CMP-YYYY-XXXXX)"),
    service: ComplaintService = Depends(get_complaint_service)
):
    """Get a complaint by its assigned number."""
    complaint = service.get_complaint_by_number(complaint_number)
    return SuccessResponse(data=complaint)

@router.put("/{complaint_id}", response_model=SuccessResponse[ComplaintResponse])
async def update_complaint(
    complaint_in: ComplaintUpdate,
    complaint_id: UUID = Path(...),
    service: ComplaintService = Depends(get_complaint_service)
):
    """Update a complaint."""
    complaint = service.update_complaint(complaint_id, complaint_in)
    return SuccessResponse(
        data=complaint,
        message="Complaint updated successfully"
    )

@router.delete("/{complaint_id}", response_model=SuccessResponse[ComplaintResponse])
async def delete_complaint(
    complaint_id: UUID = Path(...),
    service: ComplaintService = Depends(get_complaint_service)
):
    """Soft delete a complaint."""
    complaint = service.delete_complaint(complaint_id)
    return SuccessResponse(
        data=complaint,
        message="Complaint deleted successfully"
    )
