import React, { useState } from 'react';

function PlayerSelectTile({ player }) {
  const [playerName, setPlayerName] = useState(player.playerName);
  const [portraitUrl, setPortraitUrl] = useState(player.portraitUrl);
  return(
    <div>
      <input type="text" className="playername" value={this.state.playerName}></input>
      <input type="text" className="portraiturl" value={this.state.portraitUrl}></input>
    </div>
  )
}

export default PlayerSelectTile;