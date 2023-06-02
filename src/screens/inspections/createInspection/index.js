import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Box, Dropdown, Input, ScreenName, Checkbox} from '@components';
import {s, vs, ms} from '@utils';

const CreateInspection = () => {
  const {width, height} = useWindowDimensions();
  const [state, setState] = useState({
    expanded: false,
    image: null,
  });

  const setExpandValue = () => {
    setState(prev => ({...prev, expanded: !state.expanded}));
  };

  const getImage = image => {
    setState(prev => ({...prev, image: image?.assets[0]}));
  };

  const selectImage = () => {
    ImagePicker({type: 'camera', success: getImage});
  };

  return (
    <Box style={styles.container(width, height)}>
      <ScreenName screenTitle={' Create Inspection'} />
      <Box style={styles.inspectionFormContainer}>
        <Box style={styles.inspectionInputRow}>
          <Input
            placeholder="Enter Inspection Name"
            containerStyle={styles.inputContainer(width, height)}
          />
          <Dropdown
            expanded={state.expanded}
            setExpandValue={setExpandValue}
            style={styles.inputContainer(width, height)}
          />
        </Box>
        <Checkbox variant={'radio'} title={'Select First'} />
        <Checkbox variant={'radio'} title={'Select Second'} />
        <Checkbox variant={'checkbox'} title={'Check this value!'} />
      </Box>
    </Box>
  );
};

export {CreateInspection};

const styles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    paddingHorizontal: s(64, w),
    paddingTop: vs(39, h),
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
    width: '40%',
    height: vs(48, h),
  }),
});
