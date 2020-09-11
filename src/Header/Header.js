import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import logo from './../img/logo.png';

const SearchMovie = (props) => (
    <div className="search" >
        <span className="findYourMovieSpan">FIND YOUR MOVIE</span>
        <div className="searchTextBoxAndButton">
            <input type="text" className="searchMovieTextBox" />
            <button className="searchMovieButton">SEARCH</button>
        </div>
    </div>
)

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div className="header">
            <div className="headerContent">
                <div className="logoAndButton">
                    <img src={logo} />
                    <button className="addMovieButton" onClick={this.props.handleAddMovie}>+ ADD MOVIE</button>
                </div>
                <SearchMovie />
            </div>
        </div>);
        }
    }

Header.propTypes = {
    handleAddMovie : PropTypes.func.isRequired
}

export default Header;