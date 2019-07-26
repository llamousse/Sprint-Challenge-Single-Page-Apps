import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

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
                <Card id={data.id} key={index}>
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
