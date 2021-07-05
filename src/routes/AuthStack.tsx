import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login Screen" component={LoginPage} />
    </Navigator>
  );
};