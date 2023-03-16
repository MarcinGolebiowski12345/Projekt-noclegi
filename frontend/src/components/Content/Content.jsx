import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';
import Hotels from '../Hotels/Hotels';
import UserHotels from '../UserHotels/UserHotels';

import { default as ContentStyle } from './Content.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import AddEditOffer from '../AddEditOffer/AddEditOffer';

const style = bemCssModules(ContentStyle);

const ADMIN_TYPE = "admin";

const Content = () => {

    const { users } = useContext(StoreContext)
    const isUserLogged = Boolean(users);
    const isAdmin = users && users.admin === ADMIN_TYPE;

    return (
        <main className={style()}>
            <Routes>
                {<Route exact path="/" element={<Hotels />} />}
                {isUserLogged && <Route exact path="/my-offer" element={<UserHotels />} />}
                {isUserLogged && <Route exact path="/addEdit-offer" element={<AddEditOffer />} />}
                {isAdmin && <Route exact path="/manage-offer" element={<p>Zarządzaj użytkownikami</p>} />}
                {<Route path="*" element={<Navigate to="/" />} />}
            </Routes>
        </main>
    );
};

export default Content;

