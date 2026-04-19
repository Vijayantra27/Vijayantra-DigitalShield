from fastapi import APIRouter
from app.services.fingerprinting.perceptual_hash import generate_phash

router = APIRouter()


@router.get("/")
def fingerprint():
    return generate_phash()
