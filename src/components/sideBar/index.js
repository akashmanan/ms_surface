import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '@theme';
import {ms} from '@thirdParty/screenSize';
import {NativeButton, Button, BottomBar, Box, Text} from '@components';
import styles from './styles';

const SideBar = ({title, subTitle, onPressClose, children}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer(width, height)}>
        <Button
          style={styles.closeButton(width, height)}
          onPress={onPressClose}>
          <Ionicons
            name="close"
            color={theme.colors.black}
            size={ms(24, width)}
          />
        </Button>

        <Box style={styles.textContainer(width, height)}>
          <Text numberOfLines={3} style={styles.titleText(width, height)}>
            {title && `${title} `}
            <Text style={styles.subTitleText(width, height)}>{subTitle}</Text>
          </Text>
        </Box>

        {children}
      </View>
      <BottomBar style={styles.bottomBar}>
        <NativeButton
          title={'Cancel'}
          variant={'outline'}
          onPress={() => {}}
          buttonStyle={styles.button(width, height)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
        <NativeButton
          title={'Done'}
          variant={'primary'}
          onPress={() => {}}
          buttonStyle={styles.button(width, height)}
          buttonTextStyle={styles.buttonText(width, height)}
        />
      </BottomBar>
    </View>
  );
};

export {SideBar};
