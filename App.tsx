import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_100Thin } from '@expo-google-fonts/inter';
import { Poppins_500Medium, Poppins_700Bold,Poppins_300Light } from '@expo-google-fonts/poppins';
import { Rajdhani_500Medium, Rajdhani_700Bold, Rajdhani_300Light } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_300Light,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );

}


