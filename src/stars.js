import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Stars extends Component {

  onInputChange(event, movie) {
        this.props.onInputChange(event, movie);
    }

  render() {
    if (this.props.isConnected)
    {
      return (
          <label>
            Note 
            <input type="number" value={this.props.stars} name="stars" onChange={(e) => this.onInputChange(e, this.props.movie)}/>
          </label>
      )
    }
    else
      return (
        <div> Note: {this.props.stars} </div>
      )
  }
}

export default Stars;