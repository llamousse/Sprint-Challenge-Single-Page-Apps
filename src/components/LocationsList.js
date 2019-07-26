import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        // https://rickandmortyapi.com/api/location/
        // Important: verify the 2nd `useEffect` parameter: the dependancies array!
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
            {location.map((data) => (
                <Card id={data.id}>
                    <Card.Content>
                        <Card.Header>{data.type}</Card.Header>
                        <Card.Description>{data.type} - {data.dimension}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>{data.residents.length} residents</Card.Content>
                </Card>
            ))}
        </section>
    );
}
