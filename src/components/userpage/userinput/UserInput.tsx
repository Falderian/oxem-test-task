import { IUserInput } from 'interfaces/users';
import React from 'react';

export const UserInput = ({ name, value }: IUserInput) => {
  return (
    <div className="userpage__input-div">
      <label className="userpage__label">{name}</label>
      <input
        name={name}
        className="userpage__input"
        type="text"
        defaultValue={value}
        required
        disabled
      />
    </div>
  );
};
