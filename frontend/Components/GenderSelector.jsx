import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GenderSelector = ({ gender, setGender }) => {

  const handleGenderChange = (value) => {
    setGender(parseInt(value));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Gender:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radio, gender === 0 && styles.selected]}
          onPress={() => handleGenderChange(0)}
        >
          <Text style={styles.radioLabel}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radio, gender === 1 && styles.selected]}
          onPress={() => handleGenderChange(1)}
        >
          <Text style={styles.radioLabel}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'normal',
    marginRight: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bordeColor: '#ccc',
  },
  radio: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    bordeColor: '#ccc',
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: 'normal',
    padding: 3,
  },
});

export default GenderSelector;
