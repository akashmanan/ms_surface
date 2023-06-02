import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Button} from '@components';
import {theme, s, vs, ms} from '@utils';

const RenderDropdownOption = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={buttonStyle}
      textStyle={textStyle}
    />
  );
};

const Dropdown = ({expanded, setExpandValue, style}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={style}>
      <TouchableOpacity
        style={styles.container(width, height, style?.height)}
        onPress={setExpandValue}>
        <Text style={styles.selectedText(width, height)}>Dropdown</Text>
        <Ionicons name={'caret-down'} color={'#555555'} size={ms(18, height)} />
      </TouchableOpacity>
      {expanded && (
        <Box style={styles.dropdownList(width, height, style?.height)}>
          <RenderDropdownOption
            title={'Dropdown'}
            // onPress={ }
            buttonStyle={styles.dropdownListButon}
            textStyle={styles.dropdownListText(width, height)}
          />
          <RenderDropdownOption
            title={'Dropdown'}
            // onPress={ }
            buttonStyle={styles.dropdownListButon}
            textStyle={styles.dropdownListText(width, height)}
          />
          <RenderDropdownOption
            title={'Dropdown'}
            // onPress={ }
            buttonStyle={styles.dropdownListButon}
            textStyle={styles.dropdownListText(width, height)}
          />
        </Box>
      )}
    </Box>
  );
};

export {Dropdown};

const styles = StyleSheet.create({
  container: (w, h, style = 42) => ({
    borderWidth: 1,
    minHeight: vs(style, h),
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: s(21, w),
    paddingVertical: vs(10, h),
    borderColor: theme.colors.dropdownBorder,
    backgroundColor: theme.colors.white,
  }),
  selectedText: (w, h) => ({
    fontSize: ms(14, w),
    fontFamily: theme.fonts.latoRegular,
    color: theme.colors.dropdownSelectedText,
  }),
  dropdownList: (w, h, style = 42) => ({
    position: 'absolute',
    top: vs(style, h),
    width: '100%',
    zIndex: 999,
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    elevation: 10,
    rowGap: 18,
    paddingVertical: vs(18, h),
    paddingHorizontal: s(21, w),
  }),
  dropdownListButon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  dropdownListText: (w, h) => ({
    fontSize: ms(12, w),
    textAlign: 'left',
    color: theme.colors.dropdownText,
  }),
});
