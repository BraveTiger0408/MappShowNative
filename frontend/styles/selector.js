import { StyleSheet } from 'react-native';


export const selector_style = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 14,
      marginBottom: 10,
    },
    monthContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    monthButton: {
      padding: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      width: '30%',
      marginBottom: 10,
    },
    selectedMonthButton: {
      backgroundColor: '#007aff',
      borderColor: '#007aff',
    },
    monthButtonText: {
      textAlign: 'center',
    },
    selectedMonthButtonText: {
      color: '#fff',
    },
  });
  