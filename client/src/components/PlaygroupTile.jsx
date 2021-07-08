import React from 'react';

function PlaygroupTile({ name, logoUrl, players }) {
  render() {
    <div>
      <img className="pgtile" src={logoUrl} alt="Playgroup Logo"></img>
      <span className="pgname">{playgroupName}</span>
      {player.map((player, index) => {
        <img key={player.name} className="pgportrait" src={player.portraitUrl} alt={player.name}></img>
      })}
    </div>
  }
}