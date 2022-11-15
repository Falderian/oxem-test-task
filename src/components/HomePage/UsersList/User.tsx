import { userReducer } from 'helpers/redux/appSlice';
import { IGetState } from 'interfaces/state';
import { IUser, IUsers } from 'interfaces/users';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const User = ({ el }: { el: IUser }) => {
  const dispatch = useDispatch();
  const users = useSelector<IGetState>((state) => state.data.users) as IUsers;

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    const id = evt.currentTarget.id;
    const user = users.find((el) => {
      return el.id === Number(id);
    });
    dispatch(userReducer({ user }));
  };

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
        <Link
          className="user__btn"
          id={el.id.toString()}
          to={`user/${el.id}`}
          onClick={(evt) => handleClick(evt)}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};
