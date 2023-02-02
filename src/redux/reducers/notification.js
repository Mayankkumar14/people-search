import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: null,
  error: false,
};

const {
  actions: { showSuccessMessage, showErrorMessage, hideMessage },
  reducer,
} = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showSuccessMessage: (state, action) => {
      const message = action?.payload?.message;
      return {
        ...initialState,
        open: true,
        message,
      };
    },
    showErrorMessage: (state, action) => {
      const message = action?.payload?.message;
      return {
        ...initialState,
        open: true,
        error: true,
        message,
      };
    },
    hideMessage: (state) => ({
      ...state,
      open: false,
    }),
  },
});

export default reducer;
export { showSuccessMessage, showErrorMessage, hideMessage };
