import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Box, Text, Button} from '@components';
import {s, vs} from '@thirdParty/screenSize';
import {theme} from '@theme';

const RenderTabItem = ({
  index,
  title,
  activeTab,
  handleTabPress,
  width,
  height,
}) => {
  const style = {
    borderColor: activeTab === index ? theme.colors.primaryButton : 'none',
    borderBottomWidth: activeTab === index ? s(3, width) : 0,
  };
  return (
    <Button onPress={() => handleTabPress(index, title)}>
      <Box style={styles.tabItem(width, height, style)}>
        <Text fontSize={18} fontColor={theme.colors.primaryButton}>
          {title}
        </Text>
      </Box>
    </Button>
  );
};

const TabView = ({data, handleTabPress, activeTab, style}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={[styles.contaienr(width, height), style]}>
      {data?.map(({index, title}) => (
        <RenderTabItem
          key={index}
          index={index}
          title={title}
          activeTab={activeTab}
          handleTabPress={(tabIndex, tabName) =>
            handleTabPress(tabIndex, tabName)
          }
          width={width}
          height={height}
        />
      ))}
    </Box>
  );
};

export {TabView};

const styles = StyleSheet.create({
  contaienr: (w, h) => ({flexDirection: 'row', columnGap: s(80, w)}),
  tabItem: (w, h, style) => ({
    borderWidth: 0,
    paddingBottom: vs(8, h),
    ...style,
  }),
});
