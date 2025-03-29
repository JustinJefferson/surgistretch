import { Stack, SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  setTimeout(SplashScreen.hideAsync, 500);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: ''}} />
      <Stack.Screen name="video" options={{ title: '' }} />
    </Stack>
  );
}
