/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParamList } from '../../navigation/types';
import styles from '../styles';

export interface IHomeScreenProps {
  navigation: StackNavigationProp<NavigationParamList, 'Home'>;
}

const handlePressBeginButton = (navigation: StackNavigationProp<NavigationParamList, 'Home'>) => {
  console.log(`clicked begin button`);
  navigation.navigate('Quiz', { count: 0 });
};

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <Pressable onPressOut={() => handlePressBeginButton(navigation)}>
      <Text>Begin</Text>
    </Pressable>
  </View>
);
export default HomeScreen;
