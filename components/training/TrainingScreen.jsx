import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const TrainingScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>TrainingScreen {navigation.getParent()}</Text>
    </View>
  );
};

export default TrainingScreen;
