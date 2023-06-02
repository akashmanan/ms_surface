import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {Box, Button} from '@components';
import {theme, s, vs, ms} from '@utils';

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

const styles = StyleSheet.create({
  header: (w, h) => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(30, h),
  }),
  heading: w => ({
    fontSize: ms(31, w),
    fontFamily: theme.fonts.latoBold,
  }),
  buttonStyle: (w, h) => ({
    width: s(179, w),
    height: vs(50, h),
    paddingHorizontal: s(20, w),
  }),
  buttonTextStyle: (w, h) => ({
    fontSize: ms(16, w),
  }),
});
