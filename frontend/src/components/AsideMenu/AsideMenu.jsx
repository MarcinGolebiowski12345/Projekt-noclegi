import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { default as AsideMenuStyles } from './AsideMenu.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import UserMenu from './asideComponents/UserMenu';
import AdminMenu from './asideComponents/AdminMenu';
import FilterHotels from '../FilterHotel/FilterHotels';

const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = "admin";

const AsideMenu = () => {
    const { users } = useContext(StoreContext);

    const adminMenuComponent = users && users.admin === ADMIN_TYPE
        ? <AdminMenu />
        : null;

    const userMenuComponent = users && users.admin !== ADMIN_TYPE
        ? <UserMenu isUserLogged={Boolean(users)} {...users} />
        : null;

    return (
        <section className={style()}>
            <div className={style('nav-wrapper')}>
                {userMenuComponent}
                {adminMenuComponent}
                <FilterHotels />
            </div>
        </section>
    );
};

export default AsideMenu;