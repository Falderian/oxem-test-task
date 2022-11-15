import { getUsers } from 'api/getUsers';
import { usersReducer } from 'helpers/redux/appSlice';
import { IGetState } from 'interfaces/state';
import { IUsers } from 'interfaces/users';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './homepage.scss';
import { UsersList } from './userslist/UsersList';

export const HomePage = () => {
  const sort = useSelector<IGetState>((state) => state.data.sort);
  const users = useSelector<IGetState>((state) => state.data.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((users as IUsers).length === 0) {
      const response = getUsers();
      response.then((data) => {
        dispatch(usersReducer(data));
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <span className="header__title">Список пользователей</span>
      </div>
      <UsersList />
    </div>
  );
};
