import React from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Flyout} from 'react-native-windows';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box} from '@components';
import {theme} from '@theme';
import {s, vs, ms} from '@thirdParty/screenSize';

const Modal = ({isVisible, children, onClose}) => {
  const {width, height} = useWindowDimensions();
  return (
    <Flyout
      isOpen={isVisible}
      onDismiss={onClose}
      isOverlayEnabled={false}
      style={styles.modalContainer(width, height)}
      isLightDismissEnabled={true}>
      <Box style={styles.modalContainer(width, height)}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeBtn(width, height)}>
          <Ionicons
            name="close"
            color={theme.colors.black}
            size={ms(30, width)}
          />
        </TouchableOpacity>
        {children}
      </Box>
    </Flyout>
  );
};

export {Modal};

const styles = StyleSheet.create({
  modalContainer: (w, h) => ({
    width: s(900, w),
    height: vs(600, h),
    borderWidth: s(1, w),
    borderRadius: ms(10, w),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.bottomBarBorder,
  }),
  closeBtn: (w, h) => ({
    position: 'absolute',
    top: vs(10, w),
    right: s(10, w),
    zIndex: 999,
  }),
});
