import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Box,
  Input,
  Image,
  Buttons,
  Choice,
  Dropdown,
  BottomBar,
  Heading,
  Modal,
  Camera,
} from '@components';
import {vs} from '@thirdParty/screenSize';
import {theme} from '@theme';
import {floorplanData, propertyData} from './widgets';
import styles from './styles';
import {check, PERMISSIONS} from 'react-native-permissions';

const CreateInspection = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    image: [],
    type: null,
    isChecked: false,
    selectedRadio: '',
    isKeyboardOpened: false,
    expandedProperty: false,
    expandedFloorplan: false,
    defaultTextProperty: 'Property',
    defaultTextFloorplan: 'Floorplan',
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setState(prev => ({...prev, isKeyboardOpened: true}));
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setState(prev => ({...prev, isKeyboardOpened: false}));
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const setExpandPropertyValue = () => {
    setState(prev => ({...prev, expandedProperty: !state.expandedProperty}));
  };

  const onPressProperty = data => {
    setState(prev => ({
      ...prev,
      defaultTextProperty: data,
      expandedProperty: false,
    }));
  };

  const setExpandFloorplanValue = () => {
    setState(prev => ({
      ...prev,
      expandedFloorplan: !state.expandedFloorplan,
    }));
  };

  const onPressFloorplan = data => {
    setState(prev => ({
      ...prev,
      defaultTextFloorplan: data,
      expandedFloorplan: false,
    }));
  };

  const setRadioButtonValue = value => {
    setState(prev => ({...prev, selectedRadio: value}));
  };

  const setCheckboxValue = () => {
    setState(prev => ({...prev, isChecked: !state.isChecked}));
  };

  const openCamera = async () => {
    setState(prev => ({...prev, popup: true}));
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

  const onCloseCamera = () => {
    setState(prev => ({...prev, popup: false}));
  };

  return (
    <>
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
        style={styles.container(width, height)}
        contentContainerStyle={styles.contentContainer(width, height)}
        keyboardShouldPersistTaps={'handled'}>
        <Heading heading={'Create Inspection'} />
        <Box style={styles.inspectionFormContainer}>
          <Input
            placeholder="Customer"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
            inputTitle={'Customer'}
            bottomText={"Didn't find what you were looking for?"}
          />
          <Dropdown
            data={propertyData}
            dropdownTitle={'Property'}
            defaultText={state.defaultTextProperty}
            expanded={state.expandedProperty}
            setExpandValue={setExpandPropertyValue}
            style={styles.inputContainer(width, height)}
            onPressListItem={onPressProperty}
            bottomText={"Didn't find what you were looking for?"}
          />

          <Dropdown
            data={floorplanData}
            dropdownTitle={'Floorplan'}
            bottomText={"Didn't find what you were looking for?"}
            defaultText={state.defaultTextFloorplan}
            expanded={state.expandedFloorplan}
            setExpandValue={setExpandFloorplanValue}
            onPressListItem={onPressFloorplan}
            style={styles.inputContainer(width, height)}
          />
          <Input
            inputTitle={'Floorplan Unit Count'}
            placeholder="Floorplan Unit Count"
            keyboardType={'number-pad'}
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
          />
          <Input
            inputTitle={'List'}
            placeholder="List"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
          />
          <Input
            inputTitle={'Inspection Title'}
            placeholder="Inspection Title"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
          />

          <Box style={styles.radioButtonContainer(width, height)}>
            <Choice
              bordered
              variant={'radio'}
              title={'First'}
              isChecked={state.selectedRadio === 'First' ? true : false}
              setCheckboxValue={() => setRadioButtonValue('First')}
            />
            <Choice
              variant={'radio'}
              title={'Second'}
              isChecked={state.selectedRadio === 'Second' ? true : false}
              setCheckboxValue={() => setRadioButtonValue('Second')}
            />
          </Box>
          <Box style={styles.radioButtonContainer(width, height)}>
            <Choice
              variant={'checkbox'}
              title={'Check this value!'}
              isChecked={state.isChecked}
              setCheckboxValue={setCheckboxValue}
            />
          </Box>
          <Box style={styles.imagePickerContainer(width, height)}>
            <Box style={styles.imagePickerIconContainer}>
              <TouchableOpacity onPress={() => openCamera()}>
                <Feather
                  style={styles.itemIcon}
                  color={theme.colors.bottomText}
                  name="camera"
                  size={vs(30, height)}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openCamera()}>
                <FontAwesome
                  style={styles.itemIcon}
                  color={theme.colors.bottomText}
                  name="image"
                  size={vs(30, height)}
                />
              </TouchableOpacity>
            </Box>
            <ScrollView
              style={styles.imagePickerImgContainer(width, height)}
              horizontal>
              {state.image?.map((item, index) => {
                return (
                  <Image
                    key={index}
                    style={styles.imagePickerImg}
                    path={item}
                  />
                );
              })}
            </ScrollView>
          </Box>
        </Box>
      </ScrollView>
      {!state.isKeyboardOpened && (
        <BottomBar style={styles.bottomBar}>
          <Buttons
            title={'Cancel'}
            variant={'cancel'}
            onPress={() => {}}
            buttonStyle={styles.button(width, height)}
            buttonTextStyle={styles.buttonText(width, height)}
          />
          <Buttons
            title={'Create'}
            variant={'primary'}
            onPress={() => {}}
            buttonStyle={styles.button(width, height)}
            buttonTextStyle={styles.buttonText(width, height)}
          />
        </BottomBar>
      )}
    </>
  );
};

export {CreateInspection};
