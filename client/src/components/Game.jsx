import React from 'react';
import PlayerTile from './PlayerTile';

function Game({ players, commanders }) {
  const [totalPlayers, setTotalPlayers] = useState(4);
  const places = [];
  getPlaces() {
    for (let i = 1; i <= totalPlayers; i++) {
      places.push(i);
    }
  };
  getPlaces();
  removePlayer() {
    setTotalPlayers(totalPlayers - 1);
  };
  addPlayer() {
    setTotalPlayers(totalPlayers + 1);
  };
  return (
    <div>
      {places.map((place) => {
        <PlayerTile players={players} commanders={commanders} places={places} />
      })}
      <button className="addPlayer" onClick={addPlayer}>Add Player</button>
      <button className="removePlayer" onClick={removePlayer}>Remove Player</button>
    </div>
  )
}

export default Game;