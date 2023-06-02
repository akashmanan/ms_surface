// import PushNotification from 'react-native-push-notification'
import asyncStorage from '@utils/asyncStorage'

let configured = false

export default configureNotification = () => {
    if (!configured) {
        PushNotification.configure({
            onRegister: function (deviceToken) {
                asyncStorage.setDeviceToken(deviceToken.token)
            },
        })
    }

    configured = true
}