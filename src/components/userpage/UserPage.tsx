import { IGetState } from 'interfaces/state';
import { IUser, IUsers } from 'interfaces/users';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserComment } from './usercomment/UserComment';
import { UserInput } from './userinput/UserInput';
import './userpage.scss';

export const UserPage = () => {
  const { id } = useParams();
  const users = useSelector<IGetState>((state) => state.data.users.sortedUsers) as IUsers;
  const item = users.find((el) => el.id === Number(id));

  const handleClickBtnEdit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const inputs = document.querySelectorAll('.userpage__input');
    const textarea = document.querySelector('.userpage__textarea') as HTMLTextAreaElement;
    textarea.disabled = false;
    for (const item of inputs) {
      (item as HTMLInputElement).disabled = false;
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const tempUser: IUser = {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    };
    tempUser!.name = (
      evt.currentTarget.elements.namedItem('Name') as HTMLInputElement
    ).value.toString();
    tempUser!.username = (
      evt.currentTarget.elements.namedItem('User name') as HTMLInputElement
    ).value.toString();
    tempUser!.email = (
      evt.currentTarget.elements.namedItem('E-mail') as HTMLInputElement
    ).value.toString();
    tempUser!.address!.street = (
      evt.currentTarget.elements.namedItem('Street') as HTMLInputElement
    ).value.toString();
    console.log(tempUser);
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
        <UserInput name="Zip code " value={item!.address.zipcode} />
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
