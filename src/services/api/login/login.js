import {instance} from '../../interceptors/axios';
import humps from 'humps';
import storage from '@thirdParty/storage';
import {
  setUserLogin,
  enableLoader,
  setErrorMsg,
} from '../../../redux/slice/authSlice';
import Config from './../apiURLs';
import SetCookies from '@thirdParty/cookies';
import inspectionListing from '../inspectionListing/index';

export default login = async (username, password, dispatch) => {
  dispatch(enableLoader());
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
      dispatch(setErrorMsg(error?.message));
      console.log('error in login API:', error);
    });
};
