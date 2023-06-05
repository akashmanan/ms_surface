import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = ({color, size}) => {
  return <ActivityIndicator color={color} size={size} />;
};

export {Loader};
