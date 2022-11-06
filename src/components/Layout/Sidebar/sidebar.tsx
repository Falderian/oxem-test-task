import { sortReducer } from 'helpers/redux/appSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sidebar.scss';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const setSort = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const sort = evt.currentTarget.id;
    dispatch(
      sortReducer({
        sort: sort,
      })
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__cont">
        <span>Сортировка</span>
        <button id="by-city" className="sidebar__btn btn-city" onClick={(evt) => setSort(evt)}>
          by city
        </button>
        <button id="by-company" className="sidebar__btn" onClick={(evt) => setSort(evt)}>
          by company
        </button>
      </div>
    </div>
  );
};
