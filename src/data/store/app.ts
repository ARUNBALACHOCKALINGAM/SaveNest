import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Loan"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setType: (state, action) => {
      // Directly update the type property with the new value from action.payload
      state.type = action.payload;
    }
  },
});

export const { setType } = appSlice.actions;
export default appSlice.reducer;
