## React Native Video Player

This library is designed to support custome video player controls in React Native for both iOS and Android in both state forground and background.

<p align="left">
 <img  width="150" height="300" src="https://github.com/codiant-technology/react-native-video-players/blob/main/assets/IMG_03.png">
  <img  width="150" height="300" src="https://github.com/codiant-technology/react-native-video-players/blob/main/assets/IMG_04.png">
   <img  width="150" height="300" src="https://github.com/codiant-technology/react-native-video-players/blob/main/assets/IMG_01.PNG">
   <br/>
   <img  width="430" height="200" src="https://github.com/codiant-technology/react-native-video-players/blob/main/assets/IMG_02.png">
</p>


## Features

* Fullscreen support for Android and iOS.
* Having option to navigate from media-player screen.
* Support share media file url.
* Having functionality to do favourite/unfavourite on any media.
* Support Portrait and Landscape mode.
* Set Custom video quality. 
* Having custom controls on media like suffel, auto-loop, auto-play.
* Support forward/ backward by buttons and also seek-bar drag.
* Having next/back, play/pause buttons on media player.
* Background video/audio play support with all custom controls.
* Music controls on notification bar when app is inactive.


### Installation

`$ yarn add react-native-video-players`

Or

`$ npm install react-native-video-players`

  
## Usage
```javascript
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

```



## Install

```shell

npm i react-native-video --save
npm i react-native-music-control --save
npm i react-native-orientation --save

```

Then follow the instructions for your platform to link react-native-video into your project:

### iOS installation
<details>
  <summary>iOS details</summary>

#### Standard Method

**React Native 0.60 and above**

Run `npx pod-install`. Linking is not required in React Native 0.60 and above.

**React Native 0.59 and below**

Run `react-native link react-native-video` to link the react-native-video library.

#### Using CocoaPods (required to enable caching)

