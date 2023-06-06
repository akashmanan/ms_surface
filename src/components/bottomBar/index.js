import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import styles from './styles';

const BottomBar = ({style, children}) => {
  const {width, height} = useWindowDimensions();
  return <View style={styles.container(width, height, style)}>{children}</View>;
};

export {BottomBar};
