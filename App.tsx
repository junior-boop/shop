import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources, { UserContext } from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // const ProvideState = useMemo(() => (), [data, setData])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <UserContext.Provider value={''}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </UserContext.Provider>
      </SafeAreaProvider>
    );
  }
}
