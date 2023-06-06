import {Platform, StyleSheet} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme'

const styles = StyleSheet.create({
  header: (w, h) => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(30, h),
    marginTop: vs(39, h),
    paddingRight: Platform.OS === 'windows' ? s(64, w) : s(20, w),
  }),
  heading: w => ({
    fontSize: Platform.OS === 'windows' ? ms(31, w) : ms(26, w),
    fontFamily: theme.fonts.latoBold,
    color: theme.colors.cancelButtonText,
  }),
  buttonStyle: (w, h) => ({
    width: Platform.OS === 'windows' ? s(179, w) : s(149, w),
    height: vs(50, h),
    paddingHorizontal: s(20, w),
  }),
  buttonTextStyle: (w, h) => ({
    fontSize: ms(14, w),
  }),
});

export default styles;
