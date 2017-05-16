import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Connexion extends Component {

  handleClick(val) {
    this.props.handleConnectedClick(val);
  }

  render() {
    return (
      <div className="connexion">
        <button onClick={(e) => this.handleClick(!this.props.isConnected)}>{this.props.isConnected ? "Deconnexion" : "Connexion"}</button>
      </div>
    );
  }
}

export default Connexion;