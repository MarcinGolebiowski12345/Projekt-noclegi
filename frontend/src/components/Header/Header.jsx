import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import LoginForm from '../LoginForm.jsx/LoginForm';

const style = bemCssModules(HeaderStyles)

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { users, setUsers } = useContext(StoreContext);

    const handleOnClose = () => setIsModalOpen(false);

    const handleOnClick = () => {
        if (Boolean(users)) {
            setUsers(null)
        } else {
            setIsModalOpen(true);
        }
    }

    const setProperlyLabel = Boolean(users) ? 'Wyloguj się' : 'Zaloguj się';

    return (
        <header className={style()}>
            <div className={style('logo-wrapper')} />
            <h1 className={style('title')}>Noclegi dla rodzin</h1>
            <button onClick={handleOnClick}>{setProperlyLabel}</button>
            <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} />
        </header>
    );
};

export default Header;

