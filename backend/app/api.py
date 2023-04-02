from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import pickle
import pandas as pd


app = FastAPI()


FEATURES = [
    'Gender',
    'Scholarship',
    'Hypertension',
    'Diabetes',
    'Alcoholism',
    'Handicap',
    'SMS_received',
    'ScheduledHour',
    'ScheduledMonth',
    'AppointmentMonth',
    'ScheduledDayOfWeek',
    'AppointmentDayOfWeek',
    'AgeGroupInt',
    'NeighbourhoodInt',
    'AwaitingTimeGroup',
]


# accept requests from localhost:19006
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
    gender: int = 0
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
    # load model from models/xgboost_model.pkl
    model = pickle.load(open('models/xgboost_cls.pkl', 'rb'))

    gender = appointment_data.gender
    has_scholarship = appointment_data.has_scholarship
    has_hypertension = appointment_data.has_hypertension
    has_diabetes = appointment_data.has_diabetes
    has_alcoholism = appointment_data.has_alcoholism
    has_handicap = appointment_data.has_handicap
    sms_received = appointment_data.sms_received
    appointment_month = 5
    scheduled_hour = 10
    scheduled_month = 5
    scheduled_day_of_week = 4
    appointment_day_of_week = 4
    neighbourhood_int = 0
    age_group_int = 0
    awaiting_time_group = 0

    df = pd.DataFrame(columns=FEATURES)
        
    df.loc[0] = [
        gender,
        has_scholarship,
        has_hypertension,
        has_diabetes,
        has_alcoholism,
        has_handicap,
        sms_received,
        scheduled_hour,
        scheduled_month,
        appointment_month,
        scheduled_day_of_week,
        appointment_day_of_week,
        age_group_int,
        neighbourhood_int,
        awaiting_time_group
    ]

    prediction = model.predict(df)
    proba_show = round(model.predict_proba(df)[0][1]*100, 2)
    proba_not_show = round(model.predict_proba(df)[0][0]*100, 2)

    if prediction[0] == 1:
        prediction = "Yes"
    else:
        prediction = "No"

    info_mesg = {
        f"The patient will show up: {prediction} \
        with probability: {proba_show}% \
        and will not show up: {proba_not_show}%",
    }
    
    return {"message": info_mesg}


@app.get("/")
async def read_root() -> dict:
    info = {
        "name": "Medical appointment show prediction API",
        "description": "API to check appointment show",
    }
    return info
