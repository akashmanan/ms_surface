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
  ImagePicker,
} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import styles from './styles';

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

  let data = [{title: 'Item 1'}, {title: 'Item 2'}];

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

  const getImage = image => {
    setState(prev => ({
      ...prev,
      image: [...state.image, image?.assets[0]?.uri],
    }));
  };

  const selectImage = type => {
    ImagePicker({type, success: getImage});
  };

  return (
    <>
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
            data={data}
            dropdownTitle={'Property'}
            defaultText={state.defaultTextProperty}
            expanded={state.expandedProperty}
            setExpandValue={setExpandPropertyValue}
            style={styles.inputContainer(width, height)}
            onPressListItem={onPressProperty}
            bottomText={"Didn't find what you were looking for?"}
          />

          <Dropdown
            data={data}
            dropdownTitle={'Floorplan'}
            defaultText={state.defaultTextFloorplan}
            expanded={state.expandedFloorplan}
            setExpandValue={setExpandFloorplanValue}
            onPressListItem={onPressFloorplan}
            style={styles.inputContainer(width, height)}
          />
          <Input
            placeholder="Customer"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
            inputTitle={'Customer'}
            bottomText={"Didn't find what you were looking for?"}
          />
          <Input
            placeholder="Customer"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
            inputTitle={'Customer'}
            bottomText={"Didn't find what you were looking for?"}
          />
          <Input
            placeholder="Customer"
            containerStyle={styles.inputContainer(width, height)}
            style={styles.inputBox(width, height)}
            inputTitle={'Customer'}
            bottomText={"Didn't find what you were looking for?"}
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
              <TouchableOpacity onPress={() => selectImage('camera')}>
                <Feather
                  style={styles.itemIcon}
                  color={theme.colors.bottomText}
                  name="camera"
                  size={vs(30, height)}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectImage('gallery')}>
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
