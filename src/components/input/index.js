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
import {theme, s, vs, ms} from '@utils';

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
  let {showPassword, setShowPassword, icon, style, containerStyle, bottomText} =
    props;

  return (
    <Box style={styles.container(containerStyle)}>
      <TextInput style={styles.textInput(width, height, style)} {...props} />
      {icon && (
        <EyeIcon
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}
      <Text style={styles.bottomText(width, height)}>{bottomText}</Text>
    </Box>
  );
};

export {Input};

const styles = StyleSheet.create({
  container: containerStyle => ({
    flexDirection: 'row',
    borderRadius: ms(3),
    ...containerStyle,
  }),
  textInput: (w, h, style) => ({
    width: '100%',
    borderRadius: ms(3),
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
  bottomText: (w, h) => ({
    fontSize: ms(10, w),
    color: 'red',
  }),
});
