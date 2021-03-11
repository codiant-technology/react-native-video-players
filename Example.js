import VideoPlayers from 'react-native-video-players';
onst styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const url = ['https://your-url.com/video.mp4']

class VideoExample extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <VideoPlayers
        source={{
          uri: url,
        }}
        title={'Video title'}
        paused={paused}
        resizeMode={'contain'}
        playInBackground={true}
        playWhenInactive={true}
        controlTimeout={2000}
      />
      </View>
    )
  }
}

AppRegistry.registerComponent('VideoExample', () => VideoExample)