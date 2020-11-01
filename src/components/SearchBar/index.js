import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const SearchBar = () => (
  <Form>
    <Form.Field>
      <label>Trouver un repo</label>
      <Input icon="search" iconPosition="left" placeholder="Recherche..." />
    </Form.Field>
  </Form>
);

export default SearchBar;
