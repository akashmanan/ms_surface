import AsyncStorage from '@react-native-community/async-storage';

export default {
  getSession: async (callback, STORAGE_KEY) => {
    let sessionString = await AsyncStorage.getItem(STORAGE_KEY);
    let session = JSON.parse(sessionString);
    callback(session);
  },

  setSession: async (session, STORAGE_KEY) => {
    try {
      if (session) {
        let sessionString = JSON.stringify(session);
        await AsyncStorage.setItem(STORAGE_KEY, sessionString);
      } else {
        await AsyncStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
  },

  getDeviceToken: async STORAGE_KEY => {
    let token = await AsyncStorage.getItem(STORAGE_KEY);
    return token;
  },

  setDeviceToken: async (token, STORAGE_KEY) => {
    try {
      if (token) {
        await AsyncStorage.setItem(STORAGE_KEY, token);
      } else {
        await AsyncStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.log('error:', e);
    }
  },
};
