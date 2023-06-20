import React, {useState} from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';
import {
  Box,
  Text,
  Modal,
  Choice,
  Camera,
  TabView,
  LineItem,
  TopTabBar,
  BottomBar,
  NativeButton,
} from '@components';
import {theme} from '@theme';
import {
  InspectionDetailsHeader,
  tabData,
  lineItems,
  RenderSearchTabBar,
} from './widgets';
import commonStyles from '../commonStyles';
import styles from './styles';

const InspectionDetails = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    defaultStatus: '',
    activeTabIndex: 0,
    activeTabName: 'Electrical',
    showSideBar: false,
    image: [],
  });

  const openCamera = async () => {
    setState(prev => ({...prev, popup: true}));
  };

  const onCloseCamera = () => {
    setState(prev => ({...prev, popup: false}));
  };

  const setDefaultStatus = status => {
    setState(prev => ({...prev, defaultStatus: status}));
  };

  const handleTabPress = (tabIndex, tabName) => {
    setState(prev => ({
      ...prev,
      activeTabIndex: tabIndex,
      activeTabName: tabName,
    }));
  };

  const handleSideBar = () => {
    setState(prev => ({...prev, showSideBar: !state.lineItems}));
  };

  const onPressClose = () => {
    setState(prev => ({...prev, showSideBar: false}));
  };

  const takePicture = async camera => {
    check(PERMISSIONS.WINDOWS.WEBCAM)
      .then(async result => {
        if (camera.current) {
          const options = {quality: 0.5, base64: true};
          const data = await camera.current.takePictureAsync(options);
          setState(prev => ({...prev, image: [...state.image, data.uri]}));
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <TopTabBar />
      <Modal isVisible={state.popup} onClose={onCloseCamera}>
        {state.popup && (
          <Camera
            takePicture={cameraRef => {
              takePicture(cameraRef);
            }}
            style={styles.camera(width, height)}
            onCloseCamera={onCloseCamera}
          />
        )}
      </Modal>
      <ScrollView
        style={commonStyles.container(width, height)}
        contentContainerStyle={styles.container}>
        <InspectionDetailsHeader />
        <TabView
          style={styles.tabView(width, height)}
          data={tabData}
          activeTab={state.activeTabIndex}
          handleTabPress={(index, name) => handleTabPress(index, name)}
        />
        <Box style={styles.tabHeader(width, height)}>
          <Text fontColor={theme.colors.buttonBorder}>
            {state?.activeTabName}
          </Text>
          <Box style={styles.statusContainer(width, height)}>
            <Text fontColor={theme.colors.cancelButtonText} fontSize={18}>
              Set Default Status
            </Text>
            <Choice
              bordered
              title={'Yes'}
              variant={'radio'}
              selectedColor={theme.colors.checkBoxBorderFill}
              setCheckboxValue={() => setDefaultStatus('Yes')}
              isChecked={state.defaultStatus === 'Yes' ? true : false}
            />
            <Choice
              bordered
              title={'No'}
              variant={'radio'}
              selectedColor={theme.colors.checkBoxBorderFill}
              setCheckboxValue={() => setDefaultStatus('No')}
              isChecked={state.defaultStatus === 'No' ? true : false}
            />
          </Box>
        </Box>
        {tabData?.[state.activeTabIndex]?.data?.map(
          ({title, comment, measurement}) => (
            <LineItem
              title={title}
              comment={comment}
              measurement={measurement}
              onPressCamera={openCamera}
              onPressSearch={handleSideBar}
            />
          ),
        )}
      </ScrollView>
      <BottomBar style={styles.bottomBar(width, height)}>
        <NativeButton
          title={'Complete'}
          variant={'primary'}
          onPress={() => {}}
          disabled={false}
          buttonStyle={styles.button(width, height, theme.colors.primaryButton)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
      </BottomBar>
      {state.showSideBar ? (
        <RenderSearchTabBar
          width={width}
          height={height}
          lineItems={lineItems}
          onPressClose={onPressClose}
        />
      ) : null}
    </>
  );
};

export {InspectionDetails};
