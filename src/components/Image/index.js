import React from 'react';
import {
  Image as ImageComponent,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const Image = ({variant, children, path, type, style, resizeMode}) => {
  let newPath = type === 'offline' ? path : {uri: path};

  if (variant === 'background') {
    return (
      <ImageBackground
        source={newPath}
        style={[styles.imgStyle, style]}
        resizeMode={resizeMode}>
        {children}
      </ImageBackground>
    );
  } else {
    return (
      <ImageComponent
        source={newPath}
        style={[styles.imgStyle, style]}
        resizeMode={resizeMode}
      />
    );
  }
};

export {Image};

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
