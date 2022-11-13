import { IUser, IUsers } from 'interfaces/users';
import React from 'react';
import { Link } from 'react-router-dom';

export const User = ({ el, users }: { el: IUser; users: IUsers }) => {
  return (
    <div className="user">
      <div className="user__name">
        <span className="user__title">Full name: </span> {el.name}
      </div>
      <div className="user__city">
        <span className="user__title">City: </span> {el.address.city}
      </div>
      <div className="user__footer">
        <div className="user__company">
          <span className="user__title">Company: </span> {el.company.name}
        </div>
        <Link className="user__btn" id={el.id.toString()} to={`user/${el.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
