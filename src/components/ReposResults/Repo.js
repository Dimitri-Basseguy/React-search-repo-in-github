import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image, Icon, Popup,
} from 'semantic-ui-react';

const Repo = ({
  name, description, owner, watchers, html_url, stargazers_count,
}) => (
  <Popup trigger={
    (
      <Card href={html_url} target="blank">
        <Image src={owner.avatar_url} wrapped ui={false} />
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
    )
  }
  >
    <Popup.Header>Star :</Popup.Header>
    <Popup.Content>
      {stargazers_count}
    </Popup.Content>
  </Popup>
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
