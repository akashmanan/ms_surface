import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Box, Buttons, HeadingText} from '@components';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';
import styles from './styles';

const Heading = ({heading, buttonTitle, onPress}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Box style={styles.header(width, height)}>
      <HeadingText
        fontFamily={theme.fonts.latoBold}
        fontColor={theme.colors.cancelButtonText}>
        {heading}
      </HeadingText>
      {buttonTitle && onPress && (
        <Buttons
          variant={'primary'}
          title={buttonTitle}
          buttonStyle={styles.buttonStyle(width, height)}
          buttonTextStyle={styles.buttonTextStyle(width, height)}
          onPress={onPress}
        />
      )}
    </Box>
  );
};

export {Heading};
