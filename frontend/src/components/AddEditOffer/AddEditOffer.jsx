import React, { useState, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import HotelEdit from './addEditComponents/HotelEdit';
import OfferDetails from './addEditComponents/OfferDetails';

const AddEditOffer = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const { hotels } = useContext(StoreContext);

    const showEdit = () => setIsOpenEdit(true);
    const hideEdit = event => {
        if (event) {
            event.preventDefault();
        };
        setIsOpenEdit(false);
    };

    const consol = console.log(hotels);
    const hotelsElements = hotels.map(hotel => <OfferDetails key={hotel._id} {...hotel} />)

    return (
        <section>
            {consol}
            {hotelsElements}
            <button onClick={showEdit}>Dodaj nową ofertę</button>
            <HotelEdit isEditMode={false} isOpenEdit={isOpenEdit} hideEdit={hideEdit} />
        </section>
    );
};

export default AddEditOffer;
// {console.log(hotels)}