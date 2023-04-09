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

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const handleMonthSelect = (monthId) => {
    setSelectedMonth(monthId);
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
              selectedMonth === month.id && selector_style.selectedMonthButton,
            ]}
            onPress={() => handleMonthSelect(month.id)}
          >
            <Text
              style={[
                selector_style.monthButtonText,
                selectedMonth === month.id && selector_style.selectedMonthButtonText,
              ]}
            >
              {month.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MonthSelector;
