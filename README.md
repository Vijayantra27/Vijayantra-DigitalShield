# Guardian Lens AI

## Setup

### Backend

cd backend
npm install
npm start

### ML Service

cd python-ml
pip install -r requirements.txt
uvicorn app.main:app --reload

### Frontend

cd frontend
npm install
npm start
