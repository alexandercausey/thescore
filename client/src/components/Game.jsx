import React, { useState } from 'react';
import PlayerTile from './PlayerTile.jsx';

function Game({ players, commanders }) {
  const [totalPlayers, setTotalPlayers] = useState(4);
  const places = [];
  const getPlaces = () => {
    for (let i = 1; i <= totalPlayers; i++) {
      places.push(i);
    }
  };
  getPlaces();
  const removePlayer = () => {
    setTotalPlayers(totalPlayers - 1);
  };
  const addPlayer = () => {
    setTotalPlayers(totalPlayers + 1);
  };
  return (
    <div>
      {places.map((place) => {
        return <PlayerTile players={players} commanders={commanders} places={places} />
      })}
      <button className="addPlayer" onClick={addPlayer}>Add Player</button>
      <button className="removePlayer" onClick={removePlayer}>Remove Player</button>
    </div>
  )
}

export default Game;