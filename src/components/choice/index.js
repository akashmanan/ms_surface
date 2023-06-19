import React from 'react';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Box, Text} from '@components';
import {ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import styles from './styles';

const Choice = ({
  title,
  variant,
  rounded,
  bordered,
  isChecked,
  textStyle,
  setCheckboxValue,
}) => {
  const {width, height} = useWindowDimensions();

  if (variant === 'checkbox') {
    let style = {
      borderRadius: rounded || isChecked ? ms(1, width) : 0,
      backgroundColor: rounded
        ? 'rgba(28, 55, 90, 0.16)'
        : !isChecked
        ? theme.colors.white
        : theme.colors.checkBoxBorderFill,
      borderWidth: rounded ? 0 : 1,
      borderColor: rounded
        ? 'none'
        : !isChecked
        ? theme.colors.checkBoxBorder
        : theme.colors.checkBoxBorderFill,
    };
    return (
      <Box style={styles.container(width, height)}>
        <TouchableOpacity
          style={styles.buttonStyle(width, height, style)}
          onPress={setCheckboxValue}>
          {isChecked && (
            <Entypo
              name="check"
              size={ms(11, width)}
              color={!rounded ? theme.colors.white : theme.colors.bottomText}
            />
          )}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text fontColor={theme.colors.labelText} style={textStyle}>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      </Box>
    );
  } else if (variant === 'radio') {
    let style = {
      borderRadius: ms(100),
      borderWidth: 1,
      borderColor: theme.colors.bottomText,
      padding: ms(10, width),
    };
    return (
      <Box style={styles.container(width, height)}>
        <TouchableOpacity onPress={setCheckboxValue}>
          {isChecked ? (
            <Fontisto
              name={'radio-btn-active'}
              size={ms(18, width)}
              color={theme.colors.bottomText}
            />
          ) : (
            <Fontisto
              name={'radio-btn-passive'}
              size={ms(18, width)}
              color={theme.colors.bottomText}
            />
          )}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text fontColor={theme.colors.labelText} style={textStyle}>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      </Box>
    );
  }
};

export {Choice};
