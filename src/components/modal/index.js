import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Flyout} from 'react-native-windows';
import RNModal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box} from '@components';
import {theme} from '@theme';
import {s, vs, ms} from '@thirdParty/screenSize';

const Modal = ({isVisible, children, onClose}) => {
  const {width, height} = useWindowDimensions();

  if (Platform.OS === 'windows') {
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
  } else {
    return (
      <RNModal
        isVisible={isVisible}
        onClose={onClose}
        style={styles.modalContainer(width, height)}>
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
      </RNModal>
    );
  }
};

export {Modal};

const styles = StyleSheet.create({
  modalContainer: (w, h) => ({
    width: '100%',
    height: '100%',
    borderWidth: s(1, w),
    borderRadius: ms(10, w),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.bottomBarBorder,
  }),
  closeBtn: (w, h) => ({
    position: 'absolute',
    top: vs(14, w),
    right: s(20, w),
    zIndex: 999,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  }),
});
