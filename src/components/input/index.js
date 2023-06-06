import React from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Text,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Box} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme'

const EyeIcon = ({showPassword, setShowPassword}) => {
  const {width, height} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={styles.icon(width, height)}
      onPress={setShowPassword}>
      <SimpleLineIcons
        name="eye"
        size={ms(20, width)}
        color={showPassword ? theme.colors.primaryButton : theme.colors.eyeIcon}
      />
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
    bottomTextStyle,
    setShowPassword,
  } = props;

  return (
    <Box style={styles.container(containerStyle)}>
      {inputTitle && (
        <Text style={styles.inputTitle(width, height)}>{inputTitle}</Text>
      )}
      <Box style={styles.inputContainer}>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.inputPlaceholder}
          style={styles.textInput(width, height, style)}
        />
        {icon && (
          <EyeIcon
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </Box>
      {bottomText && (
        <Text style={styles.bottomText(width, height, isError)}>
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
    maxHeight: vs(80, h),
    paddingVertical: vs(14, h),
    paddingHorizontal: s(12, w),
    ...style,
  }),
  icon: (w, h) => ({
    width: ms(40, w),
    height: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: theme.colors.inputBackground,
    right: s(4, w),
    borderRadius: ms(4),
  }),
  inputTitle: (w, h) => ({
    fontSize: ms(14, w),
    paddingBottom: vs(14, h),
    color: theme.colors.labelText,
  }),
  bottomText: (w, h, isError) => ({
    paddingTop: vs(9, h),
    fontSize: ms(12, w),
    fontFamily: theme.fonts.openSansRegular,
    color: isError ? theme.colors.bottomTextError : theme.colors.bottomText,
  }),
});
