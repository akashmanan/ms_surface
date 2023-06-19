import React, {useState} from 'react';
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {Box, Text, Choice} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import InspectionDetailsHeader from './widgets/header';
import commonStyles from '../commonStyles';

const InspectionDetails = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    defaultStatus: '',
  });

  const setDefaultStatus = status => {
    setState(prev => ({...prev, defaultStatus: status}));
  };
  return (
    <ScrollView
      style={commonStyles.container(width, height)}
      contentContainerStyle={styles.container}>
      <InspectionDetailsHeader />
      <Box style={styles.tabHeader(width, height)}>
        <Text fontColor={theme.colors.buttonBorder}>Plumbing</Text>
        <Box style={styles.statusContainer(width, height)}>
          <Text fontColor={theme.colors.cancelButtonText} fontSize={18}>
            Set Default Status
          </Text>
          <Choice
            bordered
            variant={'radio'}
            title={'Yes'}
            isChecked={state.defaultStatus === 'Yes' ? true : false}
            setCheckboxValue={() => setDefaultStatus('Yes')}
          />
          <Choice
            bordered
            variant={'radio'}
            title={'No'}
            isChecked={state.defaultStatus === 'No' ? true : false}
            setCheckboxValue={() => setDefaultStatus('No')}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export {InspectionDetails};

const styles = StyleSheet.create({
  container: {paddingHorizontal: '5%'},
  tabHeader: (w, h) => ({
    width: '100%',
    height: vs(80, h),
    paddingHorizontal: '2%',
    justifyContent: 'center',
    marginTop: vs(30, h),
    backgroundColor: theme.colors.tabBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  statusContainer: (w, h) => ({
    height: vs(38, h),
    paddingHorizontal: s(20, w),
    borderRadius: ms(4, w),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(10, w),
    backgroundColor: theme.colors.defaultStatusBg,
  }),
});
