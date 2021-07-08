import React from 'react';
import PlayerSelectTile from './PlayerSelectTile.jsx'

function Player({ players }) {
  return (
    <div>
      <form>
        {players.map((player) => {
          return <PlayerSelectTile player={player} />
        })}
        <button className="saveplayers" type="submit">Save</button>
      </form>
    </div>
  )
}

export default Player;