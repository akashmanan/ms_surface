import {Platform} from 'react-native';

const fonts = Platform.select({
  ios: {
    openSansRegular: 'OpenSans-Regular.ttf',
    openSansMedium: 'OpenSans-Medium.ttf',
    openSandSemiBold: 'OpenSans-SemiBold.ttf',
    openSansBold: 'OpenSans-Bold.ttf',
    latoRegular: 'Lato-Regular.ttf',
    latoBold: 'Lato-Bold.ttf',
  },
  android: {
    openSansRegular: 'OpenSans-Regular.ttf',
    openSansMedium: 'OpenSans-Medium.ttf',
    openSandSemiBold: 'OpenSans-SemiBold.ttf',
    openSansBold: 'OpenSans-Bold.ttf',
    latoRegular: 'Lato-Regular.ttf',
    latoBold: 'Lato-Bold.ttf',
  },
  windows: {
    openSansRegular: 'Assets/OpenSans-Regular.ttf#Open Sans',
    openSansMedium: 'Assets/OpenSans-Medium.ttf#Open Sans',
    openSandSemiBold: 'Assets/OpenSans-SemiBold.ttf#Open Sans',
    openSansBold: 'Assets/OpenSans-Bold.ttf#Open Sans',
    latoRegular: 'Assets/Lato-Regular.ttf#Lato',
    latoBold: 'Assets/Lato-Bold.ttf#Lato',
  },
});
const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#0000FF',
  eyeIcon: 'rgba(28, 46, 69, 0.6)',
  selectedRadio: '#32cd32',
  radioBorder: '#707070',
  labelText: 'rgba(27, 43, 65, 0.72)',
  inputBackground: '#e9ecf0',
  
  loginHeading: '#263238',
  input: '#18273A',
  inputPlaceholder: 'rgba(28, 48, 74, 0.5)',
  primaryButton: '#1A46D9',
  primaryButtonDisabled: '#a3b5f0',
  buttonBorder: '#006CDB',
  ripple: 'rgba(100, 100, 100, 0.2)',
  bottomText: '#858585',
  bottomTextError: '#FF0000',
  listHeader: '#E9ECF0',
  dropdownBorder: '#C8C8C8',
  dropdownText: '#6C6C6C',
  dropdownSelectedText: '#555555',
  cancelButton: '#F1F3F5',
  cancelButtonText: '#25282B',
  rememberMe: 'rgba(133, 133, 133, 0.94)',
  checkBoxBorder: '#737373',
  checkBoxBorderFill: '#006CDB',
  inProgressBg: '#DEEBFF',
  inProgressText: '#1155B6',
  resolvedBg: '#E3FCEF',
  resolvedText: '#006644',
  openBg: '#5C6982',
  openText: '#EBECF0',
  outlineButtonDisabled: '#99c4f1',
  bottomBarBorder: 'rgba(0,0,0,0.1)',
  tableBorder: '#EEEEEE',
};

const theme = {
  colors: colors,
  fonts: fonts,
};

export {theme};
