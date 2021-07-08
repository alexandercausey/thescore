import React from 'react';

function Player({ players }) {
  return (
    <div>
      <form>
        {players.map((player) => {
          <PlayerSelectTile player={player} />
        })}
        <button className="saveplayers" type="submit">Save</button>
      </form>
    </div>
  )
}