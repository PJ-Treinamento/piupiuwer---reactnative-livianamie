// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: 'AuthLoading',
//     }
//   )
// );



import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

import { AuthProvider, useAuth } from '../hooks/useAuth';

export const Routes = () => {
  const { token } = useAuth()
  
  return (
    <NavigationContainer>
        {!!token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};