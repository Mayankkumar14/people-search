import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: { vehiclesData: [], selectedPeopleId: null },
};

const {
  actions: {
    getVehiclesData,
    getVehiclesDataSuccess,
    getVehiclesDataFailure,
    clearVehiclesData,
  },
  reducer,
} = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    getVehiclesData: (state, { payload }) => ({
      ...state,
      isLoading: true,
      data: {
        ...state.data,
        selectedPeopleId: payload.selectedPeopleId,
      },
    }),
    getVehiclesDataSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: {
        selectedPeopleId: null,
        vehiclesData: payload.vehiclesData,
      },
    }),
    getVehiclesDataFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.msg,
      data: {
        ...state.data,
        selectedPeopleId: null,
      },
    }),
    clearVehiclesData: (state) => ({
      ...state,
      data: initialState.data,
      isLoading: false,
    }),
  },
});

export default reducer;
export {
  getVehiclesData,
  getVehiclesDataSuccess,
  getVehiclesDataFailure,
  clearVehiclesData,
};
