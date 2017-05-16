import React, { Component } from 'react';
import ListMovie from './list.movie';
import MovieDetail from './detail.movie';
import './App.css';
import dataJson from './list-movie.json';
import Connexion from './connexion';
import $ from 'jquery';


class App extends Component {

  constructor(props) {
    super(props);
    // this.getMovieList();
    this.state = { movie: dataJson[0],
          movieList: dataJson,
      isConnected: false
    };
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleConnectedClick = this.handleConnectedClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.onDeleteMovie = this.onDeleteMovie.bind(this);
  }

// getMovieList(){
//    return $.getJSON('https://sfreact.azurewebsites.net/api/Movies/1')
//       .then((data) => {
//         this.setState({ 
//           movie: data[0],
//           movieList: data });
//       }); 
// }

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
    console.log(newlist);
    this.setState(
        {
          "movieList": newlist,
          "movie": newlist.length === 0 ?
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
          } : newlist[0]
        }
      )
  }

  onInputChange(event, movie) {
    const target = event.target;
    const value = target.value;

    if (movie.id === null)
    {
      movie.id = new Date();
      var movieList = this.state.movieList;
      movieList.push(movie);
      this.setState(
        { "movieList": movieList }
      )
    }
    else
    {
      var movieList = this.state.movieList.map(m => {
      if (m.id === movie.id) {
        m[target.name] = value;
      }
      return m;
    });
    }
    this.setState(
      { "movieList": movieList }
    )
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
