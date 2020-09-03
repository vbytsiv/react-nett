import React from 'react';
import MoviesMain from './MoviesMain/MoviesMain.js'
import Header from './Header/Header.js'
import './App.css';
import {genres, movies, sortBy} from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesMain movies={movies} genres={genres} sortBy={sortBy} />
    </div>
  );
}

export default App;
