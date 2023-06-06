import asyncStorage from '@thirdParty/storage';
import {instance} from '@services/interceptors/axios';
import Config from '@services/api/apiURLs';

const registerToken = async (accessToken, userId, userName) => {
  let token = await asyncStorage.getDeviceToken('deviceToken');
  if (token) {
    let response = await instance.post(
      `${Config.REGISTER_TOKEN}?token=${accessToken}`,
      JSON.stringify({
        apn_token: {
          user_id: userId,
          token: token,
        },
      }),
    );
    let responseJson = await response.json();
    return responseJson;
  } else {
    return {};
  }
};

export default registerToken;
