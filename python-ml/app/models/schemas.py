from pydantic import BaseModel


class CompareResponse(BaseModel):
    match: bool
    confidence: int
    transformation: str
