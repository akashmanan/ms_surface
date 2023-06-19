import humps from 'humps';
import store from '@redux/store';
import {instance} from '@services/interceptors/axios';
import {setInspectionList} from '@redux/slice/inspectionListing';
import Config from '@services/api/apiURLs';

const inspectionListing = async (page, dispatch) => {
  let state = store.getState();
  let token = state.authReducer.accessToken;
  await instance
    .get(`${Config.INSPECTION_LISTING}?token=${encodeURIComponent(token)}`)
    .then(async response => {
      if (response && response.data) {
        let inspections = humps.camelizeKeys(response.data);
        dispatch(setInspectionList(inspections));
      }
      return response;
    })
    .catch(err => {
      console.log('error in inspection fetching', err);
      return err;
    });
};

export default inspectionListing;
