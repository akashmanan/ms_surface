import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Image, Text, Button} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedTab} from '../../redux/slice/topTabBar';

const RenderTabItem = ({title, onPress}) => {
  const {selectedTab} = useSelector(state => state.topTabBar);

  return (
    <Button onPress={onPress}>
      <Text
        fontSize={18}
        fontFamily={theme.fonts.interRegular}
        fontColor={
          selectedTab === title
            ? theme.colors.primaryButton
            : theme.colors.tabBarItem
        }
        textDecorationLine={selectedTab === title ? 'underline' : 'none'}>
        {title}
      </Text>
    </Button>
  );
};

const TopTabBar = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressInspection = () => {
    navigation.navigate('InspectionListing');
    dispatch(setSelectedTab('Inspections'));
  };
  const onPressQuoteMatrix = () => {
    navigation.navigate('CreateQuote');
    dispatch(setSelectedTab('Quote Matrix'));
  };
  const onPressRenovation = () => {
    navigation.navigate('RenovationSetup');
    dispatch(setSelectedTab('Renovation Setup'));
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Box style={styles.container(width, height)}>
      <Box style={styles.subContainers(width, height, '22%')}>
        <Button onPress={goBack}>
          <Ionicons name={'chevron-back-circle-outline'} />
        </Button>
        <Image
          type={'offline'}
          path={require('@assets/images/facilgoIcon.png')}
          style={styles.image(width, height)}
        />
      </Box>
      <Box style={styles.tabContainer(width, height, '55%')}>
        <RenderTabItem title={'Inspections'} onPress={onPressInspection} />
        <RenderTabItem title={'Quote Matrix'} onPress={onPressQuoteMatrix} />
        <RenderTabItem title={'Renovation Setup'} onPress={onPressRenovation} />
      </Box>
      <Box style={styles.subContainers(width, height, '23%')}>
        <Text
          fontSize={18}
          fontFamily={theme.fonts.interRegular}
          fontColor={theme.colors.tabBarItem}>
          Welcome back, Aaron!
        </Text>
        <Box style={styles.imgArrowContainer(width, height)}>
          <Image
            variant={'background'}
            type={'offline'}
            path={require('@assets/images/profileBg.png')}
            style={styles.profileBg(width, height)}>
            <Text fontSize={16} fontWeight={'bold'}>
              {'A'}
            </Text>
          </Image>
          <Ionicons
            name={'caret-down'}
            color={theme.colors.dropdownSelectedText}
            size={ms(18, height)}
          />
        </Box>
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
    paddingRight: '2%',
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
    alignItems: 'center',
  }),
  tabContainer: (w, h, width) => ({
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: s(57, w),
  }),
  image: (w, h) => ({
    width: s(150, w),
    height: vs(30, h),
  }),
  profileBg: (w, h) => ({
    width: ms(30, w),
    height: ms(30, w),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  imgArrowContainer: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(10, w),
  }),
});
