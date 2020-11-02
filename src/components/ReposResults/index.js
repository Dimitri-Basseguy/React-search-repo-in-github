import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Repo from './Repo';

const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow="4">
    {repos.map((repo) => (
      <Repo key={repo.id} {...repo} />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default ReposResults;
