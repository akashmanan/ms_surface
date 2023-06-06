// import PushNotification from 'react-native-push-notification'
import asyncStorage from '@thirdParty/storage';

let configured = false;

export default configureNotification = () => {
  if (!configured) {
    PushNotification.configure({
      onRegister: function (deviceToken) {
        asyncStorage.setDeviceToken(deviceToken.token);
      },
    });
  }

  configured = true;
};
