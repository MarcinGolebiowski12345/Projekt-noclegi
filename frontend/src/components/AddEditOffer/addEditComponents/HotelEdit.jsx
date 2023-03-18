import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import Modal from '../../Modal/Modal';
import { StoreContext } from '../../../store/StoreProvider';
import request from '../../../helpers/request';

import { default as HotelEditStyles } from './HotelEdit.module.scss';

const style = bemCssModules(HotelEditStyles);

const HotelEdit = ({
    hideEdit,
    isEditMode = true,
    isOpenEdit,
    _id,
    name = '',
    region = '',
    place = '',
    advantages = '',
    owner = '',
    price = 0,
}) => {
    const [formName, setFormName] = useState(name);
    const [formRegion, setFormRegion] = useState(region);
    const [formPlace, setFormPlace] = useState(place);
    const [formAdvantages, setFormAdvantages] = useState(advantages);
    //const [formOwner, setFormOwner] = useState(owner);
    const [formPrice, setFormPrice] = useState(price);

    const { hotels, setHotels } = useContext(StoreContext);
    const { users } = useContext(StoreContext);

    const handleOnChangeName = event => setFormName(event.target.value);
    const handleOnChangeRegion = event => setFormRegion(event.target.value);
    const handleOnChangePlace = event => setFormPlace(event.target.value);
    const handleOnChangeAdvantages = event => setFormAdvantages(event.target.value);
    //const handleOnChangeOwner = event => setFormOwner(event.target.value);
    const handleOnChangePrice = event => setFormPrice(event.target.value);

    const handleOnSubmit = async event => {
        event.preventDefault();

        const hotelObiect = {
            name: formName,
            _id,
            region: formRegion,
            place: formPlace,
            advantages: formAdvantages,
            owner: users.name,
            price: Number(formPrice),
        };
        if (isEditMode) {
            console.log(hotels);
            const { data, status } = await request.put('/hotels', hotelObiect);
            if (status === 201) {
                setHotels(data);
            }
        } else {
            const { data, status } = await request.post('/hotels', hotelObiect);
            if (status === 200) {
                setHotels(data);
            }
        }
        hideEdit();
    };

    const optionsLabel = isEditMode ? 'Akutalizuj ofertę' : 'Dodaj ofertę';

    return (
        <Modal handleOnClose={hideEdit} isOpen={isOpenEdit}>
            <div className={style()}>
                <form className={style('form')} method="submit" onSubmit={handleOnSubmit}>
                    <div className={style('form-row')} >
                        <label>
                            Nazwa:
                            <input className={style('input')} onChange={handleOnChangeName} type="text" value={formName} />
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Region:
                            <input className={style('input')} onChange={handleOnChangeRegion} type="text" value={formRegion} />
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Miasto:
                            <input className={style('input')} onChange={handleOnChangePlace} type="text" value={formPlace} />
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            Zalety:
                            <input className={style('input')} onChange={handleOnChangeAdvantages} type="text" value={formAdvantages} />
                        </label>
                    </div>
                    <div className={style('form-row')}>
                        <label>
                            cena:
                            <input className={style('input')} onChange={handleOnChangePrice} type="number" value={formPrice} />
                        </label>
                    </div>
                    <button type="submit">{optionsLabel}</button>
                    <button onClick={hideEdit} type="button">Anuluj</button>
                </form>
            </div>
        </Modal>
    );
};

export default HotelEdit;

/*<div className={style('form-row')}>
                       <label>
                           Właściciel:
                           <input className={style('input')} onChange={handleOnChangeOwner} type="text" value={formOwner} />
                       </label>
                   </div>*/