import {StyleSheet} from 'react-native';
import {theme, s, vs, ms} from '@utils';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  imgContainer: {
    height: '30%',
    width: '100%',
  },
  bannerImage: {width: '104%', height: '110%'},
  loginForm: (w, h) => ({
    height: '70%',
    width: '65%',
    alignSelf: 'center',
    position: 'absolute',
    top: vs(100, h),
    borderRadius: ms(10, w),
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    elevation: 5,
  }),
  iconContainer: (w, h) => ({
    width: '40%',
    backgroundColor: '#DEEBFF',
    height: '100%',
    paddingHorizontal: '10%',
    borderTopLeftRadius: ms(10, w),
    borderBottomLeftRadius: ms(10, w),
  }),
  loginFormContainer: (w, h) => ({
    width: '60%',
    height: '100%',
    paddingHorizontal: s(55, w),
    paddingVertical: vs(20, h),
  }),
  heading: (w, h) => ({
    fontSize: ms(35, w),
    paddingTop: vs(30, h),
    textAlign: 'center',
    paddingBottom: '10%',
    fontFamily: theme.fonts.openSansBold,
  }),
  labelText: (w, h) => ({
    fontSize: ms(20, h),
    color: theme.colors.labelText,
    paddingTop: vs(36, h),
    paddingBottom: vs(14, h),
    fontFamily: theme.fonts.openSansRegular,
  }),
  input: (w, h) => ({
    color: theme.colors.input,
    backgroundColor: theme.colors.inputBackground,
    fontFamily: theme.fonts.openSansRegular,
    fontSize: ms(13, w),
  }),
  bottomText: (w, h) => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vs(14, h),
    marginBottom: vs(42, h),
  }),
  rememberView: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(6, w),
  }),
  buttonStyle: (w, h) => ({height: vs(52, h)}),
  textStyle: (w, h) => ({fontSize: ms(18, w)}),
  extraMargin: (margin, value) => ({
    [margin]: value,
  }),
});

export default styles;
