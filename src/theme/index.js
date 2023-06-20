import {Platform} from 'react-native';

const fonts = Platform.select({
  ios: {
    openSansRegular: 'OpenSans-Regular.ttf',
    openSansMedium: 'OpenSans-Medium.ttf',
    openSandSemiBold: 'OpenSans-SemiBold.ttf',
    openSansBold: 'OpenSans-Bold.ttf',
    latoRegular: 'Lato-Regular.ttf',
    latoBold: 'Lato-Bold.ttf',
    latoItalic: 'Assets/Lato-Italic.ttf',
    interRegular: 'Assets/Inter-Regular.ttf',
    interMedium: 'Assets/Inter-Medium.ttf',
    interSemiBold: 'Assets/Inter-SemiBold.ttf',
    interBold: 'Assets/Inter-Bold.ttf',
  },
  android: {
    openSansRegular: 'OpenSans-Regular.ttf',
    openSansMedium: 'OpenSans-Medium.ttf',
    openSandSemiBold: 'OpenSans-SemiBold.ttf',
    openSansBold: 'OpenSans-Bold.ttf',
    latoRegular: 'Lato-Regular.ttf',
    latoBold: 'Lato-Bold.ttf',
    latoItalic: 'Assets/Lato-Italic.ttf',
    interRegular: 'Assets/Inter-Regular.ttf',
    interMedium: 'Assets/Inter-Medium.ttf',
    interSemiBold: 'Assets/Inter-SemiBold.ttf',
    interBold: 'Assets/Inter-Bold.ttf',
  },
  windows: {
    openSansRegular: 'Assets/OpenSans-Regular.ttf#Open Sans',
    openSansMedium: 'Assets/OpenSans-Medium.ttf#Open Sans',
    openSandSemiBold: 'Assets/OpenSans-SemiBold.ttf#Open Sans',
    openSansBold: 'Assets/OpenSans-Bold.ttf#Open Sans',
    latoRegular: 'Assets/Lato-Regular.ttf#Lato',
    latoBold: 'Assets/Lato-Bold.ttf#Lato',
    latoItalic: 'Assets/Lato-Italic.ttf#Lato',
    interRegular: 'Assets/Inter-Regular.ttf#Inter',
    interMedium: 'Assets/Inter-Medium.ttf#Inter',
    interSemiBold: 'Assets/Inter-SemiBold.ttf#Inter',
    interBold: 'Assets/Inter-Bold.ttf#Inter',
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
  openBg: '#EBECF0',
  openText: '#5C6982',
  completedBg: '#E3FCEF',
  completedText: '#006644',
  outlineButtonDisabled: '#99c4f1',
  bottomBarBorder: 'rgba(0,0,0,0.1)',
  tableBorder: '#EEEEEE',
  caption: 'rgba(27, 43, 65, 0.72)',
  progressBar: 'rgba(26, 56, 96, 0.1)',
  locationIcon: '#B4B4B4',
  locationText: '#52575C',
  tabBg: 'rgba(233, 236, 240, 0.34)',
  defaultStatusBg: '#D3D3D3',
  tabBarItem: '#848484',
  profileName: '#29293E',
  comment: '#595959',
  searchButton: 'rgba(217, 236, 255, 0.49003)',
  separator: '#E9E9E9',
  sideBarBg: '#FDFDFD',
  sideBarBgColor: '#d8d8d8',
  lineItemBorder: '#E5E5E5',
};

const theme = {
  colors,
  fonts,
};

export {theme};
