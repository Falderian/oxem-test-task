import { sortReducer, usersReducer } from 'helpers/redux/appSlice';
import { IGetState } from 'interfaces/state';
import { IUsers } from 'interfaces/users';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sidebar.scss';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const users = useSelector<IGetState>((state) => state.data.users) as unknown as IUsers;
  const tempUsers = [...users];
  const handleSortClick = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sort = evt.currentTarget.id;
    const sortedUsers = await sortUsers(sort);
    dispatch(usersReducer(sortedUsers));
  };

  const sortUsers = (sort: string) => {
    let sortedUsers;
    if (sort === 'by-city') {
      sortedUsers = sortByCity();
    } else {
      sortedUsers = sortByCompany();
    }
    return sortedUsers;
  };

  const sortByCity = () => {
    const sortedUsers = tempUsers.sort((a, b) => {
      if (a.address.city === b.address.city) return 0;
      return a.address.city > b.address.city ? 1 : -1;
    });
    return sortedUsers;
  };
  const sortByCompany = () => {
    const sortedUsers = tempUsers.sort((a, b) => {
      if (a.company.name === b.company.name) return 0;
      return a.company.name > b.company.name ? 1 : -1;
    });
    return sortedUsers;
  };
  return (
    <div className="sidebar">
      <div className="sidebar__cont">
        <span>Сортировка</span>
        <button
          id="by-city"
          className="sidebar__btn btn-city"
          onClick={(evt) => handleSortClick(evt)}
        >
          by city
        </button>
        <button id="by-company" className="sidebar__btn" onClick={(evt) => handleSortClick(evt)}>
          by company
        </button>
      </div>
    </div>
  );
};
