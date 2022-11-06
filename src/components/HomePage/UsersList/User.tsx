import { userIdReducer } from 'helpers/redux/appSlice';
import { IUser } from 'interfaces/users';
import React from 'react';
import { useDispatch } from 'react-redux';

export const User = ({ el }: { el: IUser }) => {
  const dispatch = useDispatch();

  const saveUserId = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = evt.currentTarget.id;
    dispatch(
      userIdReducer({
        userId: id,
      })
    );
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
        <button className="user__btn" id={el.id.toString()} onClick={(evt) => saveUserId(evt)}>
          Подробнее
        </button>
      </div>
    </div>
  );
};
