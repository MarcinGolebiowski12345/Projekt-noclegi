import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import Hotel from '../Hotel/Hotel';
import { StoreContext } from '../../store/StoreProvider';

import { default as HotelsStyles } from './Hotels.module.scss';

const style = bemCssModules(HotelsStyles);

const Hotels = () => {
	const { hotels } = useContext(StoreContext);

	const hotelsElements = hotels.map(hotel => <Hotel key={hotel._id} {...hotel} />);

	return (
		<section className={style()}>
			<h2 className={style('title')}></h2>
			<ul className={style('list')}>
				{hotelsElements}
			</ul>
		</section>
	);
};

export default Hotels;