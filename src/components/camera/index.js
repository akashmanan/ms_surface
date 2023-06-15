import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Box} from '@components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const Camera = ({style, takePicture}) => {
  const {width, height} = useWindowDimensions();
  const camera = React.useRef(null);

  const androidPermission = {
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  const andoridAudioPermission = {
    title: 'Permission to use audio recording',
    message: 'We need your permission to use your audio',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          camera.current = ref;
        }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={androidPermission}
        androidRecordAudioPermissionOptions={andoridAudioPermission}
      />
      <TouchableOpacity
        onPress={() => {
          takePicture(camera);
        }}>
        <Box style={styles.captureButton(width, height)}>
          <FontAwesome
            name="circle"
            color={theme.colors.white}
            size={ms(60, width)}
            style={styles.innerCaptureButton(width)}
          />
        </Box>
      </TouchableOpacity>
    </View>
  );
};

export {Camera};

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  captureButton: (w, h) => ({
    borderColor: theme.colors.white,
    borderWidth: s(3, w),
    borderRadius: 100,
    position: 'absolute',
    top: vs(-60, w),
    alignSelf: 'center',
  }),
  innerCaptureButton: w => ({
    padding: ms(4, w),
  }),
  camera: {
    width: '100%',
    height: '100%',
  },
});
