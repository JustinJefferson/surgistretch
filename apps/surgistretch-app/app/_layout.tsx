import { Stack, SplashScreen } from "expo-router";
import { paletteWhite, paletteTealDark } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  setTimeout(SplashScreen.hideAsync, 500);
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: 'SurgiStretch',
        headerStyle: { backgroundColor: paletteTealDark },
        headerTitleStyle: { color: paletteWhite, fontSize: 26 }
      }} />
      <Stack.Screen name="video" options={{ title: '' }} />
    </Stack>
  );
}
