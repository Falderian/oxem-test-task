import { getUsers } from 'api/getUsers';
import { usersReducer } from 'helpers/redux/appSlice';
import { IGetState } from 'interfaces/state';
import { IUsers } from 'interfaces/users';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './homepage.scss';
import { UsersList } from './userslist/UsersList';

export const HomePage = () => {
  const [users, setUsers] = useState<IUsers>([]);
  const dispatch = useDispatch();
  const sort = useSelector<IGetState>((state) => state.data.sort.sort);

  useEffect(() => {
    const response = getUsers();
    response.then((data) => {
      const sortedUsers = sortUsers(data);
      setUsers(sortedUsers);
      dispatch(usersReducer({ sortedUsers }));
    });
  }, [sort]);

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
    <div className="wrapper">
      <div className="header">
        <span className="header__title">Список пользователей</span>
      </div>
      <UsersList users={users} />
    </div>
  );
};
