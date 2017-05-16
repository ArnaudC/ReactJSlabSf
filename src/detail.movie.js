import React, { Component } from 'react';
import Stars from './stars';

class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event, movie) {
        this.props.onInputChange(event, movie);
    }

    onDeleteMovie(movie)
    {
        this.props.onDeleteMovie(movie);
    }

    render() {
        var res = <div></div>;
        var movie = this.props.movie;

        if (!this.props.isConnected) {
            res = (<div className="movieDetail">
                    <div className="movieDetail__inner">
                        <div className="movieMedia">
                            <img src={movie.img} alt={movie.title} width="200px" height="300px"></img>
                        </div>
                        <div className="movieDescription">
                            <div className="movieDescription__title">Titre du film : {movie.title} </div>
                            
                            
                            
                            
                            
                            <div>Année de réalistaion : {movie.releaseYear} </div>
                            <div>Genre :{movie.genre} </div>
                            <div>Durée : {movie.duration} </div>
                            <div>Acteurs/ actrices : {movie.starring} </div>
                            <div>Réalisateurs : {movie.realisator} </div>
                            <a className="movieDescription__link" href={movie.url} >Bande annonce </a>
                            <Stars stars={movie.stars} isConnected={this.props.isConnected} onInputChange={this.onInputChange} movie={this.props.movie}/>
                        </div>
                        <div className="movieSynopsis">
                            <span>Synopsis</span>
                        {movie.synopsis} </div>
                    </div>
                
            </div>
            )
        }
        else {
            res = (
                <div className="movieDetail">
                    <form>
                        <label>
                            Titre:
                            <input type="text" value={movie.title} name="title" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <Stars stars={movie.stars} isConnected={this.props.isConnected} onInputChange={this.onInputChange} movie={this.props.movie}/>
                        <label>
                            Année de sortie:
                            <input type="text" value={movie.releaseYear} name="releaseYear" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <label>
                            Genre:
                            <input type="text" value={movie.genre} name="genre" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <label>
                            Durée du film:
                            <input type="text" value={movie.duration} name="duration" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <label>
                            Acteurs/actrices :
                            <input type="number" value={movie.starring} name="starring" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <label>
                            Réalisateur /Réalisatrice
                            <input type="text" value={movie.realisator} name="realisator" onChange={(e) => this.onInputChange(e, movie)} />
                        </label>
                        <label>
                            Description:
                            <textarea value={movie.synopsis} name="synopsis" cols="60" rows="10" onChange={(e) => this.onInputChange(e, movie)} ></textarea>
                        </label>
                    </form>
                    <button onClick={(e) => this.onDeleteMovie(movie)}>Supprimer le film</button>
                </div>
            )
        };

        return res;
    }
}

export default MovieDetail;