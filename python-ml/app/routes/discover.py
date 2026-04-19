from fastapi import APIRouter
from app.services.custom_search import search_content

router = APIRouter()


@router.get("/")
def discover():
    return search_content()
