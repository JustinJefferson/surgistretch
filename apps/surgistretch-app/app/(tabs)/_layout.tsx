import { Tabs } from "expo-router";
import { paletteWhite, paletteTealDark } from "@/constants/Colors";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, href: null }} />
      <Tabs.Screen name="list" options={{
        title: 'SurgiStretch',
        tabBarLabel: 'Home',
        headerStyle: { backgroundColor: paletteTealDark },
        headerTitleStyle: { color: paletteWhite, fontSize: 26 },
        tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faHouse} size={size} style={{color: color}} />
        )
      }} />
      <Tabs.Screen name="about" options={{
        title: 'About',
        headerStyle: { backgroundColor: paletteTealDark },
        headerTitleStyle: { color: paletteWhite, fontSize: 26 },
        tabBarIcon: ({ color, focused, size }) => (
            <FontAwesomeIcon icon={faCircleInfo} size={size} style={{color: color}} />
        )
      }} />
    </Tabs>
  );
}
