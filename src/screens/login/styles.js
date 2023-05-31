import {StyleSheet} from 'react-native';
import {vs, ms} from '@utils/sizeMatter';
import theme from '@utils/theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  imgContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'blue',
  },
  bannerImage: {width: '104%', height: '110%'},
  loginForm: {
    height: '70%',
    width: '65%',
    alignSelf: 'center',
    position: 'absolute',
    top: vs(100),
    borderRadius: ms(10),
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  iconContainer: {
    width: '40%',
    backgroundColor: '#DEEBFF',
    height: '100%',
    paddingHorizontal: '10%',
  },
  loginFormContainer: {
    width: '60%',
    height: '100%',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
  },
  heading: {
    fontSize: ms(35),
    paddingTop: vs(30),
    textAlign: 'center',
    paddingBottom: '10%',
  },
  labelText: {
    fontSize: ms(16),
    color: theme.colors.labelText,
    paddingTop: vs(46),
    paddingBottom: vs(14),
    fontWeight: '600',
  },
  button: {
    marginTop: vs(4),
    alignSelf: 'flex-end',
  },
  bottomText: {
    width: '100%',
    // height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  extraMargin: (margin, value) => ({
    [margin]: value,
  }),
});

export default styles;
