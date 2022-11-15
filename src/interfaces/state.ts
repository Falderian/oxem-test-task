import { IUser, IUsers } from './users';

export interface IState {
  sort: string;
  user: IUser;
  users: IUser[];
}

export interface IGetStateUser {
  user: { user: IUser };
}

export interface IGetState {
  data: {
    sort: 'by-city';
    user: IUser;
    users: IUsers;
  };
}
