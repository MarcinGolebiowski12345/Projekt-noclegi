import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { default as AsideMenuStyles } from './AsideMenu.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import UserMenu from './asideComponents/UserMenu';
import AdminMenu from './asideComponents/AdminMenu';

const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = "admin";

const AsideMenu = () => {
    const { users } = useContext(StoreContext);

    const adminMenuComponent = users && users.admin === ADMIN_TYPE
        ? <AdminMenu />
        : null;

    return (
        <section className={style()}>
            <div className={style('nav-wrapper')}>
                <UserMenu isUserLogged={Boolean(users)} />
                {adminMenuComponent}
            </div>
        </section>
    );
};

export default AsideMenu;