import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CharacterCard (props) {
  return (
        <Card id={props.id} key={props.id}>
          <Image src={props.src} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>{props.species} / {props.status}</Card.Meta>
            <Card.Description>Location: {props.location}</Card.Description>
            <Card.Description>Origin: {props.origin}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to='/episodes'>
              <Icon name='user' />
              Episodes
            </Link>
          </Card.Content>
        </Card>
  );
}
