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