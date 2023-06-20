import {StyleSheet} from 'react-native';
import {s, vs, ms} from '@thirdParty/screenSize';
import {theme} from '@theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: '5%'},
  tabHeader: (w, h) => ({
    width: '100%',
    height: vs(80, h),
    paddingHorizontal: '2%',
    marginTop: vs(30, h),
    backgroundColor: theme.colors.tabBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  statusContainer: (w, h) => ({
    height: vs(38, h),
    paddingHorizontal: s(20, w),
    borderRadius: ms(4, w),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: s(10, w),
    backgroundColor: theme.colors.defaultStatusBg,
  }),
  tabView: (w, h) => ({marginTop: vs(40, h), marginLeft: '1%'}),
  bottomBar: (w, h) => ({justifyContent: 'flex-end', columnGap: s(20, w)}),
  button: (w, h) => ({
    width: s(160, w),
    height: vs(40, h),
  }),
  buttonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
  camera: (w, h) => ({
    width: s(800, w),
    height: vs(550, h),
    alignSelf: 'center',
    borderRadius: 10,
  }),
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
  inputFilterContainer: (w, h) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(16, h),
    justifyContent: 'space-between',
  }),
  inputContainer: (w, h) => ({
    width: '76%',
  }),
  inputStyle: {
    borderColor: theme.colors.dropdownBorder,
  },
  filterButton: (w, h) => ({
    width: '24%',
    flexDirection: 'row',
    columnGap: s(10, w),
    alignItems: 'center',
    justifyContent: 'center',
  }),
  itemContainer: (w, h) => ({
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: s(19, w),
    paddingVertical: vs(16, h),
    marginBottom: vs(16, h),
    borderColor: theme.colors.lineItemBorder,
    borderRadius: ms(8, w),
    columnGap: s(22, w),
  }),
  itemTextContainer: {
    width: '56%',
  },
  image: {
    width: '15%',
    height: '80%',
    backgroundColor: theme.colors.imageBg,
    alignSelf: 'center',
  },
  addButton: (w, h) => ({
    width: s(79, w),
    height: vs(30, h),
    alignSelf: 'flex-end',
  }),
});

export default styles;
