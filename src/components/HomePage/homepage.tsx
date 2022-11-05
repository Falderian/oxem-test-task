import { getUsers } from 'api/getUsers';
import { IUsers } from 'interfaces/users';
import React, { useEffect, useState } from 'react';
import './homepage.scss';
import { UsersList } from './UsersList/UsersList';

export const HomePage = () => {
  const [users, setUsers] = useState<IUsers>([]);

  useEffect(() => {
    const response = getUsers();
    response.then((data) => {
      setUsers(data);
    });
  });
  return (
    <div className="wrapper">
      <div className="header">
        <span className="header__title">Список пользователей</span>
      </div>
      <UsersList users={users} />
    </div>
  );
};
