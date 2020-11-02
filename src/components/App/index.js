// == Import npm
import React from 'react';
// import { Image } from 'semantic-ui-react';

// == Import
import logo from 'src/assets/images/logo-github.png';

import Message from '../Message';
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';

import reposData from '../../data/repos';

import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <img className="header--img" src={logo} alt="" />
    </header>
    <SearchBar />
    <Message />
    <ReposResults repos={reposData.items} />
    <footer>Made by Dimitri Basseguy</footer>
  </div>
);

// == Export
export default App;
