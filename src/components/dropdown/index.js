import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Buttons} from '@components';
import {theme, s, vs, ms} from '@utils';

const RenderDropdownOption = ({
  title,
  onPressListItem,
  buttonStyle,
  textStyle,
}) => {
  return (
    <Buttons
      title={title}
      onPress={() => onPressListItem(title)}
      buttonStyle={buttonStyle}
      buttonTextStyle={textStyle}
    />
  );
};

const Dropdown = ({
  data,
  expanded,
  setExpandValue,
  style,
  dropdownTitle,
  bottomText,
  defaultText,
  onPressListItem,
}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={style}>
      <Text style={styles.dropdownTitle(width, height)}>{dropdownTitle}</Text>
      <Box>
        <TouchableOpacity
          style={styles.container(width, height, style?.height)}
          onPress={setExpandValue}>
          <Text style={styles.selectedText(width, height)}>{defaultText}</Text>
          <Ionicons
            name={'caret-down'}
            color={theme.colors.dropdownSelectedText}
            size={ms(18, height)}
          />
        </TouchableOpacity>
        {expanded && (
          <Box style={styles.dropdownList(width, height, style?.height)}>
            {data?.map(item => (
              <RenderDropdownOption
                title={item?.title}
                onPressListItem={onPressListItem}
                buttonStyle={styles.dropdownListButon}
                textStyle={styles.dropdownListText(width, height)}
              />
            ))}
          </Box>
        )}
      </Box>
      <Text style={styles.bottomText(width, height)}>{bottomText}</Text>
    </Box>
  );
};

export {Dropdown};

const styles = StyleSheet.create({
  container: (w, h, style = 48) => ({
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
    zIndex: 1,
  }),
  selectedText: (w, h) => ({
    fontSize: ms(14, w),
    fontFamily: theme.fonts.latoRegular,
    color: theme.colors.dropdownSelectedText,
  }),
  dropdownList: (w, h, style = 48) => ({
    position: 'absolute',
    top: vs(style, h),
    width: '100%',
    rowGap: 18,
    elevation: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: theme.colors.dropdownBorder,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    paddingVertical: vs(18, h),
    paddingHorizontal: s(21, w),
    backgroundColor: theme.colors.white,
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
  dropdownTitle: (w, h) => ({
    fontSize: ms(14, w),
    paddingBottom: vs(14, h),
    color: theme.colors.labelText,
  }),
  bottomText: (w, h) => ({
    paddingTop: vs(9, h),
    fontSize: ms(12, w),
    fontStyle: 'italic',
    color: '#858585',
    zIndex: -1,
    fontFamily: theme.fonts.latoRegular,
  }),
});
