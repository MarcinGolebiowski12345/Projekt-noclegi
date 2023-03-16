import React, { useState, useContext } from 'react';
import request from '../../../helpers/request';
import { StoreContext } from '../../../store/StoreProvider';
import HotelEdit from './HotelEdit';

const OfferDetails = (props) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const { setHotels } = useContext(StoreContext);
    const { _id, name } = props;


    const showEdit = () => setIsOpenEdit(true);
    const hideEdit = event => {
        if (event) {
            event.preventDefault();
        };
        setIsOpenEdit(false);
    };

    const handleDeleteHotel = async () => {
        try {
            const { status } = await request.delete(`/hotels/${_id}`);

            if (status === 204) {
                setHotels(prev => prev.filter(hotel => hotel._id !== _id));
            }
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <details>
            <summary>{name}</summary>
            <button onClick={showEdit}>Edytuj</button>
            <button onClick={handleDeleteHotel}>Usuń</button>
            <HotelEdit isOpenEdit={isOpenEdit} hideEdit={hideEdit} {...props} />
        </details>
    );
};

export default OfferDetails;