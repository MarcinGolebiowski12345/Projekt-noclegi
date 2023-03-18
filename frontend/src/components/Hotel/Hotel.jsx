import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
//import { StoreContext } from '../../store/StoreProvider';
import { default as HotelStyles } from './Hotel.module.scss';

const style = bemCssModules(HotelStyles);

const Hotel = ({ name, region, place, advantages, owner, price }) => {

    //const { selectRegion } = useContext(StoreContext);
    //console.log(selectRegion);

    const handleOnClick = () => { };

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
                <button onClick={handleOnClick}>Zarezerwuj hotel</button>
            </article>
        </li>

    );
};

export default Hotel;