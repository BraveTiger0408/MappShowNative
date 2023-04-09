from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import pickle
import pandas as pd


app = FastAPI()


FEATURES = [
    'Gender',
    'Hypertension',
    'Diabetes',
    'Alcoholism',
    'Handicap',
    'SMS_received',
    'AppointmentMonth',
    'AppointmentDayOfWeek',
    'AgeGroupInt',
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
    gender: int
    age: int
    has_hypertension: bool
    has_diabetes: bool
    has_alcoholism: bool
    has_handicap: bool
    waiting_days_group: int
    sms_received: bool
    appointment_month: int
    appointment_day_of_week: int


def map_age_group(age):
    age_group_map = {'0-1': 1, '2-5': 2, '6-10': 3, '11-15': 4, '16-25': 5, '26-32': 7, '33-42': 8, '43-52': 9, '53-115': 10}
    for age_range, age_group in age_group_map.items():
        age_min, age_max = age_range.split('-')
        if age >= int(age_min) and age <= int(age_max):
            return age_group
    raise ValueError('Age out of range')


def create_df_instance(appointment_data, features_columns) -> pd.DataFrame:
    df_instance = pd.DataFrame(columns=features_columns)
    df_instance.loc[0] = [
        appointment_data.gender,
        appointment_data.has_hypertension,
        appointment_data.has_diabetes,
        appointment_data.has_alcoholism,
        appointment_data.has_handicap,
        appointment_data.sms_received,
        appointment_data.appointment_month,
        appointment_data.appointment_day_of_week,
        map_age_group(appointment_data.age),
        appointment_data.waiting_days_group,
    ]
    return df_instance


def load_model(model_name: str) -> object:
    return pickle.load(open(f'../models/{model_name}.pkl', 'rb'))


def get_result(model, df_instance) -> tuple:
    prediction = model.predict(df_instance)
    proba_show = round(model.predict_proba(df_instance)[0][1]*100, 2)
    proba_not_show = round(model.predict_proba(df_instance)[0][0]*100, 2)

    if prediction[0] == 1:
        prediction = "Yes"
    else:
        prediction = "No"

    return prediction, proba_show, proba_not_show


@app.post("/appointment")
def create_appointment(appointment_data: AppointmentData):
    model = load_model('xgboost_cls')

    df = create_df_instance(appointment_data, FEATURES)

    prediction, proba_show, proba_not_show = get_result(model, df)

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
