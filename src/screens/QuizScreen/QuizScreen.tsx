/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { NavigationParamList } from '../../navigation/types';
import styles from '../styles';

export interface IQuizScreenProps {
  navigation: StackNavigationProp<NavigationParamList, 'Quiz'>;
  route: RouteProp<NavigationParamList, 'Quiz'>;
}

const handlePressNextQuestion = (nav: StackNavigationProp<NavigationParamList, 'Quiz'>, count: number) => {
  nav.navigate('Quiz', { count: count + 1 });
};

const handlePressSeeResult = (nav: StackNavigationProp<NavigationParamList, 'Quiz'>) => {
  nav.navigate('Result');
};

const QuizScreen: React.FC<IQuizScreenProps> = ({ navigation, route }) => {
  const count = route.params?.count ? route.params?.count : 0;

  return (
    <View style={styles.container}>
      <Text>You are in the Quiz Screen for the {count} time</Text>
      {count < 9 ? (
        <Pressable onPressOut={() => handlePressNextQuestion(navigation, count)}>
          <Text>Next question</Text>
        </Pressable>
      ) : (
        <Pressable onPressOut={() => handlePressSeeResult(navigation)}>
          <Text>Answer Last Question</Text>
        </Pressable>
      )}
    </View>
  );
};

export default QuizScreen;
