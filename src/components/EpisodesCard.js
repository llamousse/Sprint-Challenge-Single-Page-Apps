import React from 'react'
import { Card } from 'semantic-ui-react';

export default function EpisodesCard(props) {
  return (
    <Card id={props.id} key={props.id}>
      <Card.Content>
        <Card.Header>{props.episode}: {props.name}</Card.Header>
        <Card.Meta>Air Date: {props.airDate}</Card.Meta>
      </Card.Content>
      <Card.Content extra>{props.chars} characters</Card.Content>
    </Card>
  );
}
