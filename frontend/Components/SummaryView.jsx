import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryView = ({ appointmentData, predictionData }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };

  const {
    age,
    waitingDays,
    has_hypertension,
    has_diabetes,
    has_alcoholism,
    has_handicap,
    sms_received
  } = appointmentData;

  const classification = predictionData?.classification ?? 'Unknown';

  if (isHidden) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment and Patient Information Summary</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appointment Information:</Text>
        <Text>Age: {age}</Text>
        <Text>Waiting Days: {waitingDays}</Text>
        <Text>SMS Received: {sms_received ? 'Yes' : 'No'}</Text>
        <Text>Hypertension: {has_hypertension ? 'Yes' : 'No'}</Text>
        <Text>Diabetes: {has_diabetes ? 'Yes' : 'No'}</Text>
        <Text>Alcoholism: {has_alcoholism ? 'Yes' : 'No'}</Text>
        <Text>Handicap: {has_handicap ? 'Yes' : 'No'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prediction:</Text>
        <Text>Classification: {classification}</Text>
        {predictionData?.probability && (
          <Text>Probability: {predictionData.probability.toFixed(2)}</Text>
        )}
      </View>

      <Text style={styles.hideLink} onPress={handleHide}>
        Hide Summary
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hideLink: {
    color: 'blue',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SummaryView;
