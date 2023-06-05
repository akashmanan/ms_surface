import {StyleSheet} from 'react-native';
import {theme, s, ms} from '@utils';

const styles = StyleSheet.create({
  container: (w, h) => ({
    flexDirection: 'row',
    columnGap: s(8, w),
    alignItems: 'center',
    zIndex: -1,
  }),
  buttonStyle: (w, h, style) => ({
    width: ms(18, w),
    height: ms(18, w),
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }),
  radioButton: (w, h) => ({
    width: ms(16, h),
    height: ms(16, h),
    borderRadius: ms(100),
    alignSelf: 'center',
    backgroundColor: theme.colors.bottomText,
  }),
  titleStyle: style => ({
    color: theme.colors.labelText,
    ...style,
  }),
});

export default styles;