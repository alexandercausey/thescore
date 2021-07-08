import React from 'react';

function PlayerTile({ players, commanders, places }) {
  return (
    <div>
      <label for="playerselect">Player:</label>
      <select id="playerselect">
        {players.map((player) => {
          <option value={player.name} key={player.name}>{player.name}</option>
        })}
      </select>
      <label for="commanderselect">Commander:</label>
      <datalist id="commanderselect">
        {commanders.map((commander) => {
          <option value={commander} key={commander} />
        })}
      </datalist>
      <label for="placementselect">Placed:</label>
      <select id="placementselect">
        {places.map((place) => {
          <option value={place} key={place} />
        })}
      </select>
    </div>
  )
}