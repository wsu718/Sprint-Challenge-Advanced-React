import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';

const players = [
  { "name": "Alex Morgan", "country": "United States", "searches": 100, "id": 0 }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: players
    };
  };

  render() {
    return (
      <div className="App">
        <PlayerList players={players} />
      </div>
    );
  }
}

export default App;
