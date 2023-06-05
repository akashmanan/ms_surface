import {Platform, StyleSheet} from 'react-native';
import {theme, s, vs, ms} from '@utils';

const styles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingLeft: Platform.OS === 'windows' ? s(64, w) : s(20, w),
  }),
  headerTitle: (w, h, width) => ({
    width: width,
    paddingVertical: vs(10, h),
  }),
  headerTitleText: (w, h) => ({
    fontSize: ms(16, w),
    textAlign: 'center',
  }),
  list: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  listHeader: (w, h) => ({
    width: '100%',
    minHeight: vs(50, h),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.listHeader,
    paddingLeft: s(10, w),
  }),
  listContainer: (w, h) => ({
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: vs(50, h),
    maxHeight: vs(80, h),
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingLeft: s(10, w),
  }),
  listCategoryContainer: (w, h, width) => ({
    width: width,
    flexDirection: 'row',
    columnGap: s(4, w),
    alignItems: 'center',
    marginRight: vs(10, h),
  }),
  headerTitleButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  statusContainer: (w, h, backgroundColor) => ({
    backgroundColor,
    borderRadius: ms(16, w),
  }),
  tableText: (
    w,
    h,
    backgroundColor,
    color = theme.colors.black,
    ph = 0,
    pv = 0,
  ) => ({
    color,
    fontSize: ms(14, w),
    borderRadius: ms(16, w),
    backgroundColor,
    paddingHorizontal: s(ph, w),
    paddingVertical: vs(pv, h),
  }),
});

export default styles;
