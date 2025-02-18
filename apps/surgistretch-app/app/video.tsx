import { StyleSheet, View, Text } from "react-native";
import VideoScreen from '@/components/VideoScreen';
import { useLocalSearchParams } from 'expo-router';
import {
  paletteTealDarkContrast,
  paletteTealDark,
  paletteBlack,
  paletteTealLight
} from '@/constants/Colors'

export default function Index() {
  const params = useLocalSearchParams();
  return (
    <View>
      <VideoScreen style={styles.screen} title={params.title} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.category}>{params.category}</Text>
        <Text style={styles.description}>{params.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%'
  },
  contentContainer: {
    padding: 10,
    paddingHorizontal: 25,
    paddingTop: 25
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: paletteBlack
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    color: paletteTealDark
  },
  description: {
    fontSize: 16,
    paddingTop: 20
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});