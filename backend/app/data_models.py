from pydantic import BaseModel


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
