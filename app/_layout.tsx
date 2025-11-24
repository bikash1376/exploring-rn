import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
// import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(stack)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Drawer/> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack></Stack> */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      {/* </Drawer> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}
