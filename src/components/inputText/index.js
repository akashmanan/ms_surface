import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {s, vs, ms} from '@utils/sizeMatter';
import theme from '@utils/theme';

const InputText = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput(props?.color, props?.backgroundColor)}
        {...props}
      />
      {props?.icon && (
        <AntDesign
          name="eyeo"
          style={styles.icon}
          size={ms(26)}
          color={props?.showPassword ? theme.colors.blue : theme.colors.eyeIcon}
          onPress={() => props?.setShowPassword(!props?.showPassword)}
        />
      )}
    </View>
  );
};

export {InputText};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: (color, backgroundColor) => ({
    padding: ms(10),
    borderRadius: ms(3),
    width: '100%',
    color,
    backgroundColor,
  }),
  icon: {
    position: 'absolute',
    backgroundColor: theme.colors.white,
    right: s(15),
    top: vs(10),
  },
});
