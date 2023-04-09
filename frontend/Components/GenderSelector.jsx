import { View, Text, StyleSheet } from 'react-native';

const GenderSelector = ({ gender, setGender }) => {

  const handleGenderChange = (event) => {
    console.log(event.target.value)
    setGender(parseInt(event.target.value));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Gender:</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radio}>
          <input
            type="radio"
            id="male"
            name="gender"
            value="0"
            checked={gender === 0}
            onChange={handleGenderChange}
          />
          <Text style={styles.radioLabel}>Male</Text>
        </View>
        <View style={styles.radio}>
          <input
            type="radio"
            id="female"
            name="gender"
            value="1"
            checked={gender === 1}
            onChange={handleGenderChange}
          />
          <Text style={styles.radioLabel}>Female</Text>
        </View>
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
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default GenderSelector;

