import React from 'react';
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

const Header = (props) => (
<div className="header">
    <div className="headerContent">
        <div className="logoAndButton">
            <img src={logo} />
            <button className="addMovieButton">+ ADD MOVIE</button>
        </div>
        <SearchMovie />
    </div>
</div>
)

export default Header;