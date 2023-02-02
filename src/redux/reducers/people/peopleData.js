import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: { totalPeopleCount: 0, peopleData: [], nextPage: null },
};

const {
  actions: { getPeopleData, getPeopleDataSuccess, getPeopleDataFailure },
  reducer,
} = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleData: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    getPeopleDataSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      data: {
        peopleData: payload.isSearchFilterInput
          ? [...payload.peopleData]
          : [...state.data.peopleData, ...payload.peopleData],
        nextPageUrl: payload.next,
        totalPeopleCount: payload.count,
      },
    }),
    getPeopleDataFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.msg,
    }),
  },
});

export default reducer;
export { getPeopleData, getPeopleDataSuccess, getPeopleDataFailure };
