import React, { useContext, useEffect, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import Modal from '../Modal/Modal';
import { StoreContext } from '../../store/StoreProvider';
import request from '../../helpers/request';

import { default as LoginFormStyles } from './LoginForm.module.scss';

const style = bemCssModules(LoginFormStyles);

const LoginForm = ({ handleOnClose, isModalOpen }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const { setUsers } = useContext(StoreContext);

    const handleOnChangeLogin = ({ target }) => setLogin(target.value);
    const handleOnChangePassword = ({ target }) => setPassword(target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();
    }

    const resetStateOfInputs = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');
    };

    const handleOnSubmit = async event => {
        event.preventDefault();
        const res = await request.post(
            '/users',
            { login, password }
        );
        if (res.status === 200) {
            const data = res.data;
            setUsers(data);
            resetStateOfInputs();
            handleOnClose();
        } else {
            setValidateMessage(res.data.message);
            setLogin('');
            setPassword('');
        }
    }

    useEffect(() => {
        if (isModalOpen) {
            resetStateOfInputs();
        }
    }, [isModalOpen]);

    const validateMessageComponent = validateMessage.length
        ? <p className={style('validate-message')}>{validateMessage}</p>
        : null;

    return (
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
            {validateMessageComponent}
            <form className={style()} method="post" onSubmit={handleOnSubmit}>
                <div className={style('row')}>
                    <label>
                        Login:
                        <input onChange={handleOnChangeLogin} type="text" value={login} />
                    </label>
                </div>
                <div className={style('row')}>
                    <label>
                        Hasło:
                        <input onChange={handleOnChangePassword} type="password" value={password} />
                    </label>
                </div>
                <div className={style('row')}>
                    <button type="submit">Zaloguj</button>
                    <button onClick={handleOnCloseModal} type="button">Anuluj</button>
                </div>
            </form>
        </Modal>
    );
};

export default LoginForm;
