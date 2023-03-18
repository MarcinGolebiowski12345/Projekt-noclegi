import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import bemCssModules from 'bem-css-modules';
import { default as RegisterFormStyles } from './RegisterForm.module.scss';
import request from '../../helpers/request';

const style = bemCssModules(RegisterFormStyles);

const RegisterForm = ({ handleOnClose, isModalOpen }) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    //const [validateMessage, setValidateMessage] = useState('');

    const handleOnCloseRegister = event => {
        event.preventDefault();
        handleOnClose();
    };

    const resetStateOfInputs = () => {
        setName('');
        setPassword('');
        setLogin('');
        setEmail('');
        setValidateMessage('');
    };

    const handleOnSubmit = async event => {
        event.preventDefault();
        const res = await request.post(
            '/addUsers',
            { name, password, login, email }
        );
        resetStateOfInputs();
        handleOnClose();
        const data = res.data;
        console.log(data);
    };
    const handleOnChangeName = ({ target }) => setName(target.value);
    const handleOnChangeLogin = ({ target }) => setLogin(target.value);
    const handleOnChangePassword = ({ target }) => setPassword(target.value);
    const handleOnChangeEmail = ({ target }) => setEmail(target.value);

    return (
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
            <form method="post" onSubmit={handleOnSubmit}>
                <div>
                    <label>
                        imie:
                        <input onChange={handleOnChangeName} type="text" value={name} />
                    </label>
                </div>
                <div>
                    <label>
                        login:
                        <input onChange={handleOnChangeLogin} type="text" value={login} />
                    </label>
                </div>
                <div>
                    <label>
                        hasło:
                        <input onChange={handleOnChangePassword} type="password" value={password} />
                    </label>
                </div>
                <div>
                    <label>
                        email:
                        <input onChange={handleOnChangeEmail} type="text" value={email} />
                    </label>
                </div>
                <div>
                    <button type="submit">Zarejestruj się</button>
                    <button onClick={handleOnCloseRegister} type="button">Anuluj</button>
                </div>
            </form>
        </Modal >
    );
};

export default RegisterForm;