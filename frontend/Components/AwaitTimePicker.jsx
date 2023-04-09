import { View, Text, Picker } from 'react-native';

const AwaitTimePicker = ({ value, onChange }) => {
  const handleWaitingTimeChange = (value) => {
    onChange(value);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 3}}>
      <Text style={{ flex: 1, fontSize: 14 }}>Appointment waiting time:</Text>
      <Picker
        style={{ flex: 2, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 3 }}
        selectedValue={value}
        onValueChange={handleWaitingTimeChange}
      >
        <Picker.Item label="0-1 days" value="1" />
        <Picker.Item label="1-7 days" value="2" />
        <Picker.Item label="8-30 days" value="3" />
        <Picker.Item label="31-90 days" value="4" />
        <Picker.Item label="91-180 days" value="5" />
      </Picker>
    </View>
  );
};

export default AwaitTimePicker;
