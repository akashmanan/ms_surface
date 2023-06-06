import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    isLoading: false,
    errorMsg: '',
  },
  reducers: {
    setLoader: (state, {payload}) => {
      state.isLoading = payload;
      state.errorMsg = '';
    },
    setUserLogin: (state, action) => {
      state.accessToken = action.payload.token;
      state.errorMsg = '';
      state.isLoading = false;
    },
    setErrorMsg: (state, {payload}) => {
      state.errorMsg = payload;
      state.isLoading = false;
    },
  },
});

export const {setUserLogin, setLoader, setErrorMsg} = authSlice.actions;

export default authSlice.reducer;
