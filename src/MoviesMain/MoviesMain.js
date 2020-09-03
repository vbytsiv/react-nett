import React from 'react';
import img from './../img/1.svg';
import './MoviesMain.css';

const MoviesMain = (props) =>
(
  <div className="moviesMain">
    <div className="moviesMainContent">
        <Filters genres={props.genres} sortBy={props.sortBy} />
        <Counter count={props.movies.length} />
        <MoviesPalette movies={props.movies} genres={props.genres}/>
    </div>
  </div>
);

const Filters = (props) => 
(
  <div className="filters">
    <div>
      {props.genres.map(g => (<button className="genreButton">{g.name}</button>))}
    </div>
    <div className="sorting">
      <span  className="sortBySpan">SORT BY</span>
      <select>
        {props.sortBy.map(x => (<option value={x.value}>{x.name}</option>))}
      </select>
    </div>
  </div>
);


const Counter = (props) => 
(
    <div className="counter"><b>{props.count}</b> movies found</div> 
);

const MoviesPalette = (props) => 
(
  <div className="moviesPalette">
      {props.movies.map(m => (<MovieCard movie={m} genre={props.genres[m.genreid]} />))}
  </div>
);

const MovieCard = (props) => 
(
  <div className="card">
    <img src={img}/>
    <div className="flex-container">
      <div>
        <div><b>{props.movie.title}</b></div>
        <div>{props.genre.name}</div>
      </div>
      <div className="genre">{props.movie.date}</div>
    </div>
  </div>
)

export default MoviesMain;