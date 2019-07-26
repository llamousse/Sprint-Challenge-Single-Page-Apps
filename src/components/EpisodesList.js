import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodesCard from './EpisodesCard.js';

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
                <EpisodesCard
                    id={data.id}
                    index={index}
                    episode={data.episode}
                    name={data.name}
                    airDate={data.air_date}
                    chars={data.characters.length}
                />
            ))}
        </section>
    );
}
