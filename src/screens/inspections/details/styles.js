import {StyleSheet} from 'react-native';
import {theme, s, ms} from '@thirdParty/screenSize';

const styles = StyleSheet.create({
  titleText: (w, h) => ({
    fontFamily: theme.fonts.latoBold,
    fontWeight: '700',
    fontSize: ms(17, w),
  }),
  text: (w, h) => ({
    fontFamily: theme.fonts.latoBold,
    fontWeight: '600',
    fontSize: ms(15, w),
    width: '65%',
  }),
  statusView: (w, h) => ({
    justifyContent: 'center',
  }),
  statusText: (w, h) => ({
    fontFamily: theme.fonts.latoBold,
    fontWeight: '400',
    color: theme.colors.inProgressText,
    backgroundColor: theme.colors.inProgressBg,
    borderRadius: ms(16, w),
    fontSize: ms(16, w),
    paddingHorizontal: ms(10, w),
    paddingVertical: ms(5, w),
  }),
});

export default styles;
