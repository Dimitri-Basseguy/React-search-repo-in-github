/* eslint-disable no-console */
// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
// import { Image } from 'semantic-ui-react';

// == Import
import logo from 'src/assets/images/logo-github.png';

import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';

import './style.scss';

// == Composant
const App = () => {
  /** Valeur du champ de recherche */
  const [search, setSearch] = useState('');
  const [reposResults, setReposResults] = useState([]);
  const [nbResults, setNbresults] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  /** Valeur du champ de recherche */
  const [displayMessage, setDisplayMessage] = useState(false);

  // Fonction utile si on veux faire du console.log()
  // setSearchValue={handleChangeSearch}
  // const handleChangeSearch = (newValue) => {
  //   setSearch(newValue);
  // };

  const hideMessage = () => {
    setDisplayMessage(false);
  };

  const loadRepos = () => {
    // Affichage du loarder
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setReposResults(response.data.items);
        setNbresults(response.data.total_count);
        setShowError(false);
      })
      .catch((error) => {
        // console.log('+ + + Errors : + + +', { error });
        setShowError(true);
        setReposResults([]);
        // setNbresults(0);
      })
      .finally(() => {
        setLoading(false);
        setDisplayMessage(true);
      });
  };

  let message;
  if (showError) {
    message = 'Une erreur s\'est produite';
  }
  else if (nbResults === 0) {
    message = `La recherche n'a retourné aucun résultat, pour la requète : "${search}"`;
  }
  else if (nbResults > 1) {
    message = `La recherche a retourné ${nbResults} résultats, pour la requète : "${search}"`;
  }
  else {
    message = `La recherche a retourné ${nbResults} résultat, pour la requète : "${search}"`;
  }

  return (
    <div className="app">
      <header className="header">
        <img className="header--img" src={logo} alt="" />
        <h1 className="header--title">Recherchez un repository sur github</h1>
      </header>
      <SearchBar
        searchValue={search}
        setSearchValue={setSearch}
        handleSubmit={loadRepos}
      />
      {displayMessage && (
        <Message message={message} hideMessage={hideMessage} />
      )}
      <ReposResults repos={reposResults} />
      {loading && (
        <Dimmer active inverted>
          <Loader size="large" />
        </Dimmer>
      )}
      <footer className="footer">Made by Dimitri Basseguy</footer>
    </div>
  );
};
// == Export
export default App;
