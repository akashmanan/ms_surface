import {StyleSheet} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.colors.sideBarBgColor,
  },
  subContainer: (w, h) => ({
    width: '40%',
    height: '100%',
    alignSelf: 'flex-end',
    paddingHorizontal: s(21, w),
    backgroundColor: theme.colors.white,
    paddingBottom: vs(85, h),
  }),
  closeButton: (w, h) => ({
    position: 'absolute',
    top: vs(30, h),
    right: s(16, w),
  }),
  textContainer: (w, h) => ({
    alignSelf: 'center',
    paddingRight: s(30, w),
    paddingVertical: vs(30, h),
  }),
  titleText: (w, h) => ({
    fontSize: ms(21, w),
    color: theme.colors.cancelButtonText,
  }),
  subTitleText: (w, h) => ({
    fontSize: ms(24, w),
    color: theme.colors.subTitleText,
  }),
  button: (w, h) => ({
    width: s(160, w),
    height: vs(40, h),
  }),
  buttonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
  bottomBar: {width: '40%', alignSelf: 'flex-end'},
});

export default styles;
