import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import LandingPage from '../pages/LandingPage';
const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="LandingPage" component={LandingPage} />
      <Screen name="LoginPage" component={LoginPage} />
    </Navigator>
  );
};