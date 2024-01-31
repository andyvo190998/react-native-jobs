import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { Video } from 'expo-av';
// import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  // videoContainer: {
  //   flex: 1,
  //   backgroundColor: 'yellow',
  //   height: '100%',
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start',
  // },
  video: {
    flex: 0.5,
    // height: '150%',
    // width: 200,
    alignSelf: 'stretch',
  },
  control: {
    flex: 1.5,
    // height: '150%',
    // width: 200,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TrainingScreen = ({ navigation, route }) => {
  const trainingDuration = route.params.id;
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      {/* <View style={styles.videoContainer}> */}
      <Video
        ref={video}
        style={styles.video}
        source={require('../../assets/videos/video1.mp4')}
        useNativeControls
        resizeMode="cover"
        isLooping
        shouldPlay
        // onPlaybackStatusUpdate={setStatus}
      />
      {/* </View> */}
      <View style={styles.control} className="h-full">
        <View className="border border-blue-500 h-32 w-32 flex justify-center items-center rounded-full">
          <Text>Duration {trainingDuration} min</Text>
        </View>
      </View>
    </View>
  );
};

export default TrainingScreen;
