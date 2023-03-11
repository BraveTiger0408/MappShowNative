from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel


app = FastAPI()

origins = [
    "http://localhost:19006",
    "localhost:19006",
]

# for development purposes only
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class AppointmentData(BaseModel):
    age: int
    has_scholarship: bool
    has_hypertension: bool
    has_diabetes: bool
    has_alcoholism: bool
    has_handicap: bool
    waiting_days: int
    sms_received: bool


@app.post("/appointment")
def create_appointment(appointment_data: AppointmentData):
    # Do something with the received data
    return {"message": "Data received"}


@app.get("/")
async def read_root() -> dict:
    info = {
        "name": "Medical appointment show prediction API",
        "description": "API to check appointment show",
    }
    return info
