import { IUsers } from 'interfaces/users';
import React from 'react';
import { User } from './User';
import './users.scss';

export const UsersList = ({ users }: { users: IUsers }) => {
  return (
    <div className="list" key="usersList">
      {users.map((el) => (
        <User el={el} key={el.id} users={users} />
      ))}
    </div>
  );
};
