import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    value: true,
  },
  reducers: {
    validateUserId: (state, action) => {
      state.value = action.payload.loggedInUserId == action.payload.validUserId;
    },
    resetUserState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { validateUserId, resetUserState } = userIdSlice.actions;
export default userIdSlice;
