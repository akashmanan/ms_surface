import {StyleSheet} from 'react-native';
import {theme, s, vs} from '@utils';

const styles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    paddingHorizontal: s(64, w),
    paddingTop: vs(39, h),
  }),
  headerTitle: (w, h, width) => ({
    width: width,
  }),
  list: {
    flex: 1,
  },
  listHeader: (w, h) => ({
    width: '100%',
    height: vs(50, h),
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
    columnGap: 10,
    alignItems: 'center',
  }),
  headerTitleButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerTitleText: {textAlign: 'center'},
});

export default styles;
