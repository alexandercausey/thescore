import React, { useState } from 'react';

function PlayerSelectTile({ player }) {
  const [playerName, setPlayerName] = useState(player.name);
  const [portraitUrl, setPortraitUrl] = useState(player.portraitUrl);
  const handleNameChange = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  }
  const handlePortraitChange = (e) => {
    e.preventDefault();
    setPortraitUrl(e.target.value);
  }
  return(
    <div>
      <input type="text" className="playername" value={playerName} onChange={handleNameChange}></input>
      <input type="text" className="portraiturl" value={portraitUrl} onChange={handlePortraitChange}></input>
    </div>
  )
}

export default PlayerSelectTile;