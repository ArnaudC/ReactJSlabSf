import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ListMovie extends Component {

  handleClick(movie) {
    this.props.handleMovieClick(movie);
  }


  handleAddMovie (event)  {
    this.props.handleAddMovie(event);
  }

  render() {
    var moviesList = this.props.data;
    return (
      <div className="listMovie">
       <h1 className="app-title">MOVIZ</h1>
        <ul>
          {
            moviesList.map(
              movie => {
                return (
                  <li key={movie.id}>
                    <img src={movie.img} alt={movie.title} onClick={(e) => this.handleClick(movie)} />
                  </li>
                )
              })}
              <div>
              {
                this.props.isConnected &&
                <li>
                  <button onClick={(e) => this.handleAddMovie()}>Ajouter un film</button>
                </li>
              }
              </div>
        </ul>

      </div>
    );
  }
}

export default ListMovie;