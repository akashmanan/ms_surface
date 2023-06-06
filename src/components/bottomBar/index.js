import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Buttons} from '@components';
import {theme} from '@theme';
import styles from './styles';

const BottomBar = ({primaryButton, outlineButton, cancelButton}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container(width, height)}>
      {cancelButton && (
        <Buttons
          title={cancelButton}
          variant={'primary'}
          onPress={() => {}}
          buttonStyle={styles.button(width, height, theme.colors.cancelButton)}
          buttonTextStyle={styles.buttonText(
            width,
            height,
            theme.colors.cancelButtonText,
          )}
        />
      )}
      {outlineButton && (
        <Buttons
          title={primaryButton}
          variant={'outline'}
          onPress={() => {}}
          buttonStyle={styles.button(width, height)}
          buttonTextStyle={styles.buttonText(
            width,
            height,
            theme.colors.buttonBorder,
          )}
        />
      )}
      {primaryButton && (
        <Buttons
          title={primaryButton}
          variant={'primary'}
          onPress={() => {}}
          buttonStyle={styles.button(width, height, theme.colors.primaryButton)}
          buttonTextStyle={styles.buttonText(width, height, theme.colors.white)}
        />
      )}
    </View>
  );
};

export {BottomBar};
