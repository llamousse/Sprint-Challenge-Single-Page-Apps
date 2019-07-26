import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                console.log(res.data.results);
                setLocation(res.data.results);
            })
            .catch(err => {
                console.log("Error! Rick and Morty want some privacy: ", err);
            })
    }, [])

    return (
        <section className='character-list grid-view'>
            {location.map((data, index) => (
                <LocationCard 
                    id={data.id}
                    key={data.index}
                    name={data.name}
                    type={data.type}
                    dimension={data.dimension}
                    residents={data.residents.length}
                />
            ))}
        </section>
    );
}
