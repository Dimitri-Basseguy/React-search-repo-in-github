import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => (
  <Form onSubmit={(event) => {
    event.preventDefault();
    handleSubmit();
  }}
  >
    <Form.Field>
      <Input
        icon="search"
        iconPosition="left"
        placeholder="Recherche..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </Form.Field>
  </Form>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
