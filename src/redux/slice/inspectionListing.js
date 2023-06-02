import {createSlice} from '@reduxjs/toolkit';

export const inspectionSlice = createSlice({
  name: 'inspection',
  initialState: {
    inspectionList: [],
  },
  reducers: {
    setInspectionList: (state, action) => {
      state.inspectionList = action.payload;
    },
  },
});

export const {setInspectionList} = inspectionSlice.actions;

export default inspectionSlice.reducer;
