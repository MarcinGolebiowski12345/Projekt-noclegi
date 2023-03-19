import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import HotelEdit from './addEditComponents/HotelEdit';
import OfferDetails from './addEditComponents/OfferDetails';

const AddEditOffer = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const { hotels } = useContext(StoreContext);
    const { users } = useContext(StoreContext);
    const { setFiltrActive } = useContext(StoreContext);

    useEffect(() => {
        setFiltrActive(false);
    }, []);

    const showEdit = () => setIsOpenEdit(true);
    const hideEdit = event => {
        if (event) {
            event.preventDefault();
        };
        setIsOpenEdit(false);
    };

    const hotelsElements = hotels
        .filter(hotel => users.name.includes(hotel.owner))
        .map(hotel => <OfferDetails key={hotel._id} {...hotel} />)

    return (
        <section>
            {hotelsElements}
            <button onClick={showEdit}>Dodaj nową ofertę</button>
            <HotelEdit isEditMode={false} isOpenEdit={isOpenEdit} hideEdit={hideEdit} />
        </section>
    );
};

export default AddEditOffer;
