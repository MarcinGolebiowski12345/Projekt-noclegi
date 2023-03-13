import React, { useContext } from 'react';
import bemCssModule from 'bem-css-modules';
import Hotel from '../Hotel/Hotel';

import { default as UserHotelsStyle } from './UserHotels.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const style = bemCssModule(UserHotelsStyle);

const UserHotels = () => {
    const { users, hotels } = useContext(StoreContext);

    const addedHotels = hotels
        .filter(hotel => users.name.includes(hotel.owner))
        .map(hotel => <Hotel isUserContext={true} key={hotel._id} {...hotel} />)
    return (
        <section className={style()}>
            <h2 className={style('title')}>Twoje dodane oferty hoteli</h2>
            <ul className={style('list')}>
                {addedHotels}
            </ul>
        </section>
    );
};

export default UserHotels;