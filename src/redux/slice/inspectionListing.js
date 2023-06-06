import {createSlice} from '@reduxjs/toolkit';

export const inspectionSlice = createSlice({
  name: 'inspection',
  initialState: {
    inspectionList: [],
    isLoading: false,
  },
  reducers: {
    setLoader: (state, {payload}) => {
      state.isLoading = payload;
    },
    setInspectionList: (state, action) => {
      state.inspectionList = action.payload;
      state.isLoading = false;
    },
  },
});

export const {setInspectionList, setLoader} = inspectionSlice.actions;

export default inspectionSlice.reducer;
