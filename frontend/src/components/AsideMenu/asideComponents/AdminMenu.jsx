import React from 'react';
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as AsideMenuStyles } from '../AsideMenu.module.scss';

const style = bemCssModules(AsideMenuStyles);

const AdminMenu = () => (
    <>
        <p className={style('title')}>Administrator</p>
        <nav>
            <ul>
                <li className={style('link')}>
                    <Link to="/">Oferty Hoteli</Link>
                </li>
                <li className={style('link')}>
                    <Link to="/manage-offer">zarządzaj </Link>
                </li>
            </ul>
        </nav>
    </>
);

export default AdminMenu;