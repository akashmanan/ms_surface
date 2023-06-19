import React, {useState} from 'react';
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Box,
  Text,
  Choice,
  Buttons,
  SideBar,
  TabView,
  BottomBar,
  InspectionItem,
} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import InspectionDetailsHeader from './widgets/header';
import commonStyles from '../commonStyles';

const tabData = [
  {index: 0, title: 'Electrical'},
  {index: 1, title: 'Doors'},
  {index: 2, title: 'Blinds'},
  {index: 3, title: 'Plumbing'},
  {index: 4, title: 'Appliances'},
];

const InspectionDetails = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    defaultStatus: '',
    activeTabIndex: 0,
    showSideBar: false,
  });

  const setDefaultStatus = status => {
    setState(prev => ({...prev, defaultStatus: status}));
  };

  const handleTabPress = tabIndex => {
    setState(prev => ({...prev, activeTabIndex: tabIndex}));
  };

  const handleSideBar = () => {
    setState(prev => ({...prev, showSideBar: !state.sidebarItems}));
  };

  const onPressClose = () => {
    setState(prev => ({...prev, showSideBar: false}));
  };

  const sidebarItems = [
    {
      title: `WHIRPOOL OEM ICEMAKER
REPLACES ECKMFEZ2`,
      sku: '#4903084',
      type: 'EA',
      price: '$104.99',
    },
    {
      title: `WHIRPOOL OEM ICEMAKER
REPLACES ECKMFEZ2`,
      sku: '#4903083',
      type: 'EA',
      price: '$104.99',
    },
    {
      title: `WHIRPOOL OEM ICEMAKER
REPLACES ECKMFEZ2`,
      sku: '#3785960',
      type: 'EA',
      price: '$87.39',
    },
  ];

  return (
    <>
      <ScrollView
        style={commonStyles.container(width, height)}
        contentContainerStyle={styles.container}>
        <InspectionDetailsHeader />
        <TabView
          style={styles.tabView(width, height)}
          data={tabData}
          activeTab={state.activeTabIndex}
          handleTabPress={data => handleTabPress(data)}
        />
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

        <InspectionItem onPressSearch={handleSideBar} />
        <InspectionItem onPressSearch={handleSideBar} />
        <InspectionItem onPressSearch={handleSideBar} />
      </ScrollView>

      <BottomBar style={styles.bottomBar(width, height)}>
        <Buttons
          title={'Complete'}
          variant={'primary'}
          onPress={() => {}}
          disabled={false}
          buttonStyle={styles.button(width, height, theme.colors.primaryButton)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
      </BottomBar>
      {state.showSideBar ? (
        <SideBar
          onPressClose={onPressClose}
          items={sidebarItems}
          onItemSelected={() => {}}
          title={`Results for`}
          subTitle={`WHIRPOOL OEM ICEMAKER REPLACES ECKMFEZ2 Silver 2' 11.75'' x 6' 7.5`}
        />
      ) : null}
    </>
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
  tabView: (w, h) => ({marginTop: vs(40, h), marginLeft: '1%'}),
  bottomBar: (w, h) => ({justifyContent: 'flex-end', columnGap: s(20, w)}),
  button: (w, h) => ({
    width: s(160, w),
    height: vs(40, h),
  }),
  buttonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
});
