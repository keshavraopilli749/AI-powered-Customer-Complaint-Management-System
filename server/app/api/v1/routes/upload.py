from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def upload_document():
    return {"message": "Upload document endpoint placeholder"}
