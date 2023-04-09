## mappshow
Medical APPointment SHOW

### Description
mappshow is a cross-platform application that allows to predict whether a patient will show up for a medical appointment or not. The application is based on a dataset of medical appointments in Brazil and is inspired by the [Kaggle challenge](https://www.kaggle.com/joniarroba/noshowappointments).

### Tech stack
The application is built using React Native and Expo.

Using FastAPI, the application exposes a REST API that allows to predict whether a patient will show up for a medical appointment or not.

FastAPI documentation is available at http://localhost:8000/docs.


### Installation
#### Prerequisites
- [React Native](https://reactnative.dev/docs/environment-setup) (useful tutorial: https://www.youtube.com/watch?v=YysKbNk1tj0)
- [Node.js](https://nodejs.org/en/download/)
- [Expo Go](https://expo.io/client) (mobile app)
- [Python](https://www.python.org/downloads/)
- [FastAPI](https://fastapi.tiangolo.com/tutorial/)

### Run the application
#### Run the server FastAPI
Set up virtual environment and install dependencies, then run the server:

`cd backend`

`python main.py`

#### Run the client React Native
Use the Expo Go app to scan the QR code displayed in the terminal after running the following commands:

`cd frontend`

`npm install`

`npm start`

When running the application, pay attention to ports used by the server and the client.

Currently client port: 19006 and server: 8000


### Implementation details


The application form has the following fields:
1. Gender - user needs to check wheter the patient is female or male
2. Age - user needs to enter the age of the patient
3. Awaiting time - user needs to enter the waiting time of the patient (approximate number of days - the application will automatically convert it to the corresponding group)
4. Hypertension - user needs to check whether the patient has hypertension or not
5. Diabetes - user needs to check whether the patient has diabetes or not
6. Alcoholism - user needs to check whether the patient is an alcoholic or not
7. Handicap - user needs to check whether the patient has a handicap or not
8. SMS received - user needs to check whether the patient received an SMS as a reminder or not
9. Appointment day of the week - user needs to select the day of the appointment
10. Appointment month - user needs to select the month of the appointment


The data entered to the model is the following form:
1. Gender: male or female (0 corresponds to male, 1 corresponds to female)
2. AgeGroupInt: age group of the patient `age_group_map = {
    '0-1': 1, '2-5': 2, '6-10': 3, '11-15': 4, '16-25': 5, '26-32': 7, '33-42': 8, '43-52': 9, '53-115': 10}`
3. AwaitingTimeGroup: waiting time group of the patient
<i>Group 1 : 0-1 days - within a day
 Group 2: 1-7 days - within a week
 Group 3: 8-30 days - within a month
 Group 4: 31-90 days - within 3 months
 Group 5: 91-180 days - within 6 months</i>
4. Hypertension: whether the patient has hypertension or not (0 corresponds to no, 1 corresponds to yes)
5. Diabetes: whether the patient has diabetes or not (0 corresponds to no, 1 corresponds to yes)
6. Alcoholism: whether the patient is an alcoholic or not (0 corresponds to no, 1 corresponds to yes)
7. Handicap: whether the patient has a handicap or not (0 corresponds to no, 1 corresponds to yes)
8. SMS_received: whether the patient received an SMS as a reminder or not (0 corresponds to no, 1 corresponds to yes)
9. AppointmentDayOfWeek: day of the appointment (0 corresponds to Monday, 1 corresponds to Tuesday, etc.)
10. AppointmentMonth: month of the appointment (1 corresponds to January, 2 corresponds to February, etc.)
