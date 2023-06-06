import {instance} from '../../interceptors/axios';
import humps from 'humps';
import Config from '../apiURLs';
import store from '../../../redux/store';
import {setInspectionList} from '../../../redux/slice/inspectionListing';

export default inspectionListing = async (page, dispatch) => {
  let state = store.getState();
  let token = state.authReducer.accessToken;
  await instance
    .get(
      `${Config.INSPECTION_LISTING}?token=${encodeURIComponent(
        token,
      )}&page=${page}`,
    )
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
