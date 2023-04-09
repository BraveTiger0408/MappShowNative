import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Probability from './components/Probability';
import DayOfWeekSelector from './components/DaySelector';
import MonthSelector from './components/MonthSelector';
import { styles } from './styles/styles';


const IP_ADDRESS = "localhost";
const API_URL = `http://${IP_ADDRESS}:8002/appointment`;

export default function App() {
  const [age, setAge] = useState('');
  const [waitingDays, setWaitingDays] = useState('');
  
  const [hasScholarship, setHasScholarship] = useState(false);
  const [hasHypertension, setHasHypertension] = useState(false);
  const [hasAlcoholism, setHasAlcoholism] = useState(false);
  const [hasHandicap, setHasHandicap] = useState(false);
  const [hasDiabetes, setHasDiabetes] = useState(false);
  const [hasSmsReceived, setHasSmsReceived] = useState(false);

  const handleSubmit = () => {
    const appointmentData = {
      age: parseInt(age),
      has_scholarship: hasScholarship,
      has_hypertension: hasHypertension,
      has_diabetes: hasDiabetes,
      has_alcoholism: hasAlcoholism,
      has_handicap: hasHandicap,
      waiting_days: parseInt(waitingDays),
      sms_received: hasSmsReceived
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
    <View style={styles.container}>
      <Text style={styles.title}>Medical appointment patient show up prediction</Text>

      <DayOfWeekSelector />
      <MonthSelector />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          maxLength={3}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter patient's age"
        />
    </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>Scholarship</Text>
          <Switch
            value={hasScholarship}
            onValueChange={setHasScholarship}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>Hypertension</Text>
          <Switch
            value={hasHypertension}
            onValueChange={setHasHypertension}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>Diabetes</Text>
          <Switch
            value={hasDiabetes}
            onValueChange={setHasDiabetes}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>Alcoholism</Text>
          <Switch
            value={hasAlcoholism}
            onValueChange={setHasAlcoholism}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>Handicap</Text>
          <Switch
            value={hasHandicap}
            onValueChange={setHasHandicap}
          />
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Waiting Days</Text>
        <TextInput
          style={styles.input}
          value={waitingDays}
          onChangeText={setWaitingDays}
          keyboardType="numeric"
          placeholder="Enter the number of waiting days"
        />
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchGroup}>
          <Text style={styles.label}>SMS Received</Text>
          <Switch
            value={hasSmsReceived}
            onValueChange={setHasSmsReceived}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Probability />
    </View>
    </KeyboardAvoidingView>
  );
}
