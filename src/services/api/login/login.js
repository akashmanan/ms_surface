import {instance} from '../../instance';
import humps from 'humps';
import storage from '@utils/asyncStorage';
import {setUserLogin} from '../../../redux/slice/authSlice';
import Config from '@utils/apiURLs';
import SetCookies from '@utils/setCookie';
import inspectionListing from '../inspectionListing/index';

export default login = async (username, password, dispatch) => {
  await instance
    .post(
      `${Config.USER_LOGIN}`,
      JSON.stringify({
        user: {
          email: username,
          password: password,
        },
      }),
    )
    .then(async res => {
      if (res?.status == 200) {
        let session = humps.camelizeKeys(res?.data);
        inspectionListing(1, dispatch);
        // if (res?.headers?.['set-cookie']) {
        //   SetCookies(res);
        // }
        storage.setSession(session, 'session');
        dispatch(setUserLogin(session));
        return res;
      }
    })
    .catch(error => {
      console.log('error in login API:', error);
    });
};
