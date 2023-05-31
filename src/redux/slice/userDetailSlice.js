import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({ 
  name: "userDetails",
  initialState: {
    username: "",
    full_name: "",
    is_pmc: false,
    is_supplier: false,
    time_zone: "",
    time_zone_info: "",
    subscription_module_list: [],
    work_order_policy: {},
    inspection_policy: {},
    contract_policy: {},
    invoice_policy: {},
    order_policy: {},
    is_resident_user: false,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.username = action.payload.username;
      state.full_name = action.payload.full_name;
      state.is_pmc = action.payload.is_pmc;
      state.is_supplier = action.payload.is_supplier;
      state.time_zone = action.payload.time_zone;
      state.time_zone_info = action.payload.time_zone_info;
      state.subscription_module_list = action.payload.subscription_module_list;
      state.work_order_policy = action.payload.work_order_policy;
      state.inspection_policy = action.payload.inspection_policy;
      state.contract_policy = action.payload.contract_policy;
      state.invoice_policy = action.payload.invoice_policy;
      state.order_policy = action.payload.order_policy;
      state.is_resident_user = action.payload.is_resident_user;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
