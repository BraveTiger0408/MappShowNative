import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SMSReminderSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Did the patient receive an SMS reminder for their appointment?</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 3,
  },
  label: {
    fontSize: 14,
  },
});

export default SMSReminderSwitch;

