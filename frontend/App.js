import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import DayOfWeekSelector from './components/DaySelector';
import MonthSelector from './components/MonthSelector';
import Checkbox from './components/Checkbox';
import SMSReminderSwitch from './components/Switch';
import AgeInput from './components/AgeInput';
import AwaitTimePicker from './components/AwaitTimePicker';
import AppointmentSummary from './components/SummaryView';

import { styles } from './styles/styles';
import { selector_style } from './styles/selector';


const IP_ADDRESS = "localhost";
const API_URL = `http://${IP_ADDRESS}:8002/appointment`;

export default function App() {
  const [age, setAge] = useState('');
  const [waitingDays, setWaitingDays] = useState('');
  const [appointmentData, setAppointmentData] = useState(null);

  const [diabetes, setDiabetes] = useState(false);
  const [alcoholism, setAlcoholism] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const [handicap, setHandicap] = useState(false);

  const [smsReceived, setSmsReceived] = useState(false);

  const [predictionData, setPredictionData] = useState(null);

  const handleSubmit = async () => {
    const appointmentData = {
      age: parseInt(age),
      has_hypertension: hypertension,
      has_diabetes: diabetes,
      has_alcoholism: alcoholism,
      has_handicap: handicap,
      waiting_days: parseInt(waitingDays),
      sms_received: smsReceived
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // do something with the response if necessary
    })
    .catch(error => {
      console.error(error);
      // handle errors
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <Text style={styles.main_title}>Medical appointment patient show up prediction</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Appointment Information</Text>

        <DayOfWeekSelector />
        <MonthSelector />
        <View style={styles.formGroup}>
          <Text style={selector_style.label}>Input the number of appointment awaiting days</Text>
          <AwaitTimePicker value={waitingDays} onChange={setWaitingDays} />
        </View>
        <View style={styles.formGroup}>
          <Text style={selector_style.label}>Did the patient receive a SMS remainer?</Text>
          <SMSReminderSwitch value={smsReceived} onChange={setSmsReceived} />
        </View>

        <Text style={styles.title}>Patient Information</Text>
        <View style={styles.formGroup}>
          <Text style={selector_style.label}>How old is the patient?</Text>
          <AgeInput value={age} onChange={setAge} />
        </View>

        <View style={styles.formGroup}>
          <Text style={selector_style.label}>What is the patient's condition?</Text>
          <Checkbox label="Diabetes" value={diabetes} onChange={setDiabetes} />
          <Checkbox label="Alcoholism" value={alcoholism} onChange={setAlcoholism} />
          <Checkbox label="Hypertension" value={hypertension} onChange={setHypertension} />
          <Checkbox label="Handicap" value={handicap} onChange={setHandicap} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        
      </View>
    </KeyboardAvoidingView>
  );
}
