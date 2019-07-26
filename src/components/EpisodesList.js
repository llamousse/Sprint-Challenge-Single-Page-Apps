import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

export default function EpisodesList() {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then(res => {
                console.log(res.data.results);
                setEpisode(res.data.results);
            })
            .catch(err => {
                console.log("Error! Rick and Morty want some privacy: ", err);
            })
    }, [])

    return (
        <section className='character-list grid-view'>
            {episode.map((data, index) => (
                <Card id={data.id} key={index}>
                    <Card.Content>
                        <Card.Header>{data.episode}: {data.name}</Card.Header>
                        <Card.Meta>Air Date: {data.air_date}</Card.Meta>
                        {/* <Card.Description>{data.characters.length} characters</Card.Description> */}
                    </Card.Content>
                    <Card.Content extra>{data.characters.length} characters</Card.Content>
                </Card>
            ))}
        </section>
    );
}
