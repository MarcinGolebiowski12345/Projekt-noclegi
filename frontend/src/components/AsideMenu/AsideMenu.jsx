import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { default as AsideMenuStyles } from './AsideMenu.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import UserMenu from './asideComponents/UserMenu';
import AdminMenu from './asideComponents/AdminMenu';

const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = 1;

const AsideMenu = () => {
    const { user } = useContext(StoreContext);

    const adminMenuComponent = user && user.admin === ADMIN_TYPE
        ? <AdminMenu />
        : null;

    return (
        <section className={style()}>
            <UserMenu isUserLogged={Boolean(user)} />
        </section>
    );
};

export default AsideMenu;