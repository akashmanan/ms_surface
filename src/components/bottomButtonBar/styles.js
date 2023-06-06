import {StyleSheet, Platform} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme'

const styles = StyleSheet.create({
  container: (w, h) => ({
    width: '100%',
    height: vs(85, h),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    paddingHorizontal: '5%',
    backgroundColor: theme.colors.white,
  }),
  button: (w, h, backgroundColor) => ({
    width: Platform.OS === 'windows' ? s(179, w) : s(149, w),
    height: vs(40, h),
    backgroundColor,
  }),
  buttonText: (w, h, color) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
    color,
  }),
});

export default styles;
