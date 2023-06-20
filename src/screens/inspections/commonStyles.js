import {StyleSheet} from 'react-native';
import {vs} from '@thirdParty/screenSize';
import {theme} from '@theme';

const commonStyles = StyleSheet.create({
  container: (w, h) => ({
    flex: 1,
    backgroundColor: theme.colors.white,
    marginBottom: vs(85, h),
  }),
});

export default commonStyles;
