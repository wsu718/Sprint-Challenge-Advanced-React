import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import axios from 'axios';

const players = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: players
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
  }



  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
