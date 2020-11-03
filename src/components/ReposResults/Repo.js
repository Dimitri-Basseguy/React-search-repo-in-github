import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react';

const Repo = ({
  name, description, owner, watchers, html_url,
}) => (
  <Card>
    <Image
      src={owner.avatar_url} wrapped ui={false}
      as="a"
      size="medium"
      href={html_url}
      target="_blank"
    />

    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {owner.login}
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="eye" />
      {watchers} Watchers
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  watchers: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
