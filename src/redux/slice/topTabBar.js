import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'TopTabBar',
  initialState: {
    selectedTab: 'Inspections',
  },
  reducers: {
    setSelectedTab: (state, {payload}) => {
      state.selectedTab = payload;
    },
  },
});

export const {setSelectedTab} = slice.actions;
export default slice.reducer;
