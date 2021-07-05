// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginPage from '../pages/LoginPage';
// import AppTabs from './AppTabs';

// const { Navigator, Screen } = createStackNavigator();

// function AppStack() {
//   return (
//     <NavigationContainer>
//       <Navigator screenOptions={{ headerShown: false }}>
//         <Screen name="LoginPage" component={LoginPage} />
//         <Screen name="Tabs" component={AppTabs} />
//       </Navigator>
//     </NavigationContainer>
//   )
// }

// export default AppStack;

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