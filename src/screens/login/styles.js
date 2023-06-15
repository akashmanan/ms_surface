import {Platform, StyleSheet} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

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
  bannerImage: {
    width: '104%',
    height: '100%',
  },
  loginForm: (w, h) => ({
    height: '72%',
    width: Platform.OS === 'windows' ? '65%' : '80%',
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
    width: Platform.OS === 'windows' ? '60%' : '100%',
    height: vs(611, h),
    paddingHorizontal: '6%',
    paddingVertical: vs(20, h),
  }),
  heading: (w, h) => ({
    paddingTop: vs(18, h),
    paddingBottom: '10%',
  }),
  labelText: (w, h) => ({
    paddingTop: vs(32, h),
    paddingBottom: vs(14, h),
  }),
  input: (w, h) => ({
    width: '100%',
    fontSize: ms(13, w),
    paddingHorizontal: s(10),
    color: theme.colors.input,
    backgroundColor: theme.colors.inputBackground,
    fontFamily: theme.fonts.openSansRegular,
  }),
  bottomText: (w, h) => ({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vs(14, h),
    marginBottom: vs(42, h),
    flexWrap: 'wrap',
  }),
  rememberView: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(16, w),
  }),
  bottomButtonText: (w, h, size, color) => ({fontSize: ms(size, w), color}),
  buttonStyle: (w, h) => ({
    height: vs(52, h),
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textStyle: (w, h) => ({fontSize: ms(18, w)}),
  extraMargin: (margin, value) => ({
    [margin]: value,
  }),
});

export default styles;
