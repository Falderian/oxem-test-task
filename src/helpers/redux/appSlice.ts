import { createSlice } from '@reduxjs/toolkit';
import { IState } from 'interfaces/state';

const initialState: IState = {
  sort: 'by-city',
  user: {
    id: -1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
  users: [],
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    sortReducer(state, action) {
      state.sort = action.payload;
    },
    userReducer(state, action) {
      state.user = action.payload;
    },
    usersReducer(state, action) {
      state.users = action.payload;
    },
  },
});

export const { sortReducer, userReducer, usersReducer } = appSlice.actions;

export default appSlice.reducer;
