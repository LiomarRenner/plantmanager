//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
//import { Welcome } from './src/screens/Welcome';
//import { UserIdentification } from './src/screens/UserIdentification';
import { Confirmation } from './src/screens/Confirmation';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading/>

  return (
    //<Welcome />
    //<UserIdentification/>
    <Confirmation/>
  );
}


