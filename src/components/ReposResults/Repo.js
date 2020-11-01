import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Repo = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        Meta
      </Card.Meta>
      <Card.Description>
        Description du repository
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Repo;
