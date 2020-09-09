import React from 'react';
import './Header.css';
import logo from './../img/logo.png';
import Modal from './../Modal/Modal.js';
import AddMovie from './../AddMovie/AddMovie.js';

const SearchMovie = (props) => (
    <div className="search" >
        <span className="findYourMovieSpan">FIND YOUR MOVIE</span>
        <div className="searchTextBoxAndButton">
            <input type="text" className="searchMovieTextBox" />
            <button className="searchMovieButton">SEARCH</button>
        </div>
    </div>
)

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
    }

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };

    render() {
        return(
        <div className="header">
            <div className="headerContent">
                <div className="logoAndButton">
                    <img src={logo} />
                    <button className="addMovieButton" onClick={this.openModal}>+ ADD MOVIE</button>
                </div>
                <SearchMovie />
                <Modal show={this.state.open} handleClose={this.closeModal}>
                    <AddMovie />
                </Modal>
            </div>
        </div>);
        }
    }
export default Header;