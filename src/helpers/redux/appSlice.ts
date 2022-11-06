import { createSlice } from '@reduxjs/toolkit';
import { IState } from 'interfaces/state';

const initialState: IState = {
  sort: 'by-city',
  userId: '',
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
  },
});

export const { sortReducer, userIdReducer } = appSlice.actions;

export default appSlice.reducer;
