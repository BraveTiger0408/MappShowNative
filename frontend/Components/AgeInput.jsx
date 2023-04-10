import { View, Text, TextInput } from 'react-native';

const AgeInput = ( {age, setAge} ) => {
  const handleAgeChange = (number) => {
    if (parseInt(number) >= 0 && parseInt(number) <= 125) {
        setAge(parseInt(number));
      }  
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 10, fontSize: 14 }}>Patient age:</Text>
      <TextInput
        keyboardType="numeric"
        value={age}
        maxLength={3}
        onChangeText={handleAgeChange}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, width: 50, borderRadius: 5 }}
      />
    </View>
  );
};

export default AgeInput;