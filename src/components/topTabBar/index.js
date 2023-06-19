import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {Box, Image, Text} from '@components';
import {theme} from '@theme';
import {s, vs, ms} from '@thirdParty/screenSize';

const TopTabBar = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={styles.container(width, height)}>
      <Box style={styles.subContainers(width, height, '22%')}>
        <Image
          type={'offline'}
          path={require('@assets/images/facilgoIcon.png')}
          style={styles.image(width, height)}
        />
      </Box>
      <Box style={styles.subContainers(width, height, '50%')}>
        <Text style={styles.text(width, height)}>Inspections</Text>
        <Text style={styles.text(width, height)}>Quote Matrix</Text>
        <Text style={styles.text(width, height)}>Renovation setup</Text>
      </Box>
      <Box style={styles.subContainers(width, height, '25%')}>
        <Text style={styles.text(width, height)}>Welcome back, Aaron!</Text>
      </Box>
    </Box>
  );
};

export {TopTabBar};

const styles = StyleSheet.create({
  container: (w, h) => ({
    width: '100%',
    height: vs(70, h),
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.bottomBarBorder,
  }),
  subContainers: (w, h, width) => ({
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }),
  image: (w, h) => ({
    width: s(150, w),
    height: vs(30, h),
  }),
  text: (w, h) => ({
    color: theme.colors.tabBarItem,
  }),
});
