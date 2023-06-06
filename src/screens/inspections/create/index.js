import React, {useEffect, useState} from 'react';
import {
  Platform,
  Keyboard,
  StyleSheet,
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
  Choice,
  Dropdown,
  Heading,
  ImagePicker,
  BottomBar,
} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme'

const CreateInspection = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    expandedProperty: false,
    expandedUnit: false,
    selectedRadio: '',
    isChecked: false,
    image: [],
    type: null,
    isKeyboardOpened: false,
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

  const setExpandUnitValue = () => {
    setState(prev => ({...prev, expandedUnit: !state.expandedUnit}));
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
        <Heading screenTitle={'Create Inspection'} />
        <Box style={styles.inspectionFormContainer}>
          <Box style={styles.inspectionInputRow}>
            <Input
              placeholder="Customer"
              containerStyle={styles.inputContainer(width, height)}
              style={styles.inputBox(width, height)}
              inputTitle={'Customer'}
              bottomText={"Didn't find what you were looking for?"}
            />
            <Dropdown
              expanded={state.expandedProperty}
              setExpandValue={setExpandPropertyValue}
              style={styles.inputContainer(width, height)}
              defaultText={'Property'}
              dropdownTitle={'Property'}
              bottomText={"Didn't find what you were looking for?"}
            />
          </Box>
          <Box style={styles.inspectionInputRow}>
            <Dropdown
              expanded={state.expandedUnit}
              setExpandValue={setExpandUnitValue}
              dropdownTitle={'Floorplan'}
              defaultText={'Floorplan'}
              style={styles.inputContainer(width, height)}
            />
            <Input
              placeholder="Customer"
              containerStyle={styles.inputContainer(width, height)}
              style={styles.inputBox(width, height)}
              inputTitle={'Customer'}
              bottomText={"Didn't find what you were looking for?"}
            />
          </Box>
          <Box style={styles.inspectionInputRow}>
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
              <ScrollView style={styles.imagePickerImgContainer} horizontal>
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
          <Choice
            variant={'checkbox'}
            title={'Check this value!'}
            isChecked={state.isChecked}
            setCheckboxValue={setCheckboxValue}
          />
        </Box>
      </ScrollView>
      {!state.isKeyboardOpened && (
        <BottomBar primaryButton={'Create'} cancelButton={'Cancel'} />
      )}
    </>
  );
};

export {CreateInspection};

const styles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    backgroundColor: theme.colors.white,
  }),
  contentContainer: (w, h) => ({
    paddingHorizontal: Platform.OS === 'windows' ? s(64, w) : s(20, w),
  }),
  inspectionFormContainer: {
    rowGap: 20,
  },
  inspectionInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  inputContainer: (w, h) => ({
    width: Platform.OS === 'windows' ? '44%' : '100%',
  }),
  inputBox: (w, h) => ({
    width: '100%',
    fontSize: ms(14, w),
    borderWidth: 1,
    height: vs(48, h),
    color: theme.colors.black,
    borderColor: theme.colors.dropdownBorder,
  }),
  radioButtonContainer: (w, h) => ({
    width: Platform.OS === 'windows' ? '44%' : '100%',
    flexDirection: 'row',
    columnGap: s(10, h),
  }),
  imagePickerContainer: (w, h) => ({
    width: '44%',
    marginTop: vs(20, h),
  }),
  imagePickerIconContainer: {
    justifyContent: 'flex-start',
    columnGap: 20,
    flexDirection: 'row',
  },
  imagePickerImgContainer: {
    marginTop: 10,
  },
  imagePickerImg: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginVertical: 10,
  },
});
