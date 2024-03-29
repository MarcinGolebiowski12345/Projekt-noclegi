import React, { createContext, useEffect, useState } from 'react';

import request from '../helpers/request';

export const StoreContext = createContext(null);
const StoreProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [users, setUsers] = useState(null);
    const [filterActive, setFiltrActive] = useState(true);
    const [selectRegion, setSelectRegion] = useState("");

    const fetchData = async () => {
        const res = await request.get('/hotels');
        const data = res.data;
        setHotels(data);
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
            filterActive,
            setFiltrActive,
            selectRegion,
            setSelectRegion,
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
