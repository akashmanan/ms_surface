import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {Box, Button} from '@components';
import styles from './styles';

const ScreenName = ({screenTitle, buttonTitle, onPress}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={styles.header(width, height)}>
      <Text style={styles.heading(width, height)}>{screenTitle}</Text>
      {buttonTitle && onPress && (
        <Button
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

export {ScreenName};
