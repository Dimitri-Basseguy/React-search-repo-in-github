import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => {
  // déclaration d'unr ref pour ciblé un élément
  const searchInput = useRef(null);

  useEffect(() => {
    // Mise en place du focus sur l'input
    searchInput.current.focus();
  }, []);

  return (
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
          ref={searchInput} // ciblage de l'élément
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </Form.Field>
    </Form>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
