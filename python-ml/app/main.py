from fastapi import FastAPI
from app.routes import fingerprint, discover, compare, attribution, health

app = FastAPI(title="Guardian Lens AI ML Service")

app.include_router(health.router, prefix="/health")
app.include_router(fingerprint.router, prefix="/fingerprint")
app.include_router(discover.router, prefix="/discover")
app.include_router(compare.router, prefix="/compare")
app.include_router(attribution.router, prefix="/attribution")