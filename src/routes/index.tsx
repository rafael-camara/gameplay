import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

import { useAuth } from '../hooks/useAuth';
import { linking } from '../configs/linking.config';
import { theme } from '../global/styles/theme';

const CustomDefaultTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.secondary100,
  },
};

export function Routes() {
  const { user } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={linking} theme={CustomDefaultTheme}>
        {user.id ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
