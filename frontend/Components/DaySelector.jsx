import { View, Text, TouchableOpacity } from 'react-native';
import { selector_style } from '../styles/selector';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DayOfWeekSelector = ({ selectedDay, setSelectedDay }) => {

  const handlePress = (day) => {
    setSelectedDay(DAYS.indexOf(day));
  };

  return (
    <View style={selector_style.container}>
      <Text style={selector_style.label}>Select the day of the appointment:</Text>
      <View style={selector_style.monthContainer}>
        {DAYS.map((day, index) => (
          <TouchableOpacity
            key={day}
            style={{
              backgroundColor: selectedDay === index ? '#A02BFF' : 'lightgray',
              borderRadius: 3,
              padding: 8,
              margin: 2,
            }}
            onPress={() => handlePress(day)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DayOfWeekSelector;
