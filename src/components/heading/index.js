import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {Box, Buttons} from '@components';
import styles from './styles';

const Heading = ({screenTitle, buttonTitle, onPress}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={styles.header(width, height)}>
      <Text style={styles.heading(width, height)}>{screenTitle}</Text>
      {buttonTitle && onPress && (
        <Buttons
          variant={'primary'}
          title={buttonTitle}
          buttonStyle={styles.buttonStyle(width, height)}
          buttonTextStyle={styles.buttonTextStyle(width, height)}
          onPress={onPress}
        />
      )}
    </Box>
  );
};

export {Heading};
