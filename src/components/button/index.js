import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  useWindowDimensions,
} from 'react-native';
import {ms} from '@thirdParty/screenSize';
import {theme} from '@theme'
import {Box, Loader} from '@components';

const Button = ({
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
  let newStyle = {};
  let newTextStyle = {};
  switch (variant) {
    case 'primary':
      newStyle = {
        backgroundColor: !disabled
          ? theme.colors.primaryButton
          : theme.colors.primaryButtonDisabled,
        width: '100%',
        ...buttonStyle,
      };
      newTextStyle = {
        color: theme.colors.white,
        ...buttonTextStyle,
      };
      break;
    case 'outline':
      newStyle = {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.buttonBorder,
        width: '100%',
        ...buttonStyle,
      };
      newTextStyle = {
        color: theme.colors.buttonBorder,
        ...buttonTextStyle,
      };
      break;
    default:
      newStyle = {
        ...buttonStyle,
      };
      newTextStyle = {
        color: theme.colors.bottomText,
        paddingHorizontal: 0,
        paddingVertical: 0,
        ...buttonTextStyle,
      };
      break;
  }

  let renderButton =
    Platform.OS === 'android' ? (
      <Box style={[styles.baseStyle(width, height), newStyle]}>
        <Pressable
          disabled={disabled}
          android_ripple={{
            color: theme.colors.ripple,
            foreground: foreground ? true : false,
            borderless: borderless ? true : false,
          }}
          onPress={onPress}
          style={[styles.baseStyle(width, height), newStyle]}>
          {isLoading ? (
            <Loader color={theme.colors.white} size={'small'} />
          ) : (
            <Text style={[styles.title, newTextStyle]}>{title}</Text>
          )}
        </Pressable>
      </Box>
    ) : (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.baseStyle(width, height), newStyle]}>
        {isLoading ? (
          <Loader color={theme.colors.white} size={'small'} />
        ) : (
          <Text style={[styles.title, newTextStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    );

  return renderButton;
};

export {Button};

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
