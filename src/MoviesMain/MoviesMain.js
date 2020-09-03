import React from 'react';
import img from './../img/1.svg';
import './MoviesMain.css';

const MoviesMain = (props) =>
(
  <>
  <Filters genres={props.genres} sortBy={props.sortBy} />
  <Counter count={props.movies.length} />
  <MoviesPalette movies={props.movies} genres={props.genres}/>
  </>
);

const Filters = (props) => 
(
  <div className="flex-container">
    <div>
      {props.genres.map(g => (<button className="genreButton">{g.name}</button>))}
    </div>
    <div className="sorting">
      <span>SORT BY</span>
      <select>
        {props.sortBy.map(x => (<option value={x.value}>{x.name}</option>))}
      </select>
    </div>
  </div>
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
      <div className="genre">{props.genre.name}</div>
    </div>
  </div>
)

export default MoviesMain;