import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    // https://rickandmortyapi.com/api/character/
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
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
      {character.map((data) => (
        <Card id={data.id}>
          <Image src={data.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>{data.species} / {data.status}</Card.Meta>
            <Card.Description>Location: {data.location.name}</Card.Description>
            <Card.Description>Origin: {data.origin.name}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Episodes
            </a>
          </Card.Content>
        </Card>
      ))}
    </section>
  );
}