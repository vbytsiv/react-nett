import React from 'react';
import img from './../img/1.svg';
import './MoviesMain.css';

class MoviesMain extends React.Component{
  constructor(props) {
    super(props);
  }

  state = {
    selectedGenreId: this.props.genres[0].id,
    filteredMovies: this.props.movies
  }

  handleGenreSelectionChange = (id) =>{
    this.filterMovies(id);
  }

  filterMovies(selectedGenreId){
    if (selectedGenreId == 0)
      this.setState({filteredMovies: this.props.movies});
    else
      this.setState({filteredMovies: this.props.movies.filter(x => x.genreId == selectedGenreId)})
  }

  render() {
    return (
      <div className="moviesMain">
        <div className="moviesMainContent">
            <Filters genres={this.props.genres} sortBy={this.props.sortBy} onGenreSelectionChange={this.handleGenreSelectionChange} />
            <Counter count={this.state.filteredMovies.length} />
            <MoviesPalette movies={this.state.filteredMovies} genres={this.props.genres}/>
        </div>
      </div>
    );
  }
}

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedId: 0
  }

  handleClick = (event) => {
    this.setState({selectedId : event.target.id});
    this.props.onGenreSelectionChange(event.target.id);
  }

  render() {
    return (
      <div className="filters">
        <div>
          {
            this.props.genres.map(g => 
            (<button 
                id={g.id} 
                className={g.id == this.state.selectedId ? 
                  "genreButton selectedGenre" : "genreButton unselectedGenre"}
                onClick={this.handleClick}>{g.name}</button>))
          }
        </div>
        <div className="sorting">
          <span  className="sortBySpan">SORT BY</span>
          <select>
            {this.props.sortBy.map(x => (<option value={x.value}>{x.name}</option>))}
          </select>
        </div>
      </div>
    )
  }
}

const Counter = (props) => 
(
  <div className="counter">
    <b>{props.count}</b> {props.count > 1 ? "movies" : "movie"} found
  </div> 
);

const MoviesPalette = (props) => 
(
  <div className="moviesPalette">
      {props.movies.map(m => (<MovieCard movie={m} genre={props.genres[m.genreId]} />))}
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