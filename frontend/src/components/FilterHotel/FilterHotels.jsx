import React, { useContext, useMemo, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const FilterHotels = () => {
    const { hotels } = useContext(StoreContext);
    const { setSelectRegion } = useContext(StoreContext);
    const [regionName, setRegionName] = useState([]);

    useMemo(() => {
        const table = [];
        hotels.filter(hotel => {
            if (!table.includes(hotel.region)) {
                table.push(hotel.region);
            }
        });
        setRegionName(table);
        console.log("usememo");
    }, [hotels]);

    const handleChangeSeelectValue = event => { setSelectRegion(event.target.value) };

    const optionsRegion = regionName.map(regionName => <option key={regionName}>{regionName}</option>)

    return (
        <div>
            <h1>Ustaw filtr</h1>
            <select name="region" onChange={handleChangeSeelectValue}>
                <option>wybierz region</option>
                {optionsRegion}
            </select>
        </div>
    );
};

export default FilterHotels;