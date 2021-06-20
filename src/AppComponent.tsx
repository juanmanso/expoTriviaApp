import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, QuizScreen, ResultScreen } from './screens';

const Stack = createStackNavigator();

const AppComponent = () => (
  <>
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default AppComponent;
