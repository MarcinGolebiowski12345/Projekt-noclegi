import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HotelStyles } from './Hotel.module.scss';

const style = bemCssModules(HotelStyles);

const Hotel = ({ name, region, place, advantages, owner, price }) => {
    return (
        <li>
            <article className={style()}>
                <h3 className={style('title')}></h3>
                <p className={style('name')}>{`Nazwa hotelu: ${name}`}</p>
                <p className={style('region')}>{`Województwo: ${region}`}</p>
                <p className={style('place')}>{`Miasto: ${place}`}</p>
                <p className={style('advanteges')}>{`Zalety: ${advantages}`}</p>
                <p className={style('price')}>{`Cena hotelu: ${price}zł`}</p>
                <p className={style('owner')}>{`Właściciel: ${owner}`}</p>

            </article>
        </li>

    );
};

export default Hotel;