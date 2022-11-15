import { usersReducer } from 'helpers/redux/appSlice';
import { IGetState, IGetStateUser } from 'interfaces/state';
import { IUser, IUsers } from 'interfaces/users';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserComment } from './usercomment/UserComment';
import { UserInput } from './userinput/UserInput';
import './userpage.scss';

export const UserPage = () => {
  const users = useSelector<IGetState>((state) => state.data.users) as IUsers;
  const user = useSelector<IGetState>((state) => state.data.user);
  const item = (user as IGetStateUser).user as unknown as IUser;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickBtnEdit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const inputs = document.querySelectorAll('.userpage__input');
    const textarea = document.querySelector('.userpage__textarea') as HTMLTextAreaElement;
    textarea.disabled = false;
    for (const item of inputs) {
      (item as HTMLInputElement).disabled = false;
    }
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await updateUsers(evt);
    navigate('/');
  };

  const updateUsers = async (evt: React.FormEvent<HTMLFormElement>) => {
    const formInputs = evt.currentTarget.elements;
    const tempUser: IUser = JSON.parse(JSON.stringify(item));
    tempUser!.name = (formInputs.namedItem('Name') as HTMLInputElement).value.toString();
    tempUser!.username = (formInputs.namedItem('User name') as HTMLInputElement).value.toString();
    tempUser!.email = (formInputs.namedItem('E-mail') as HTMLInputElement).value.toString();
    tempUser!.address!.street = (
      formInputs.namedItem('Street') as HTMLInputElement
    ).value.toString();
    tempUser!.address!.city = (formInputs.namedItem('City') as HTMLInputElement).value.toString();
    tempUser!.address!.zipcode = (
      formInputs.namedItem('Zip-code') as HTMLInputElement
    ).value.toString();
    tempUser!.phone = (formInputs.namedItem('Phone') as HTMLInputElement).value.toString();
    tempUser!.website = (formInputs.namedItem('Website') as HTMLInputElement).value.toString();
    const updatedUsers = replaceOldUserWithUpdated(tempUser);
    dispatch(usersReducer(updatedUsers));
  };

  const replaceOldUserWithUpdated = (user: IUser) => {
    const tempUsers = [...users];
    const index = users.indexOf(item!);
    tempUsers[index] = user;
    return tempUsers;
  };

  return (
    <section className="userpage">
      <header className="userpage__header">
        <span className="userpage__title">User profile</span>
        <button className="userpage__btn-edit" onClick={(evt) => handleClickBtnEdit(evt)}>
          Edit
        </button>
      </header>
      <form
        className="userpage__form"
        id={item!.id.toString()}
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <UserInput name="Name" value={item!.name} />
        <UserInput name="User name" value={item!.username} />
        <UserInput name="E-mail" value={item!.email} />
        <UserInput name="Street" value={item!.address.street} />
        <UserInput name="City" value={item!.address.city} />
        <UserInput name="Zip-code" value={item!.address.zipcode} />
        <UserInput name="Phone" value={item!.phone} />
        <UserInput name="Website" value={item!.website} />
        <UserComment />
      </form>
      <div className="btn-wrapper">
        <button type="submit" className="userpage__btn-submit" form={`${item!.id.toString()}`}>
          Send
        </button>
      </div>
    </section>
  );
};
