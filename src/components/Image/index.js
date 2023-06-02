import React from 'react';
import {Image as ImageComponent, StyleSheet} from 'react-native';

const Image = ({path, type, style, resizeMode, canGoBack}) => {
  let newPath = type === 'offline' ? path : {uri: path};
  return (
    <ImageComponent
      source={newPath}
      style={[styles.imgStyle, style]}
      resizeMode={resizeMode}
    />
  );
};

export {Image};

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
});
