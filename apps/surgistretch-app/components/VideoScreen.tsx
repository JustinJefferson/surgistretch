import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import { getVideoMP4 } from '@/services/assetService';

export default function VideoScreen({ title }) {
  const videoHeight = Dimensions.get('window').width * 0.57;
  const videoSource = getVideoMP4(title);
  const player = useVideoPlayer({ assetId: videoSource }, player => {
    player.loop = false;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={{ width: '100%', height: videoHeight}}
        player={player} allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsContainer: {
    padding: 10,
  },
});
