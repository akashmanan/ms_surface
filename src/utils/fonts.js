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

export {fonts};
