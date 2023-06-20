import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Heading, Box, Text} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {getStatusStyle} from '@utils/utils';
import {theme} from '@theme';

const InspectionDetailsHeader = () => {
  const {width, height} = useWindowDimensions();
  let status = 'InProgress';
  let statusStyle = getStatusStyle(status);

  return (
    <Box>
      <Heading heading={'Inspection Details'} />
      <Box style={styles.headerContainer}>
        <Box style={styles.titleContainer}>
          <Text fontFamily={theme.fonts.latoRegular} fontSize={20}>
            Sample Tree Apts _101_
          </Text>
          <Text fontFamily={theme.fonts.latoRegular} fontSize={20}>
            Sample Tree Reno List_20230614
          </Text>
        </Box>
        <Box style={styles.statusContainer}>
          <Text fontColor={theme.colors.primaryButton} fontSize={14}>
            50% completed
          </Text>
          <Box style={styles.progressBar(width, height)}>
            <Box style={styles.progressBarValue} />
          </Box>
          <Box
            style={styles.status(width, height, statusStyle.backgroundColor)}>
            <Text
              fontColor={statusStyle.color}
              textAlign={'center'}
              fontSize={12}
              style={styles.statusText(width)}>
              {'In progress'}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box style={styles.locationContainer}>
        <Ionicons
          name="ios-location-outline"
          color={theme.colors.locationIcon}
          size={ms(20, width)}
        />
        <Text
          fontSize={17}
          fontFamily={theme.fonts.latoRegular}
          fontColor={theme.colors.locationText}>
          1000 SAMPLE WAY
        </Text>
      </Box>
    </Box>
  );
};

export {InspectionDetailsHeader};

const styles = StyleSheet.create({
  headerContainer: {flexDirection: 'row'},
  progressBar: (w, h) => ({
    width: s(170, w),
    height: vs(10, h),
    borderRadius: 20,
    backgroundColor: theme.colors.progressBar,
  }),
  titleContainer: {width: '85%'},
  statusContainer: {
    width: '15%',
    rowGap: 8,
  },

  progressBarValue: {
    backgroundColor: theme.colors.primaryButton,
    width: '50%',
    height: '100%',
    borderRadius: 20,
  },
  status: (w, h, bg) => ({
    width: '64%',
    height: vs(25, h),
    borderRadius: ms(16, w),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bg,
  }),
  statusText: w => ({paddingHorizontal: s(10, w)}),
  locationContainer: {flexDirection: 'row'},
});
