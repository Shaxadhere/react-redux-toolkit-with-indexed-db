import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "Shehzad Ahmed",
    email: "shaxad.here@gmail.com"
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.userData = payload.user;
    }
  },
  extraReducers: {}
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
