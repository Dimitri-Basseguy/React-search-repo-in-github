// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
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
  // const [results, setResults] = useState(null);
  const [reposResults, setReposResults] = useState([]);
  const [nbResults, setNbresults] = useState(0);

  // Fonction utile si on veux faire du console.log()
  // setSearchValue={handleChangeSearch}
  // const handleChangeSearch = (newValue) => {
  //   setSearch(newValue);
  // };

  const loadRepos = () => {
    // console.log('on va charger les repos');
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        console.log('+ + + reposResults : + + + ', response.data.items);
        setReposResults(response.data.items);
        setNbresults(response.data.total_count);
        console.log('+ + + nbResults : + + + ', response.data.total_count);
      })
      .catch((error) => {
        console.warn('+ + + Erreur : + + +', error);
      });
  };

  const message = `La recherche a retourné ${nbResults} résultats, pour la requète : "${search}"`;

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
      <Message message={message} />
      <ReposResults repos={reposResults} />
      <footer>Made by Dimitri Basseguy</footer>
    </div>
  );
};
// == Export
export default App;
