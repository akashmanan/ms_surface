import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  useWindowDimensions,
} from 'react-native';
import {theme, ms} from '@utils';
import {Box, Loader} from '@components';

const Buttons = ({
  title,
  onPress,
  variant,
  disabled,
  buttonStyle,
  buttonTextStyle,
  foreground,
  borderless,
  isLoading,
}) => {
  const {width, height} = useWindowDimensions();
  let buttonStyles = {};
  let buttonTextStyles = {};
  switch (variant) {
    case 'primary':
      buttonStyles = {
        backgroundColor: !disabled
          ? theme.colors.primaryButton
          : theme.colors.primaryButtonDisabled,
        width: '100%',
        ...buttonStyle,
      };
      buttonTextStyles = {
        color: theme.colors.white,
        ...buttonTextStyle,
      };
      break;
    case 'outline':
      buttonStyles = {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: !disabled
          ? theme.colors.buttonBorder
          : theme.colors.outlineButtonDisabled,
        width: '100%',
        ...buttonStyle,
      };
      buttonTextStyles = {
        color: !disabled
          ? theme.colors.buttonBorder
          : theme.colors.outlineButtonDisabled,
        ...buttonTextStyle,
      };
      break;
    case 'cancel':
      buttonStyles = {
        backgroundColor: theme.colors.cancelButton,
        width: '100%',
        ...buttonStyle,
      };
      buttonTextStyles = {
        color: theme.colors.cancelButtonText,
        ...buttonTextStyle,
      };
      break;
    default:
      buttonStyles = {
        ...buttonStyle,
      };
      buttonTextStyles = {
        color: theme.colors.bottomText,
        paddingHorizontal: 0,
        paddingVertical: 0,
        ...buttonTextStyle,
      };
      break;
  }

  if (Platform.OS === 'android') {
    return (
      <Box style={[styles.baseStyle(width, height), buttonStyles]}>
        <Pressable
          disabled={disabled}
          android_ripple={{
            color: theme.colors.ripple,
            foreground: foreground ? true : false,
            borderless: borderless ? true : false,
          }}
          onPress={onPress}
          style={[styles.baseStyle(width, height), buttonStyles]}>
          {isLoading ? (
            <Loader color={theme.colors.white} size={'small'} />
          ) : (
            <Text style={[styles.title, buttonTextStyles]}>{title}</Text>
          )}
        </Pressable>
      </Box>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.baseStyle(width, height), buttonStyles]}>
        {isLoading ? (
          <Loader color={theme.colors.white} size={'small'} />
        ) : (
          <Text style={[styles.title, buttonTextStyles]}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
};

export {Buttons};

const styles = StyleSheet.create({
  baseStyle: (w, h) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(8, w),
    overflow: 'hidden',
  }),
  title: {
    textAlign: 'center',
  },
});
