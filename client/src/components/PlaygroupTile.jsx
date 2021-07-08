import React from 'react';

function PlaygroupTile({ playgroup }) {
  return(
    <div>
      <img className="pgtile" src={playgroup.logoUrl} alt="Playgroup Logo"></img>
      {playgroup.players.map((player, index) => {
        return(
        <img key={player.name} className="pgportrait" src={player.portraitUrl} alt={player.name}></img>
        );
      })}
    </div>
  )
}

export default PlaygroupTile;