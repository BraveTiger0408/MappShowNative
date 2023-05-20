import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .constants import FEATURES
from .data_models import AppointmentData
from .utils import (
    create_df_instance,
    create_patient_description,
    get_result,
    load_model,
)

logging.basicConfig(level=logging.DEBUG)


app = FastAPI()


# CORS middleware to allow requests from any origin
# for development purposes only
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/appointment")
def create_appointment(appointment_data: AppointmentData):
    logging.debug(f"Received appointment data: {appointment_data}")

    model = load_model("random_forest_model")

    df = create_df_instance(appointment_data, FEATURES)

    prediction, proba_show, proba_not_show = get_result(model, df)

    info_mesg = {
        "patient_description": create_patient_description(appointment_data),
        "prediction": prediction,
        "proba_show": proba_show,
        "proba_not_show": proba_not_show,
    }

    logging.debug(f"Prediction: {info_mesg}")

    return {"message": info_mesg}


@app.get("/")
async def read_root() -> dict:
    info = {
        "name": "Medical appointment show prediction API",
        "description": "API to check appointment show",
    }
    return info
