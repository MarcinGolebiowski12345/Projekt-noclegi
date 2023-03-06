import React, { createContext, useEffect, useState } from 'react';
import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [users, setUsers] = useState(null);

    const fetchData = async () => {
        const { dataUsers } = await request.get('/users');
        setUsers(dataUsers.users);
        const { dataHotels } = await request.get('/hotels');
        setHotels(dataHotels.hotels);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StoreContext.Provider value={{
            hotels,
            setHotels,
            users,
            setUsers,
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
