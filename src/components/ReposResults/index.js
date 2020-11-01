import React from 'react';
import { Card } from 'semantic-ui-react';

import Repo from './Repo';

const ReposResults = () => (
  <Card.Group itemsPerRow="4">
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
  </Card.Group>
);

export default ReposResults;
