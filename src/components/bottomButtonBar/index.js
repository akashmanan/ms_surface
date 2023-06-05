import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Button} from '@components';
import {theme} from '@utils';
import styles from './styles';

const BottomButtonBar = ({primaryButton, outlineButton, cancelButton}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container(width, height)}>
      {cancelButton && (
        <Button
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
        <Button
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
        <Button
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

export {BottomButtonBar};
