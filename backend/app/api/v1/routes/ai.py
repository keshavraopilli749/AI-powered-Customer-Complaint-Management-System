from fastapi import APIRouter

router = APIRouter()

@router.post("/process")
async def process_document():
    return {"message": "Process document with AI endpoint placeholder"}

@router.post("/chat")
async def chat_with_copilot():
    return {"message": "Chat with copilot endpoint placeholder"}
