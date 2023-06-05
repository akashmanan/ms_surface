import {createSlice} from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    id: '',
    company_id: '',
    user_type_id: false,
    user_status_id: false,
    access_level_id: '',
    access_level_type: '',
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    full_name: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
    mobile: '',
    time_zone: '',
    session_timeout: null,
    image_url: {},
    is_enable: false,
    is_owner: false,
    is_access_area_in_customer_flag: false,
    is_auto_check_in_out_wo_flag: false,
    last_sign_in_at: null,
    created_at: null,
    time_zone_info: '',
    company: {},
    user_type: {},
    nte_amount_policy: {},
    next_step_only_order_policy: {},
  },
  reducers: {
    setUserInfoInformation: (state, action) => {
      state.id = action.payload.id;
      state.company_id = action.payload.company_id;
      state.user_type_id = action.payload.user_type_id;
      state.user_status_id = action.payload.user_status_id;
      state.access_level_id = action.payload.access_level_id;
      state.access_level_type = action.payload.access_level_type;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.full_name = action.payload.full_name;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.country = action.payload.country;
      state.zip = action.payload.zip;
      state.phone = action.payload.phone;
      state.mobile = action.payload.mobile;
      state.time_zone = action.payload.time_zone;
      state.session_timeout = action.payload.session_timeout;
      state.image_url = action.payload.image_url;
      state.is_enable = action.payload.is_enable;
      state.is_owner = action.payload.is_owner;
      state.is_access_area_in_customer_flag =
        action.payload.is_access_area_in_customer_flag;
      state.is_auto_check_in_out_wo_flag =
        action.payload.is_auto_check_in_out_wo_flag;
      state.last_sign_in_at = action.payload.last_sign_in_at;
      state.created_at = action.payload.created_at;
      state.time_zone_info = action.payload.time_zone_info;
      state.company = action.payload.company;
      state.user_type = action.payload.user_type;
      state.nte_amount_policy = action.payload.nte_amount_policy;
      state.next_step_only_order_policy =
        action.payload.next_step_only_order_policy;
    },
  },
});

export const {setUserInfoInformation} = userInfoSlice.actions;

export default userInfoSlice.reducer;
