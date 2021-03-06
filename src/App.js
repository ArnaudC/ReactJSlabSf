import React, { Component } from 'react';
import ListMovie from './list.movie';
import MovieDetail from './detail.movie';
import './App.css';
import dataJson from './list-movie.json';
import Connexion from './connexion';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: dataJson[0],
      movieList: [],
      isConnected: false
    };
    this.getMovieList(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleConnectedClick = this.handleConnectedClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.onDeleteMovie = this.onDeleteMovie.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  getMovieList() {
    // https://sfreact.azurewebsites.net/api/Movies/
    // http://localhost:49987/api/Movies
    return fetch('https://sfreact.azurewebsites.net/api/Movies/')
    .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data[0],
          movieList: data
        });
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  deleteMovie(id, newlist) {
    return fetch('https://sfreact.azurewebsites.net/api/Movies/' + id, {
        method: 'DELETE',
        body: {}
    })
    .then(response => response.json())
      .then(data => {
        this.setState({
          movie: newlist.length === 0 ?
          {
              url: "",
              stars: 2.5,
              img: "",
              title: "",
              releaseYear: "",
              genre: "",
              duration: "",
              starring: "",
              realisator: "",
              synopsis: "",
              id: null
          } : newlist[0],
          movieList:newlist
        });
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  postMovie(movie) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // var data = new FormData();
    // data.append("json", JSON.stringify(movie));
    fetch('https://sfreact.azurewebsites.net/api/Movies/', {
        method: 'POST',
        body: movie
        ,headers: myHeaders
    })
    .then(response => {
      response.json()
    })
    .then(newlist => {
      this.setState({
        movie: newlist.length === 0 ?
          {
              url: "",
              stars: 2.5,
              img: "",
              title: "",
              releaseYear: "",
              genre: "",
              duration: "",
              starring: "",
              realisator: "",
              synopsis: "",
              id: null
          } : newlist[0],
        movieList: newlist
      });
    })
    .catch(function(error) {
      console.log(error)
    });
  }

handleAddMovie()
{
  var movie =
  {
        url: "",
        stars: 2.5,
        img: "",
        title: "",
        releaseYear: "",
        genre: "",
        duration: "",
        starring: "",
        realisator: "",
        synopsis: "",
        id: null
    }
  this.setState(
    { "movie": movie }
  )
}

  handleMovieClick(movie) {
    this.setState(
      { "movie": movie }
    )
  }

  handleConnectedClick(val) {
    this.setState(
      { "isConnected": val }
    )
  }

  onDeleteMovie(movie)
  {
    var newlist = this.state.movieList.filter(m => {
      return(m.id !== movie.id);
    });
    if (!!movie.id) {
      this.deleteMovie(movie.id, newlist);
    }
  }

  onInputChange(event, movie) {
    this.postMovie(movie);
  }

  render() {
    var movie = this.state.movie;

    return (
      <div className="App">
        <ListMovie data={this.state.movieList} handleMovieClick={this.handleMovieClick} isConnected={this.state.isConnected} handleAddMovie={this.handleAddMovie} />
        <Connexion handleConnectedClick={this.handleConnectedClick} isConnected={this.state.isConnected} />
        <MovieDetail movie={movie} isConnected={this.state.isConnected} onInputChange={this.onInputChange} onDeleteMovie={this.onDeleteMovie}/>
      </div>
    );
  }
}

export default App;
