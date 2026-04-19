from fastapi import APIRouter
from app.services.gemini_service import compare_assets

router = APIRouter()


@router.get("/")
def compare():
    return compare_assets()
