import React from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Box, Text} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const InputIcon = ({icon, showPassword, setShowPassword}) => {
  const {width, height} = useWindowDimensions();
  let bgColor =
    icon === 'search' ? theme.colors.white : theme.colors.inputBackground;
  return (
    <TouchableOpacity
      style={styles.icon(width, height, bgColor)}
      onPress={setShowPassword}>
      {icon === 'password' ? (
        <SimpleLineIcons
          name="eye"
          size={ms(20, width)}
          color={
            showPassword ? theme.colors.primaryButton : theme.colors.eyeIcon
          }
        />
      ) : icon === 'search' ? (
        <AntDesign
          name="search1"
          size={ms(20, width)}
          color={theme.colors.dropdownSelectedText}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const Input = props => {
  const {width, height} = useWindowDimensions();
  let {
    icon,
    style,
    isError,
    bottomText,
    inputTitle,
    showPassword,
    containerStyle,
    setShowPassword,
  } = props;

  return (
    <Box style={styles.container(containerStyle)}>
      {inputTitle && (
        <Text
          fontSize={14}
          fontColor={theme.colors.labelText}
          style={styles.inputTitle(width, height)}>
          {inputTitle}
        </Text>
      )}
      <Box style={styles.inputContainer}>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.inputPlaceholder}
          style={styles.textInput(width, height, style)}
        />
        {icon && (
          <InputIcon
            icon={icon}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </Box>
      {bottomText && (
        <Text
          fontSize={12}
          fontFamily={theme.fonts.latoItalic}
          fontColor={
            isError ? theme.colors.bottomTextError : theme.colors.bottomText
          }
          style={styles.bottomText(width, height)}>
          {bottomText}
        </Text>
      )}
    </Box>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: containerStyle => ({
    zIndex: -1,
    ...containerStyle,
  }),
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: (w, h, style) => ({
    width: '100%',
    borderRadius: ms(3, w),
    minHeight: vs(45, h),
    maxHeight: vs(47, h),
    paddingVertical: vs(14, h),
    paddingHorizontal: s(12, w),
    borderWidth: 1,
    borderColor: theme.colors.dropdownBorder,
    ...style,
  }),
  icon: (w, h, bg) => ({
    width: ms(40, w),
    height: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: bg,
    right: s(4, w),
    borderRadius: ms(4),
  }),
  inputTitle: (w, h) => ({
    paddingBottom: vs(14, h),
  }),
  bottomText: (w, h) => ({
    paddingTop: vs(9, h),
  }),
});
