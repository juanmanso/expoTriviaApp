import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation';

const AppComponent: () => ReactNode = () => (
  <NavigationContainer>
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
    <MainNavigator />
  </NavigationContainer>
);

export default AppComponent;
