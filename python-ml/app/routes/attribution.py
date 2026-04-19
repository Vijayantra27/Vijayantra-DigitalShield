from fastapi import APIRouter
from app.services.legal_reasoning import generate_attribution

router = APIRouter()


@router.get("/")
def attribution():
    return generate_attribution()
