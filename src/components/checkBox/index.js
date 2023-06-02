import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Box} from '@components';
import {theme, ms} from '@utils';

const Checkbox = ({variant, title, isChecked, setCheckboxValue}) => {
  const {width, height} = useWindowDimensions();

  if (variant === 'checkbox') {
    let style = {
      borderRadius: ms(4, width),
    };
    return (
      <Box style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle(width, height, style)}
          onPress={setCheckboxValue}>
          {isChecked && (
            <Entypo name="check" size={13} color={theme.colors.bottomText} />
          )}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text>{title}</Text>
          </TouchableOpacity>
        )}
      </Box>
    );
  } else if (variant === 'radio') {
    let style = {
      borderRadius: ms(100),
    };
    return (
      <Box style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle(width, height, style)}
          onPress={setCheckboxValue}>
          {isChecked && <Box style={styles.radioButton(width, height)} />}
        </TouchableOpacity>
        {title && (
          <TouchableOpacity onPress={setCheckboxValue}>
            <Text>{title}</Text>
          </TouchableOpacity>
        )}
      </Box>
    );
  }
};

export {Checkbox};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    zIndex: -1,
  },
  buttonStyle: (w, h, style) => ({
    width: ms(18, w),
    height: ms(18, w),
    backgroundColor: 'rgba(28, 55, 90, 0.16)',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }),
  radioButton: (w, h) => ({
    width: ms(10, w),
    height: ms(10, w),
    borderRadius: ms(100),
    alignSelf: 'center',
    backgroundColor: theme.colors.bottomText,
  }),
});
