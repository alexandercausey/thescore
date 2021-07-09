import React, { useState } from 'react';
import './PlayerTile.css';

function PlayerTile({ players, commanders, totalPlayers }) {
  const [playerIndex, setPlayerIndex] = useState(0);
  const [commanderIndex, setCommanderIndex] = useState(0);
  const places = [];
  const getPlaces = () => {
    for (let i = 1; i <= totalPlayers; i++) {
      if (i === 1) {
        places.push('1st');
      }
      if (i === 2) {
        places.push('2nd');
      }
      if (i === 3) {
        places.push('3rd');
      }
      if (i > 3) {
        places.push(i + 'th');
      }
    }
  };
  getPlaces();
  console.log("tile", places);
  const handlePlayerSelect = (e) => {
    setPlayerIndex(e.target.value);
  }
  const handleCommanderSelect = (e) => {
    if (e.target.value < commanders.length && e.target.value > 0){
      setCommanderIndex(e.target.value);
    }
  }
  return (
    <div className="playertile">
      <div className="portraitcontainer">
        <img src={players[playerIndex].portraitUrl} className="portrait"></img>
      </div>
      <select className="playerselect" onChange={(e) => handlePlayerSelect(e)}>
        {players.map((player, index) => {
          return <option value={index} key={player.name}>{player.name}</option>
        })}
      </select>
      <div className="commandercontainer">
        <img src={commanders[commanderIndex].imageUrl} className="commander"></img>
      </div>
      <div className="commanderselectcontainer">
        <input className="commanderselect" list="commanderlist" onChange={(e) => handleCommanderSelect(e)}></input>
        <datalist id="commanderlist">
          {commanders.map((commander, index) => {
            return <option value={index} key={commander.name}>{commander.name}</option>
          })}
        </datalist>
      </div>
      <select className="placementselect">
        {places.map((place) => {
          return <option value={place} key={place} >{place}</option>
        })}
      </select>
    </div>
  )
}

export default PlayerTile;