import React from 'react';

export const UserComment = () => {
  return (
    <div className="userpage__comment">
      <label className="userpage__label">Comment</label>
      <textarea className="userpage__textarea" disabled></textarea>
    </div>
  );
};
