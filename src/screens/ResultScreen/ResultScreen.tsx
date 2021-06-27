/* eslint-disable react/prop-types */
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationParamList } from '../../navigation/types';
import styles from '../styles';

export interface IResultScreenProps {
  navigation: StackNavigationProp<NavigationParamList, 'Result'>;
}

const handleOnPressRestartButton = (nav: StackNavigationProp<NavigationParamList, 'Result'>) => {
  nav.popToTop();
};

const ResultScreen: React.FC<IResultScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text>These are the results!</Text>
    <Pressable onPressOut={() => handleOnPressRestartButton(navigation)}>
      <Text>Restart</Text>
    </Pressable>
  </View>
);

export default ResultScreen;
