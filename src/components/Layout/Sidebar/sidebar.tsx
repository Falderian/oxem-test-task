import React from 'react';
import './sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__cont">
        <span>Сортировка</span>
        <button className="sidebar__btn btn-city">по городу</button>
        <button className="sidebar__btn">по компании</button>
      </div>
    </div>
  );
};
