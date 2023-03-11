import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Probability = () => {
  const [probability, setProbability] = useState(0);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Probability of no-show: {probability}</Text>
    </View>
  );
};

export default Probability;
