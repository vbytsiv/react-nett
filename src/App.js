import React from 'react';
import MoviesMain from './MoviesMain/MoviesMain.js'
import Header from './Header/Header.js'
import './App.css';
import {genres, movies, sortBy} from './data.js';
import Modal from './Modal/Modal.js';
import AddMovie from './AddMovie/AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      movies: movies
    };
  }

  handleAddMovie = () => {
      this.setState({ open: true });
  };

  closeModal = () => {
      this.setState({ open: false });
  };

  handleMovieAdded = (movie) => {
      this.setState(state => {
      const list = [...state.movies, movie];

      return {movies: list}
    });
    this.closeModal();
  }

  
  render () {
  return (
      <div className="App">
      <div className="columnMain">
        <Header className="header" genres={genres} handleAddMovie={this.handleAddMovie}/>        
        <MoviesMain movies={this.state.movies} genres={genres} sortBy={sortBy} />
      </div>
      <Modal show={this.state.open} handleClose={this.closeModal}>
        <AddMovie genres={genres} handleMovieAdded={this.handleMovieAdded} />
      </Modal>
    </div>
  );
}
}
export default App;