Setup your Podfile like it is described in the [react-native documentation](https://facebook.github.io/react-native/docs/integration-with-existing-apps#configuring-cocoapods-dependencies). 

Depending on your requirements you have to choose between the two possible subpodspecs:

Video only:

```diff
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
+  `pod 'react-native-video', :path => '../node_modules/react-native-video/react-native-video.podspec'`
end
```

Video with caching ([more info](docs/caching.md)):

```diff
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
+  `pod 'react-native-video/VideoCaching', :path => '../node_modules/react-native-video/react-native-video.podspec'`
end
```
</details>


### Android installation
<details>
  <summary>Android details</summary>
 
Linking is not required in React Native 0.60 and above.
If your project is using React Native < 0.60, run `react-native link react-native-video` to link the react-native-video library.

Or if you have trouble, make the following additions to the given files manually:

#### **android/settings.gradle**

The newer ExoPlayer library will work for most people.

```gradle
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')
```

If you need to use the old Android MediaPlayer based player, use the following instead:

```gradle
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android')
```

#### **android/app/build.gradle**

From version >= 5.0.0, you have to apply these changes:

```diff
dependencies {
   ...
    compile project(':react-native-video')
+   implementation "androidx.appcompat:appcompat:1.0.0"
-   implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"

}
```

#### **android/gradle.properties**

Migrating to AndroidX (needs version >= 5.0.0):

```gradle.properties
android.useAndroidX=true
android.enableJetifier=true
```

#### **MainApplication.java**

On top, where imports are:

```java
import com.brentvatne.react.ReactVideoPackage;
```

Add the `ReactVideoPackage` class to your list of exported packages.

```java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new ReactVideoPackage()
    );
}
```
</details>


## Mandatory Steps For Background Support

### iOS 
<details>

<summary>iOS Setup</summary>

To get audio/video in IOS when app is in background


From x-code  in capabilities add background modes and enable audio mode.


Also  add  following entries to get orientation in landscape :-


Add this lines into appDelegate.m file.
```
#import "Orientation.h"

- (UIInterfaceOrientationMask)application:(UIApplication )application supportedInterfaceOrientationsForWindow:(UIWindow )window {
  return [Orientation getOrientation];
}
```
</details>

### Android
<details>
<summary>Android Setup</summary>

Add the android.permission.FOREGROUND_SERVICE permission to your AndroidManifest.xml.

```
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

```
</details>


## Props

Prop                  | Type     | Required | Default                   | Description
--------------------- | -------- | -------- | ------------------------- | -----------
url                   | string, number | Yes|                           | A URL string (or number for local) is required.
isAutoPlay            | bool     | No |     | false                     | used to manage autoPlay state.
autoPlayFunc          | bool     | No       | false                     | Autoplays the video as soon as it's loaded
loop                  | bool     | No       | false                     | Allows the video to continuously loop
title                 | string   | No       | ''                        | Adds a title of your video at the top of the player
theme                 | string   | No       | 'white'                   | Adds an optional theme colour to the players controls
hideFullScreenControl | bool     | No       | false                     | This hides the full screen control
style                 | number, object | No | {}                        | Apply styles directly to the Video player (ignored in fullscreen mode)
resizeMode            | string   | No       | 'contain'                 | Fills the whole screen at aspect ratio. contain, cover etc
isRepeat              | bool     | No       | false                     | This is to active repeat play of a single video.
playInBackground      | bool     | No       | false                     | Audio continues to play when app enters background.
playWhenInactive      | bool     | No       | false                     | [iOS] Video continues to play when control or notification center are shown.
onLoad                | function | No       | (data) => {}              | Returns data once video is loaded
onProgress            | function | No       | (progress) => {}          | Returns progress data
onEnd                 | function | No       | () => {}                  | Invoked when video finishes playing  
onError               | function | No       | (error) => {}             | Returns an error message argument
onPlay                | function | No       | (playing) => {}           | Returns a boolean during playback
error                 | boolean, object | No | true                     | Pass in an object to Alert. See https://facebook.github.io/react-native/docs/alert.html
theme                 | object   | No       | all white                 | Pass in an object to theme. (See example below to see the full list of available settings)
controlTimeout        | number   | No       | 3                         | Set the visibility of controls button and the progress bar after the video was started
isFavoriteShow        | bool     | No       | false                     | Show favorite icon on controls
favorite              | function | No       | ()=>{}                    | Invoked when favorite icon is pressed
isFavorite            | bool     | No       |                           | Pass true will mark video  as favorite
isSettingShow         | bool     | No       |                           | Required true to show setting icon.
isVideoSettingsOpen   | bool     | No       |                           | Pass state true  to open setting
onMorePress           | bool     | No       | false                     | Adds an action button at the top right of the player to perform action on isVideoSettingsOpen state
qualityArray          | array    | No       | ['320p', '480p', '720p', '180p'] | set pixel as per requied.
autoConnectionStatus  | bool     | No       | True                      | state to manage autoConnection Status 
IsAutoConnectionStatus| function |          | () => {}                  | Invoked when autoConnectionStatus is change 
boxSelected           | bool     |          |                           | state to manage selected quality option
IsQualityArray        | function | No       | (data,index) => {}        | Invoked when we select quality 
isShareShow           | bool     | No       | false                     | To show share icon on video control
share                 | function | No       | () => {}                  | Invoked when click in share button
nextMedia             | function | No       | () => {}                  | Invoked when click on nextMedia from music control
previousMedia         | function | No       | () => {}                  | Invoked when click on previousMedia music control
back                  | function | No       | () => {}                  | Invoked when click on backButton from video player control
next                  | function | No       | () => {}                  | Invoked when click on nextButton from video player control
isShuffle             | bool     | No       |                           | used to manage isShuffle state
shuffle               | function | no       |  () => {}                 | Invoked on  shffle button
backToList            | function | No       |  () => {}                 | Invoked on  back button action 
onSeekRelease         |function  | No       | () => {}                  | Invoked on onSeekRelease






