import {StyleSheet} from 'react-native';
import {theme, s, vs, ms} from '@utils';

const styles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    backgroundColor: theme.colors.white,
  }),
  contentContainer: (w, h) => ({
    paddingHorizontal: Platform.OS === 'windows' ? s(64, w) : s(20, w),
  }),
  inspectionFormContainer: {
    rowGap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inspectionInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  inputContainer: (w, h) => ({
    width: Platform.OS === 'windows' ? '44%' : '100%',
  }),
  inputBox: (w, h) => ({
    width: '100%',
    fontSize: ms(14, w),
    borderWidth: 1,
    height: vs(48, h),
    color: theme.colors.black,
    borderColor: theme.colors.dropdownBorder,
  }),
  radioButtonContainer: (w, h) => ({
    width: Platform.OS === 'windows' ? '100%' : '100%',
    flexDirection: 'row',
    columnGap: s(10, h),
  }),
  imagePickerContainer: (w, h) => ({
    width: '44%',
    marginTop: vs(20, h),
  }),
  imagePickerIconContainer: {
    justifyContent: 'flex-start',
    columnGap: 20,
    flexDirection: 'row',
  },
  imagePickerImgContainer: (w, h) => ({
    marginTop: vs(10, h),
  }),
  imagePickerImg: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginVertical: 10,
  },
  button: (w, h) => ({
    width: Platform.OS === 'windows' ? s(179, w) : s(149, w),
    height: vs(40, h),
  }),
  buttonText: (w, h) => ({
    fontSize: ms(16, w),
    fontFamily: theme.fonts.latoRegular,
  }),
  bottomBar: () => ({backgroundColor: 'red'}),
});

export default styles;
