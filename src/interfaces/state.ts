import { IUser, IUsers } from './users';

export interface IState {
  sort: string;
  userId: string;
  users: IUser[];
}

export interface IGetState {
  data: {
    sort: {
      sort: string;
    };
    users: { sortedUsers: IUsers };
  };
}
