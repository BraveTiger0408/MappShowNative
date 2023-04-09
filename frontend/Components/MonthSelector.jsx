import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { selector_style } from '../styles/selector';


const MONTHS = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

const MonthSelector = ({ onMonthSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    onMonthSelect(month);
  };

  return (
    <View style={selector_style.container}>
      <Text style={selector_style.label}>Select the month of the appointment:</Text>
      <View style={selector_style.monthContainer}>
        {MONTHS.map((month) => (
          <TouchableOpacity
            key={month.id}
            style={[
              selector_style.monthButton,
              selectedMonth && selectedMonth.id === month.id && selector_style.selectedMonthButton,
            ]}
            onPress={() => handleMonthSelect(month)}
          >
            <Text style={[selector_style.monthButtonText, selectedMonth && selectedMonth.id === month.id && selector_style.selectedMonthButtonText]}>
              {month.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default MonthSelector;
