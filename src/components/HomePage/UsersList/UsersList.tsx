import { getUsers } from 'api/getUsers';
import { usersReducer } from 'helpers/redux/appSlice';
import { IGetState } from 'interfaces/state';
import { IUsers } from 'interfaces/users';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from './User';
import './users.scss';

export const UsersList = () => {
  const users = useSelector<IGetState>((state) => state.data.users) as IUsers;

  return (
    <div className="list" key="usersList">
      {users.length === 0 ? <div>Loading...</div> : users.map((el) => <User el={el} key={el.id} />)}
    </div>
  );
};
