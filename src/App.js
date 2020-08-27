import React from 'react';
import './App.css';

let movies = [
  {
    "title":"Pulp Fiction",
    "date":"2004",
    "genreid": 0
  },
  {
    "title":"Bohemian Rapsody",
    "date":"2003",
    "genreid": 2
  },
  {
    "title":"Bill: Vol 2",
    "date":"1994",
    "genreid":3
  },
  {
    "title":"Avangers, War of Infinity",
    "date":"2004",
    "genreid": 1
  },
  {
    "title":"Inception",
    "date":"2003",
    "genreid": 1
  },
  {
    "title":"Reservoir dogs",
    "date":"1994",
    "genreid": 3
  },
];

let genres = [
  {
    "name" : "ALL",
    "id": 0
  },
  {
    "name" : "Action & Adventure",
    "id": 1
  },
  {
    "name" : "Drama, Biography, Music",
    "id": 2
  },
  {
    "name" : "Oscar winning Movie",
    "id": 3
  }
];

let sortBy = ["RELEASE DATE", "TITLE", "GENRE"];

const MoviesMain = (props) =>
(
  <>
  <Filters genres={props.genres} />
  <Counter count={props.movies.length} />
  <MoviesPalette movies={props.movies}/>
  </>
);

const Filters = (props) => 
(
  <>
    {props.genres.map(g => (<div>{g.name}</div>))}
  </>
);

const Counter = (props) => 
(
    <div>{props.count} movies found</div> 
);

const MoviesPalette = (props) => 
(
  <>
    {props.movies.map(m => (<MovieCard movie={m} />))}
  </>
);

const MovieCard = (props) => 
(
  <div>
    <div>{props.movie.title}</div>
    <div>{props.movie.date}</div>
    <div>{props.movie.genre}</div>
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
