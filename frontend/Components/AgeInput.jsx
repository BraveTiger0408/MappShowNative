import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const AgeInput = () => {
  const [age, setAge] = useState('');

  const handleAgeChange = (text) => {
    if (text === '' || (parseInt(text) >= 0 && parseInt(text) <= 125)) {
        setAge(text);
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