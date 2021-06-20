import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation';

const AppComponent = () => (
  <>
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
    <MainNavigator />
  </>
);

export default AppComponent;
