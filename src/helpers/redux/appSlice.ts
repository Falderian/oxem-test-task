import { createSlice } from '@reduxjs/toolkit';
import { IState } from 'interfaces/state';

const initialState: IState = {
  sort: 'by-city',
  userId: '',
  users: [],
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    sortReducer(state, action) {
      state.sort = action.payload;
    },
    userIdReducer(state, action) {
      state.userId = action.payload;
    },
    usersReducer(state, action) {
      state.users = action.payload;
    },
  },
});

export const { sortReducer, userIdReducer, usersReducer } = appSlice.actions;

export default appSlice.reducer;
