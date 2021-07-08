import React from 'react';
import './PlaygroupTile.css';

function PlaygroupTile({ playgroup, index, handlePlaygroupSelect }) {
  const handleClick = (e) => {
    e.preventDefault();
    handlePlaygroupSelect(index);
  }
  return(
    <div className="pgtile" >
      <img className="pgtileimg" src={playgroup.logoUrl} onClick={handleClick} alt="Playgroup Logo"></img>
      {playgroup.players.map((player, index) => {
        const position = (index) => {
          if (index <= 3) {
            return {
              gridColumnStart: index + 1,
              gridColumnEnd: index + 2,
              gridRowStart: 3,
              gridRowEnd: 4,
            };
          }
          return {
            gridColumnStart: 4,
            gridColumnEnd: 5,
            gridRowStart: 2,
            gridRowEnd: 3,
          }
        }
        return(
        <img key={player.name} className="pgportrait" style={position(index)} src={player.portraitUrl} alt={player.name}></img>
        );
      })}
    </div>
  )
}

export default PlaygroupTile;