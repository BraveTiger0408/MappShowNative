import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { selector_style } from '../styles/selector';



const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DayOfWeekSelector = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const handlePress = (day) => {
    setSelectedDay(day);
  };

  return (
    <View style={selector_style.container}>
      <Text style={selector_style.label}>Select the day of the appointment:</Text>
      <View style={selector_style.monthContainer}>
        {DAYS.map((day) => (
          <TouchableOpacity
            key={day}
            style={{
              backgroundColor: selectedDay === day ? '#A02BFF' : 'lightgray',
              borderRadius: 5,
              padding: 11,
              margin: 3,
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
