import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, QuizScreen, ResultScreen } from '../screens';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Quiz" component={QuizScreen} />
      <Screen name="Result" component={ResultScreen} />
    </Navigator>
  );
};

export default MainNavigator;
