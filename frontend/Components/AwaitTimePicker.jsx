import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

const AwaitTimePicker = () => {
  const [waitingTime, setWaitingTime] = useState('0-1 days');

  const handleWaitingTimeChange = (value) => {
    setWaitingTime(value);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 3}}>
      <Text style={{ flex: 1, fontSize: 14 }}>Appointment waiting time:</Text>
      <Picker
        style={{ flex: 2, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 3 }}
        selectedValue={waitingTime}
        onValueChange={handleWaitingTimeChange}
      >
        <Picker.Item label="0-1 days" value="0-1 days" />
        <Picker.Item label="1-7 days" value="1-7 days" />
        <Picker.Item label="8-30 days" value="8-30 days" />
        <Picker.Item label="31-90 days" value="31-90 days" />
        <Picker.Item label="91-180 days" value="91-180 days" />
      </Picker>
    </View>
  );
};

export default AwaitTimePicker;
