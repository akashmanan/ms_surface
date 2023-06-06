import {StyleSheet, Platform} from 'react-native';
import {theme, s, vs, ms} from '@utils';

const styles = StyleSheet.create({
  container: (w, h, style) => ({
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
    borderWidth: 1,
    borderColor: theme.colors.bottomBarBorder,
    ...style,
  }),
});

export default styles;
