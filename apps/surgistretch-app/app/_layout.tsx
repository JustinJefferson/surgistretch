import { Stack, SplashScreen } from "expo-router";
import { paletteWhite, paletteTealDark } from "@/constants/Colors";
import * as Settings from "asset-pack-delivery";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  setTimeout(SplashScreen.hideAsync, 500);
  const hello = Settings.hello();
  return (
    <Stack>
      <Stack.Screen name="index" options={{
//         title: 'SurgiStretch',
        title: hello,
        headerStyle: { backgroundColor: paletteTealDark },
        headerTitleStyle: { color: paletteWhite, fontSize: 26 }
      }} />
      <Stack.Screen name="video" options={{ title: '' }} />
    </Stack>
  );
}
