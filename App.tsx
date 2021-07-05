import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppLoading from 'expo-app-loading';

import { Poppins_400Regular, Poppins_600SemiBold , useFonts} from '@expo-google-fonts/poppins';

import { AuthProvider, useAuth } from './src/hooks/useAuth';
import { Routes } from './src/routes/routes';

export default function App() {
  const { loading } = useAuth();

  let [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  
  if (!fontsLoaded || loading) {
    return <AppLoading />;
  } 
  else {
    return (
      <>
        <AuthProvider>
          <Routes />
          <StatusBar style="light" />
        </AuthProvider>
      </>
    );
  }
}
  
