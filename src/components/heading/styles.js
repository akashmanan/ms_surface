import {StyleSheet} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';

const styles = StyleSheet.create({
  header: (w, h) => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(30, h),
    marginTop: vs(39, h),
    paddingRight: '5%',
  }),
  buttonStyle: (w, h) => ({
    width: s(160, w),
    height: vs(50, h),
    paddingHorizontal: s(20, w),
  }),
  buttonTextStyle: (w, h) => ({
    fontSize: ms(14, w),
  }),
});

export default styles;
