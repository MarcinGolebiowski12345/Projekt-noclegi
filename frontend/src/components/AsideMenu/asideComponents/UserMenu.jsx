import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as AsideMenuStyles } from '../AsideMenu.module.scss';

const style = bemCssModules(AsideMenuStyles);

const UserMenu = ({ isUserLogged, ...users }) => {

    return (
        <>
            <p className={style('title')}>{users.name}</p>
            <nav>
                <ul>
                    <li className={style('link')}>
                        <Link to="/">Oferty Hoteli</Link>
                    </li>
                    {isUserLogged && <li className={style('link')}><Link to="/my-offer">Moje oferty hoteli</Link></li>}
                    {isUserLogged && <li className={style('link')}><Link to="/addEdit-offer">Dodaj/Edytuj ofertę</Link></li>}
                </ul>
            </nav>
        </>
    );
};

export default UserMenu;