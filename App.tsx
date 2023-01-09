import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/contexts/AuthContext';
import useCachedResources from './src/hooks/useCachedResources';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Method has been deprecated. Please instead use `remove()`',
]);

export default function App() {
  const { appIsReady } = useCachedResources();

  if (!appIsReady) {
    return null;
  }

  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
