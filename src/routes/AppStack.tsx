import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AppTabs from './AppTabs';
const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home Screen" component={AppTabs} />
    </Navigator>
  );
};