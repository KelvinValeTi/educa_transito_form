import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';

//FONTS
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

SplashScreen.preventAutoHideAsync();

export default function App() {

  //LOADING FONTS
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Lobster_400Regular,    
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  // END OF LOADING FONTS

  return (
    <Routes></Routes>
  );
}


