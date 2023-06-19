import humps from 'humps';
import {instance} from '@services/interceptors/axios';
import storage from '@thirdParty/storage';
import {setUserLogin, setLoader, setErrorMsg} from '@redux/slice/authSlice';
import Config from '@services/api/apiURLs';
import {inspectionListing} from '@services/api';
import SetCookies from '@thirdParty/cookies';

const login = async (username, password, dispatch) => {
  dispatch(setLoader(true));
  await instance
    .post(
      `${Config.USER_LOGIN}`,
      JSON.stringify({
        user: {
          email: 'jessica.blushbit+fkhtech@gmail.com',
          password: 'Reset@123',
        },
      }),
      // JSON.stringify({
      //   user: {
      //     email: username,
      //     password: password,
      //   },
      // }),
    )
    .then(async res => {
      if (res?.status === 200) {
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

export default login;
