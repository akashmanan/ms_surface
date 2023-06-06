import React from 'react';
import {Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Box} from '@components';
import {ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import styles from './styles';

const Choice = ({
  variant,
  bordered,
  title,
  isChecked,
  setCheckboxValue,
  textStyle,
}) => {
  const {width, height} = useWindowDimensions();

  if (variant === 'checkbox') {
    let style = {
      borderRadius: bordered ? 0 : ms(4, width),
      backgroundColor: !bordered
        ? 'rgba(28, 55, 90, 0.16)'
        : bordered && !isChecked
        ? theme.colors.white
        : theme.colors.checkBoxBorderFill,
      borderWidth: bordered ? 1 : 0,
      borderColor: !bordered
        ? 'none'
        : bordered && !isChecked
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
              size={ms(13, width)}
              color={bordered ? theme.colors.white : theme.colors.bottomText}
            />
          )}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text style={styles.titleStyle(textStyle)}>{title}</Text>
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
        <TouchableOpacity
          style={styles.buttonStyle(width, height, style)}
          onPress={setCheckboxValue}>
          {isChecked && <Box style={styles.radioButton(width, height)} />}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text style={styles.titleStyle(textStyle)}>{title}</Text>
          </TouchableOpacity>
        )}
      </Box>
    );
  }
};

export {Choice};
