import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Box, Text, Input, Buttons, Button, Choice} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const InspectionItem = ({onPressSearch}) => {
  const {width, height} = useWindowDimensions();
  const [status, setStatus] = useState();

  const setDefaultStatus = status => {
    setStatus(status);
  };

  return (
    <Box style={styles.contaienr(width, height)}>
      <Box
        style={[
          styles.subContainer(width, height),
          {justifyContent: 'space-between'},
        ]}>
        <Box style={styles.titleContainer(width, height)}>
          <Text fontSize={20} fontFamily={theme.fonts.latoBold}>
            AIR GAP REPLACEMENT CAP BRUSHED NICKEL
          </Text>
          <Octicons
            name={'pencil'}
            color={theme.colors.primaryButton}
            size={ms(13, width)}
          />
        </Box>
        <Box style={styles.choiceContainer(width, height)}>
          <Choice
            bordered
            variant={'radio'}
            title={'Yes'}
            isChecked={status === 'Yes' ? true : false}
            setCheckboxValue={() => setDefaultStatus('Yes')}
          />
          <Choice
            bordered
            variant={'radio'}
            title={'No'}
            isChecked={status === 'No' ? true : false}
            setCheckboxValue={() => setDefaultStatus('No')}
          />
        </Box>
      </Box>
      <Box style={styles.subContainer(width, height)}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          color={theme.colors.tabBarItem}
          size={ms(22, width)}
        />
        <Text fontSize={18} fontColor={theme.colors.comment}>
          Bronze Colour
        </Text>
      </Box>
      <Box style={[styles.subContainer(width, height)]}>
        <MaterialCommunityIcons
          name="message-processing-outline"
          color={theme.colors.tabBarItem}
          size={ms(22, width)}
        />
        <Input style={styles.input(width, height)} />
        <Button>
          <Text fontColor={theme.colors.primaryButton}>Measure</Text>
        </Button>
        <Button onPress={() => {}}>
          <Feather
            name="info"
            color={theme.colors.black}
            size={ms(16, width)}
          />
        </Button>
      </Box>
      <Box
        style={[
          styles.subContainer(width, height),
          {justifyContent: 'space-between'},
        ]}>
        <Box style={styles.titleContainer(width, height)}>
          <Buttons
            variant={'cancel'}
            title={'Search'}
            buttonStyle={styles.buttonStyle(width, height)}
            buttonTextStyle={styles.buttonTextStyle(width, height)}
            onPress={onPressSearch}
          />
          <Button onPress={() => {}}>
            <Feather
              name="filter"
              color={theme.colors.dropdownSelectedText}
              size={ms(16, width)}
            />
          </Button>
        </Box>
        <Box style={styles.titleContainer(width, height)}>
          <Button onPress={() => {}}>
            <Feather
              name="camera"
              color={theme.colors.dropdownSelectedText}
              size={ms(16, width)}
            />
          </Button>
          <Button onPress={() => {}}>
            <Entypo
              name="dots-three-vertical"
              color={theme.colors.dropdownSelectedText}
              size={ms(16, width)}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export {InspectionItem};

const styles = StyleSheet.create({
  contaienr: (w, h) => ({
    rowGap: vs(16, h),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: theme.colors.separator,
    paddingBottom: vs(23, h),
    paddingTop: vs(26, h),
  }),
  subContainer: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(14, w),
    rowGap: vs(40, h),
  }),
  buttonStyle: (w, h) => ({
    width: s(100, w),
    height: vs(46, h),
    backgroundColor: theme.colors.searchButton,
  }),
  buttonTextStyle: () => ({color: theme.colors.buttonBorder}),
  titleContainer: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(10, w),
  }),
  choiceContainer: (w, h) => ({
    flexDirection: 'row',
    columnGap: s(10, w),
  }),
  input: (w, h) => ({width: s(294, w), height: vs(40, h)}),
});
