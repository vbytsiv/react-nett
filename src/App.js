import React from 'react';
import MoviesMain from './MoviesMain/MoviesMain.js'
import Header from './Header/Header.js'
import './App.css';
import {genres, movies, sortBy} from './data.js';

function App() {
  return (
    <div className="App">

      <div className="columnMain">
        <Header className="header" genres={genres}/>        
        <MoviesMain movies={movies} genres={genres} sortBy={sortBy} />
      </div>

    </div>
  );
}

export default App;
