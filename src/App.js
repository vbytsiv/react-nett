import React from 'react';
import './App.css';
import {genres, movies, sortBy} from './data.js';
import img from './img/1.svg';

const MoviesMain = (props) =>
(
  <>
  <Filters genres={props.genres} />
  <Counter count={props.movies.length} />
  <MoviesPalette movies={props.movies} genres={props.genres}/>
  </>
);

const Filters = (props) => 
(
  <>
    {props.genres.map(g => (<button className="genreButton">{g.name}</button>))}
  </>
);

const Counter = (props) => 
(
    <div><b>{props.count}</b> movies found</div> 
);

const MoviesPalette = (props) => 
(
  <div className="flex-container">
      {props.movies.map(m => (<MovieCard movie={m} genre={props.genres[m.genreid]} />))}
  </div>
);

const MovieCard = (props) => 
(
  <div className="card">
    <img src={img}/>
    <div className="flex-container">
      <div>
        <div>{props.movie.title}</div>
        <div>{props.movie.date}</div>
      </div>
      <div className="test">{props.genre.name}</div>
    </div>
  </div>
)

function App() {
  return (
    <div className="App">
      <MoviesMain movies={movies} genres={genres} />
    </div>
  );
}

export default App;
