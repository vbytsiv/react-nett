import React from 'react';
import './AddMovie.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

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
                genre: null,
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
                <input type="text" className="textBox"/>
                <span>RELEASE DATE</span>
                <input type="text" className="textBox"/>
                <span>MOVIE URL</span>
                <input type="text" className="textBox"/>
                <span>GENRE</span>
                <input type="text" className="textBox"/>
                <span>OVERVIEW</span>
                <input type="text" className="textBox"/>
                <span>RUNTIME</span>
                <input type="text" className="textBox"/>
                <button>RESET</button>
                <button>SUBMIT</button>
            </div>
        );
    }
}

export default AddMovie;