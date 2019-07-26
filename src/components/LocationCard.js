import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  return (
    <Card id={props.id} key={props.id}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.type} - {props.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>{props.residents} residents</Card.Content>
    </Card>
  );
}
