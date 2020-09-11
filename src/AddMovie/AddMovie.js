import React from 'react';
import PropTypes from 'prop-types';
import './AddMovie.css';

class AddMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
    }

    setInitialState = () => {
        this.setState(
            {
                title: '',
                date: '',
                url: '',
                genreId: null,
                overview: '',
                runtime: ''
            });
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    render() {
        return (
            <div className="addMovie">
                <span id="addMovieSpan">ADD MOVIE</span>
                <span>TITLE</span>
                <input type="text" className="textBox" onChange={e => this.setState({title: e.target.value})} value={this.state.title} />
                <span>RELEASE DATE</span>
                <input type="text" className="textBox" onChange={e => this.setState({date: e.target.value})}  value={this.state.date} />
                <span>MOVIE URL</span>
                <input type="text" className="textBox" onChange={e => this.setState({url: e.target.value})}  value={this.state.url} />
                <span>GENRE</span>
                <select onChange={e => this.setState({genre: e.target.value})}>
                    {this.props.genres.map(x => (<option value={x.id}>{x.name}</option>))}
                </select>
                <span>OVERVIEW</span>
                <input type="text" className="textBox" onChange={e => this.setState({overview: e.target.value})}  value={this.state.overview} />
                <span>RUNTIME</span>
                <input type="text" className="textBox" onChange={e => this.setState({runtime: e.target.value})}  value={this.state.runtime} />
                <div className="buttons">
                    <button className="resetButton" onClick={this.setInitialState}>RESET</button>
                    <button className="submitButton">SUBMIT</button>
                </div>
            </div>
        );
    }
}

AddMovie.propTypes = {
    genres: PropTypes.array
}

export default AddMovie;