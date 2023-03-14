import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

import { StoreContext } from '../../store/StoreProvider';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const style = bemCssModules(HeaderStyles)

const Header = () => {
    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
    const { users, setUsers } = useContext(StoreContext);

    const handleOnCloseLogin = () => setIsModalLoginOpen(false);
    const handleOnCloseRegister = () => setIsModalRegisterOpen(false);

    const handleOnClickLogin = () => {
        if (Boolean(users)) {
            setUsers(null)
        } else {
            setIsModalLoginOpen(true);
        }
    }

    const handleOnClickRegister = () => {
        setIsModalRegisterOpen(true);
    }

    const setProperlyLabelLogin = Boolean(users) ? 'Wyloguj się' : 'Zaloguj się';
    const setProperlyLabelRegister = Boolean(users) ? '' : 'Zarejestruj się';

    return (
        <header className={style()}>
            <div className={style('logo-wrapper')} />
            <h1 className={style('title')}>Noclegi dla rodzin</h1>
            <button onClick={handleOnClickLogin}>{setProperlyLabelLogin}</button>
            <button onClick={handleOnClickRegister}>{setProperlyLabelRegister}</button>
            <LoginForm handleOnClose={handleOnCloseLogin} isModalOpen={isModalLoginOpen} />
            <RegisterForm handleOnClose={handleOnCloseRegister} isModalOpen={isModalRegisterOpen} />
        </header>
    );
};

export default Header;

