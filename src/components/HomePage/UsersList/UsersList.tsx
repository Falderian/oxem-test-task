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
  const sort = useSelector<IGetState>((state) => state.data.sort);

  const sortUsers = (users: IUsers) => {
    let sortedUsers;
    if (sort === 'by-city') {
      sortedUsers = sortByCity(users);
    } else {
      sortedUsers = sortByCompany(users);
    }
    return sortedUsers;
  };

  const sortByCity = (users: IUsers) => {
    const sortedUsers = users.sort((a, b) => {
      if (a.address.city === b.address.city) return 0;
      return a.address.city > b.address.city ? 1 : -1;
    });
    return sortedUsers;
  };
  const sortByCompany = (users: IUsers) => {
    const sortedUsers = users.sort((a, b) => {
      if (a.company.name === b.company.name) return 0;
      return a.company.name > b.company.name ? 1 : -1;
    });
    return sortedUsers;
  };

  return (
    <div className="list" key="usersList">
      {users.length === 0 ? <div>Loading...</div> : users.map((el) => <User el={el} key={el.id} />)}
    </div>
  );
};
