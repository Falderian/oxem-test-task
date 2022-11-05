import { IUser } from 'interfaces/users';
import React from 'react';

export const User = ({ el }: { el: IUser }) => {
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
        <button className="user__btn">Подробнее</button>
      </div>
    </div>
  );
};
