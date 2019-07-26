import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.log("Error! Rick and Morty are currently on vacation: ", err);
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {character.map((data, index) => (
        <CharacterCard 
          id={data.id}
          index={index}
          src={data.image}
          name={data.name}
          species={data.species}
          status={data.status}
          location={data.location.name}
          origin={data.origin.name}
        /> 
      ))}
    </section>
  );
}