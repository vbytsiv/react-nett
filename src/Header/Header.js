import React from 'react';

const AddMovie = (props) => (
    <button>+ ADD MOVIE</button>
)

const SearchMovie = (props) => (
    <div>
        <span>FIND YOUR MOVIE</span>
        <input type="text" />
        <button>Search</button>
    </div>
)

const Header = (props) => (
<div>
    <AddMovie />
    <SearchMovie />
</div>
)

export default Header;